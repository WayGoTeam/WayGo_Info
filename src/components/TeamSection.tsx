import { useRef } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { TiltCard } from "./TiltCard";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-current">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 4.97 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3.5 9.25h3V21h-3V9.25ZM9.75 9.25h2.87v1.6h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21h-3V9.25Z" />
    </svg>
  );
}

const TEAM = [
  {
    image: stills.mikayil,
    objectPosition: "50% 18%",
    linkedin: "https://www.linkedin.com/in/mikayil-guliyev-341275306",
  },
  {
    image: stills.muzaqil,
    objectPosition: "50% 16%",
    linkedin: "https://www.linkedin.com/in/muzaqil-hesenli-111837381",
  },
];

export function TeamSection() {
  const { s } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  useSceneFrames(sectionRef, 4);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative overflow-hidden bg-forest px-4 py-28 md:px-8 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(211,236,136,0.16),transparent_52%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-grove/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-leaf/10 blur-3xl"
      />

      <div className="relative z-10">
        <div className="scene-frame mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            {s.team.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/60 md:text-base">
            {s.team.lead}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {TEAM.map((person, index) => {
            const copy = s.team.people[index];
            if (!copy) return null;
            return (
            <div key={person.image} className="scene-frame">
              <TiltCard className="overflow-hidden bg-night/80 p-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <img
                    src={person.image}
                    alt={copy.name}
                    className="h-full w-full scale-[1.18] object-cover"
                    style={{
                      objectPosition: person.objectPosition,
                      transformOrigin: "center 22%",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>
                <div className="p-8 pt-5">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {copy.name}
                  </h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-paper/45">
                    {copy.role}
                  </p>
                  <p className="mt-1 text-sm font-medium text-leaf/90">
                    {copy.focus}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-paper/60">
                    {copy.bio}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${copy.name} LinkedIn`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/75 transition hover:border-leaf/60 hover:text-leaf"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
