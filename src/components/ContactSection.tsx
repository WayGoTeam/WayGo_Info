import { useRef } from "react";
import { CONTACT_EMAIL, CONTACT_LINKEDIN } from "../i18n/strings";
import { useLocale } from "../i18n/LocaleContext";
import { useSceneFrames } from "../lib/useSceneFrames";

export function ContactSection() {
  const { s } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  useSceneFrames(sectionRef, 5);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-night px-4 py-32 md:px-8 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(211,236,136,0.18),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-grove/40 blur-3xl"
      />

      <div className="scene-frame relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-leaf/25 bg-forest/70 px-8 py-20 text-center shadow-glow-lg backdrop-blur-md md:px-14 md:py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          {s.contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-paper/75">
          {s.contact.lead}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex rounded-full border border-leaf bg-leaf/15 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-leaf shadow-glow-lg transition hover:bg-leaf hover:text-forest hover:shadow-glow-lg"
          >
            {s.contact.cta}
          </a>
          <a
            href={CONTACT_LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-white/20 bg-night/40 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-paper/85 transition hover:border-leaf/60 hover:text-leaf"
          >
            {s.contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}
