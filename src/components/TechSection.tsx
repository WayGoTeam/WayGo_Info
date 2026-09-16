import { useRef } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { TiltCard } from "./TiltCard";

const STACK_IMAGES = [
  stills.bakuAccuracy,
  stills.ecoRoute,
  stills.metricsHud,
  stills.ecoPoints,
  stills.fuelVoucher,
  stills.waygoNetwork,
];

export function TechSection() {
  const { s } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  useSceneFrames(sectionRef, 3);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative bg-night px-4 py-28 md:px-8 md:py-36"
    >
      <div className="scene-frame mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          {s.tech.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/60 md:text-base">
          {s.tech.lead}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {s.tech.items.map((item, index) => (
          <div key={item.title} className="scene-frame h-full">
            <TiltCard className="h-full overflow-hidden bg-night p-0">
              <div className="relative aspect-[16/10] shrink-0">
                <img
                  src={STACK_IMAGES[index]}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-leaf/70">
                  {item.kicker}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">
                  {item.body}
                </p>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
