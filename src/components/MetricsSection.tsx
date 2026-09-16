import { useRef } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { gsap, useGSAP } from "../lib/gsap";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { TiltCard } from "./TiltCard";

const METRIC_VALUES = [
  {
    end: 18,
    decimals: 0,
    suffix: "",
    image: stills.ecoRoute,
  },
  {
    end: 22,
    decimals: 0,
    suffix: "%",
    image: stills.metricsHud,
  },
  {
    end: 91.6,
    decimals: 1,
    suffix: "%",
    image: stills.bakuAccuracy,
  },
];

function formatMetric(
  metric: (typeof METRIC_VALUES)[number],
  val: number,
) {
  return `${val.toFixed(metric.decimals)}${metric.suffix}`;
}

export function MetricsSection() {
  const { s } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const shownRef = useRef(METRIC_VALUES.map((m) => formatMetric(m, 0)));
  const doneRef = useRef(false);
  useSceneFrames(sectionRef, 2);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".metric-card");

      if (doneRef.current) {
        cards.forEach((card, index) => {
          const valueEl = card.querySelector<HTMLElement>("[data-counter]");
          const metric = METRIC_VALUES[index];
          if (!valueEl || !metric) return;
          const text = formatMetric(metric, metric.end);
          shownRef.current[index] = text;
          valueEl.textContent = text;
        });
        return;
      }

      cards.forEach((card, index) => {
        const valueEl = card.querySelector<HTMLElement>("[data-counter]");
        const metric = METRIC_VALUES[index];
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
            const text = formatMetric(metric, state.val);
            shownRef.current[index] = text;
            valueEl.textContent = text;
          },
          onComplete: () => {
            const text = formatMetric(metric, metric.end);
            shownRef.current[index] = text;
            valueEl.textContent = text;
            if (shownRef.current.every((value, i) => {
              const m = METRIC_VALUES[i];
              return m ? value === formatMetric(m, m.end) : true;
            })) {
              doneRef.current = true;
            }
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
      className="relative bg-night px-4 py-28 md:px-8 md:py-36"
    >
      <div className="scene-frame mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          {s.metrics.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/60 md:text-base">
          {s.metrics.lead}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
        {METRIC_VALUES.map((metric, index) => {
          const copy = s.metrics.items[index];
          if (!copy) return null;
          return (
            <div key={metric.image} className="scene-frame h-full">
              <TiltCard className="metric-card group">
                <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
                  <img
                    src={metric.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-leaf/0 transition-colors duration-500 group-hover:bg-leaf/15" />
                </div>
                <div className="relative flex flex-1 flex-col px-6 pb-7 pt-1 transition-colors duration-500 group-hover:bg-forest">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-paper/45">
                    {copy.unit}
                  </p>
                  <p
                    data-counter
                    className="mt-3 font-display text-5xl font-extrabold text-leaf text-neon md:text-6xl"
                  >
                    {shownRef.current[index]}
                  </p>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {copy.label}
                  </h3>
                  <p className="mt-2 min-h-[2.75rem] text-sm leading-relaxed text-paper/45 transition-colors duration-500 group-hover:text-paper/70">
                    {copy.hint}
                  </p>
                </div>
              </TiltCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
