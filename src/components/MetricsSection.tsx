import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";

const METRICS = [
  {
    end: 18,
    decimals: 0,
    suffix: "",
    unit: "dəqiqə",
    label: "Qənaət Olunan Vaxt",
    hint: "Demo dəhlizi: 28 May → Koroğlu. Adi xəritə 39 dəq, WayGo 21 dəq.",
    image: stills.ecoRoute,
  },
  {
    end: 22,
    decimals: 0,
    suffix: "%",
    unit: "yanacaq",
    label: "Azaldılan Karbon Həcmi",
    hint: "Donanma hekayəsi: yaşıl marşrutla ölçülən yanacaq və karbon qənaəti.",
    image: stills.metricsHud,
  },
  {
    end: 91.6,
    decimals: 1,
    suffix: "%",
    unit: "R²",
    label: "AI Dəqiqliyi",
    hint: "LightGBM test R². 2 saatlıq tıxac proqnozu · 250 min Bakı qeydi.",
    image: stills.bakuAccuracy,
  },
];

export function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useSceneFrames(sectionRef, 2);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".metric-card");

      cards.forEach((card, index) => {
        const valueEl = card.querySelector<HTMLElement>("[data-counter]");
        const metric = METRICS[index];
        if (!valueEl || !metric) return;

        const state = { val: 0 };

        gsap.to(state, {
          val: metric.end,
          duration: 2.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
            refreshPriority: 2,
          },
          onStart: () => {
            gsap.fromTo(
              valueEl,
              {
                textShadow:
                  "0 0 8px rgba(52,211,153,0.25), 0 0 0 rgba(52,211,153,0)",
                boxShadow: "0 0 0 rgba(52,211,153,0)",
              },
              {
                textShadow:
                  "0 0 28px rgba(52,211,153,0.95), 0 0 64px rgba(52,211,153,0.45)",
                boxShadow: "0 0 36px rgba(52,211,153,0.28)",
                duration: 0.42,
                ease: "power2.out",
                yoyo: true,
                repeat: 1,
                overwrite: "auto",
                onComplete: () => {
                  gsap.set(valueEl, { clearProps: "textShadow,boxShadow" });
                },
              },
            );
          },
          onUpdate: () => {
            valueEl.textContent = `${state.val.toFixed(metric.decimals)}${metric.suffix}`;
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="relative bg-zinc-950 px-4 py-28 md:px-8 md:py-36"
    >
      <div className="scene-frame mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.36em] text-emerald-400/80">
          02 · Statistika və Nailiyyətlər
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
          Rəqəmlər kadrın içinə düşəndə oyanır.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
          Demo dəhlizi, model testi və donanma hekayəsi — rəqəm kadrın içinə
          düşəndə oyanır.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
        {METRICS.map((metric) => (
          <article
            key={metric.label}
            className="scene-frame metric-card overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
          >
            <div className="relative aspect-[16/10]">
              <img
                src={metric.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>
            <div className="px-6 pb-7">
              <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                {metric.unit}
              </p>
              <p
                data-counter
                className="mt-3 font-display text-5xl font-extrabold text-emerald-400 text-neon md:text-6xl"
              >
                0{metric.suffix}
              </p>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {metric.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {metric.hint}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
