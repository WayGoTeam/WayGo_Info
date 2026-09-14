import { useRef } from "react";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { TiltCard } from "./TiltCard";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-current">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 4.97 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3.5 9.25h3V21h-3V9.25ZM9.75 9.25h2.87v1.6h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21h-3V9.25Z" />
    </svg>
  );
}

const TEAM = [
  {
    initials: "MQ",
    name: "Mikayıl Quliyev",
    role: "Həmtəsisçi · Full-stack · DevOps",
    focus: "Backend · Xəritə · Biznes",
    bio: "WayGo-nun Spring Boot backendini, React xəritə panelini, auth, WebSocket və naviqasiya şlüzünü özü yazır. Məhsul icrası və biznes hekayəsi də onun masasıdır.",
    image: stills.mikayil,
    objectPosition: "center 18%",
    github: "https://github.com/miko44quliyev",
    linkedin: "https://www.linkedin.com/in/mikayil-guliyev-341275306",
  },
  {
    initials: "MH",
    name: "Müzəqil Həsənli",
    role: "Həmtəsisçi · AI / Data",
    focus: "Proqnoz · EcoPoints · Səsli AI",
    bio: "FastAPI mühərriki, LightGBM tıxac proqnozu (test R² 0.916), EcoPoints riyaziyyatı, karbon auditi və Azərbaycan səsli köməkçi onun qatıdır.",
    image: stills.muzaqil,
    objectPosition: "center 12%",
    github: "https://github.com/Muzaqil555",
    linkedin: "https://www.linkedin.com/in/muzaqil-hesenli-111837381",
  },
];

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useSceneFrames(sectionRef, 4);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative overflow-hidden bg-zinc-950 px-4 py-28 md:px-8 md:py-36"
    >
      <img
        src={stills.waygoNetwork}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-zinc-950/75" />

      <div className="relative z-10">
        <div className="scene-frame mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.36em] text-emerald-400/80">
            04 · Komanda
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Layihənin arxasında duranlar.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            İki həmtəsisçi. Agentura yoxdur. Backend, xəritə, AI və data eyni
            komandada, öz əlimizlə yazılır.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {TEAM.map((person) => (
            <div key={person.name} className="scene-frame">
              <TiltCard className="overflow-hidden bg-zinc-950/80 p-0">
                <div className="relative aspect-[4/5] max-h-[28rem] overflow-hidden bg-zinc-900 md:aspect-[5/6]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: person.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-zinc-950/70 font-display text-sm font-bold text-emerald-400 backdrop-blur">
                    {person.initials}
                  </div>
                </div>
                <div className="p-8 pt-5">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-300/85">{person.role}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {person.focus}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                    {person.bio}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} GitHub`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} LinkedIn`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
