import { useRef } from "react";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { TiltCard } from "./TiltCard";

const TEAM = [
  {
    initials: "MQ",
    name: "Mikayıl Quliyev",
    role: "Həmtəsisçi · Full-Stack Engineer",
    focus: "Backend · DevOps · GTM",
    bio: "Spring Boot, React, auth, TomTom/Valhalla inteqrasiyası. Məhsulun icrası və toxum hekayəsi onun masasıdır.",
    image: stills.metricsHud,
  },
  {
    initials: "MH",
    name: "Müzəqil Həsənli",
    role: "Həmtəsisçi · AI Developer / Data Scientist",
    focus: "Routing · Verra · Səsli NLP",
    bio: "FastAPI, LightGBM 91.6%, Gemini ReAct+RAG, EcoPoints hash. Model, karbon və BanuNeural səs qatı.",
    image: stills.bakuAccuracy,
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
            İki həmtəsisçi. Agentura yoxdur. AI, data və mühəndislik eyni otaqda
            yazılır.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {TEAM.map((person) => (
            <div key={person.name} className="scene-frame">
              <TiltCard className="overflow-hidden bg-zinc-950/80 p-0">
                <div className="relative h-40">
                  <img
                    src={person.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/30 bg-zinc-950/70 font-display text-lg font-bold text-emerald-400 backdrop-blur">
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
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
