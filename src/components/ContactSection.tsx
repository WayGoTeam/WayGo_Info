import { useRef } from "react";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useSceneFrames(sectionRef, 5);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-zinc-950 px-4 py-32 md:px-8 md:py-40"
    >
      <img
        src={stills.waygoNetwork}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-zinc-950/72" />

      <div className="scene-frame relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-emerald-400/25 bg-zinc-950/60 px-8 py-20 text-center shadow-neon-lg backdrop-blur-md md:px-14 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.4em] text-emerald-400/80">
          05 · Əlaqə
        </p>
        <h2 className="mt-6 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Bakının növbəti hərəkət qatına yazın.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-zinc-300">
          Demo, data room və term sheet üçün — bir məktub kifayətdir.
        </p>
        <a
          href="mailto:hello@waygo.az"
          className="mt-12 inline-flex rounded-full border border-emerald-400 bg-emerald-400/15 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300 shadow-neon-lg transition hover:bg-emerald-400 hover:text-zinc-950 hover:shadow-neon-lg"
        >
          hello@waygo.az
        </a>
      </div>
    </section>
  );
}
