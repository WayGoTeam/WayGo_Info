import { useRef } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { gsap, useGSAP } from "../lib/gsap";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { useLenis } from "./SmoothScroll";

const BLOCK_IMAGES = [stills.trafficDelay, stills.ecoRoute, stills.bakuAccuracy];

export function AboutVisionSection() {
  const { s } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  useSceneFrames(sectionRef, 1);

  useGSAP(
    () => {
      const titleRoot = titleRef.current;
      if (!titleRoot) return;

      const heading = titleRoot.querySelector<HTMLElement>("[data-credits-title]");
      const copy = titleRoot.querySelectorAll<HTMLElement>("[data-credits-copy]");
      const actions = titleRoot.querySelector<HTMLElement>("[data-credits-actions]");
      const images = gsap.utils.toArray<HTMLElement>(".mission-ken");

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (heading && actions) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: titleRoot,
              start: "top 78%",
              toggleActions: "play none none reverse",
              refreshPriority: 1,
            },
          });

          tl.fromTo(
              heading,
              { autoAlpha: 0, y: 16, letterSpacing: "0.12em" },
              {
                autoAlpha: 1,
                y: 0,
                letterSpacing: "-0.025em",
                duration: 1.15,
                ease: "power3.out",
              },
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
      className="relative bg-night px-4 py-28 md:px-8 md:py-36"
    >
      <div
        ref={titleRef}
        className="mx-auto max-w-3xl text-center"
      >
        <h2
          data-credits-title
          className="font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
        >
          {s.about.title}
        </h2>
        <p
          data-credits-copy
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-paper/75 md:text-base"
        >
          {s.about.p1}
        </p>
        <p
          data-credits-copy
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-paper/60"
        >
          {s.about.p2}
        </p>
        <div
          data-credits-actions
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => go("#metrics")}
            className="rounded-full border border-leaf bg-leaf/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-leaf shadow-neon transition hover:bg-leaf hover:text-forest"
          >
            {s.about.ctaProject}
          </button>
          <button
            type="button"
            onClick={() => go("#contact")}
            className="rounded-full border border-leaf/55 bg-night/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-leaf hover:text-leaf hover:shadow-neon"
          >
            {s.about.ctaContact}
          </button>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
        {s.about.blocks.map((block, index) => (
          <article
            key={block.n}
            className="scene-frame group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-night transition duration-500 hover:border-leaf/35 hover:shadow-neon"
          >
            <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
              <div className="h-full w-full overflow-hidden transition duration-700 ease-out group-hover:scale-[1.04]">
                <img
                  src={BLOCK_IMAGES[index]}
                  alt=""
                  className="mission-ken h-full w-full origin-center object-cover will-change-transform"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <p className="absolute left-5 top-4 font-display text-2xl font-bold text-leaf/80">
                {block.n}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-6 pt-2">
              <h3 className="font-display text-xl font-bold text-white">
                {block.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">
                {block.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
