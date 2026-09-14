import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { useLenis } from "./SmoothScroll";

const BLOCKS = [
  {
    n: "01",
    image: stills.trafficDelay,
    title: "Tıxacı qabaqcadan görürük",
    body: "Adi xəritə tıxacı görəndən sonra hamını eyni küçəyə tökür. WayGo iki saatlıq ehtimal axını ilə sürücünü tıxac yığılmamış bölünmüş yola salır.",
  },
  {
    n: "02",
    image: stills.ecoRoute,
    title: "Yaşıl yolu mükafatlandırırıq",
    body: "Eco-routing yanacaq və tüstünü kəsir. EcoPoints yaşıl seçimi cəza yox, qazanc edir: 1000 xal = 10 AZN yanacaq və ya enerji vauçeri.",
  },
  {
    n: "03",
    image: stills.bakuAccuracy,
    title: "Bakı üçün öz AI-mızı yazırıq",
    body: "LightGBM, 250 min Bakı qeydi, test R² 0.916. Bu, hazır xəritə klonu deyil — özümüz qurduğumuz proqnoz, marşrut və səsli köməkçi qatı.",
  },
];

export function AboutVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  useSceneFrames(sectionRef, 1);

  useGSAP(
    () => {
      const titleRoot = titleRef.current;
      if (!titleRoot) return;

      const kicker = titleRoot.querySelector<HTMLElement>("[data-credits-kicker]");
      const heading = titleRoot.querySelector<HTMLElement>("[data-credits-title]");
      const copy = titleRoot.querySelectorAll<HTMLElement>("[data-credits-copy]");
      const actions = titleRoot.querySelector<HTMLElement>("[data-credits-actions]");
      const images = gsap.utils.toArray<HTMLElement>(".mission-ken");

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (kicker && heading && actions) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: titleRoot,
              start: "top 78%",
              toggleActions: "play none none reverse",
              refreshPriority: 1,
            },
          });

          tl.fromTo(
            kicker,
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" },
          )
            .fromTo(
              heading,
              { autoAlpha: 0, y: 16, letterSpacing: "0.12em" },
              {
                autoAlpha: 1,
                y: 0,
                letterSpacing: "-0.025em",
                duration: 1.15,
                ease: "power3.out",
              },
              "-=0.35",
            )
            .fromTo(
              copy,
              { autoAlpha: 0, y: 14 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: "power2.out",
              },
              "-=0.65",
            )
            .fromTo(
              actions,
              { autoAlpha: 0, y: 12 },
              { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" },
              "-=0.4",
            );
        }

        images.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1 },
            {
              scale: 1.06,
              duration: 11,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest("article") ?? img,
                start: "top 88%",
                toggleActions: "play none none reverse",
                refreshPriority: 1,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const go = (href: string) => {
    if (lenis) {
      lenis.scrollTo(href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-zinc-950 px-4 py-28 md:px-8 md:py-36"
    >
      <div
        ref={titleRef}
        className="mx-auto max-w-3xl text-center"
      >
        <p
          data-credits-kicker
          className="text-[11px] uppercase tracking-[0.36em] text-emerald-400/80"
        >
          WayGo · Biz Kimik · Portfolio
        </p>
        <h2
          data-credits-title
          className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
        >
          Bakının Nəqliyyat Gələcəyini
          <br />
          Süni İntellektlə
          <br />
          Şəkilləndiririk
        </h2>
        <p
          data-credits-copy
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base"
        >
          Bakı sürücüsü ildə 120–145 saatını tıxacda itirir. Mövcud xəritələr
          gecikir və hamını eyni küçəyə tökür. WayGo ona görə yarandı: tıxacı
          iki saat əvvəl görəcək, axını böləcək, qənaətə görə real vauçer
          qazandıracaq milli naviqasiya.
        </p>
        <p
          data-credits-copy
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400"
        >
          Missiyamız sadədir: Bakının hərəkətini daha az gözləmə, daha az tüstü
          və Azərbaycanda qalan data ilə yazmaq. İki həmtəsisçi, öz əlimizlə.
        </p>
        <div
          data-credits-actions
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => go("#metrics")}
            className="rounded-full border border-emerald-400 bg-emerald-400/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300 shadow-neon transition hover:bg-emerald-400 hover:text-zinc-950"
          >
            Layihəmiz
          </button>
          <button
            type="button"
            onClick={() => go("#contact")}
            className="rounded-full border border-emerald-400/55 bg-zinc-950/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-emerald-400 hover:text-emerald-400 hover:shadow-neon"
          >
            Bizimlə Əlaqə
          </button>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
        {BLOCKS.map((block) => (
          <article
            key={block.n}
            className="scene-frame group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition duration-500 hover:border-emerald-400/35 hover:shadow-neon"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="h-full w-full overflow-hidden transition duration-700 ease-out group-hover:scale-[1.04]">
                <img
                  src={block.image}
                  alt=""
                  className="mission-ken h-full w-full origin-center object-cover will-change-transform"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <p className="absolute left-5 top-4 font-display text-2xl font-bold text-emerald-400/80">
                {block.n}
              </p>
            </div>
            <div className="p-6 pt-2">
              <h3 className="font-display text-xl font-bold text-white">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {block.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
