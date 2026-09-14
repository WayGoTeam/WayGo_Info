import { useRef } from "react";
import { stills } from "../lib/media";
import { useSceneFrames } from "../lib/useSceneFrames";
import { TiltCard } from "./TiltCard";

const STACK = [
  {
    image: stills.bakuAccuracy,
    kicker: "Model",
    title: "LightGBM proqnoz mühərriki",
    body: "İki saatlıq tıxac ehtimalı. Test R² 0.916. Reaksiya yox — ehtimal paylanması.",
  },
  {
    image: stills.ecoRoute,
    kicker: "Alqoritm",
    title: "Bölünmüş marşrut",
    body: "Valhalla yolu qiymətləndirir, WayGo tıxac və qəza cəriməsini qoyur. Axın 2–3 paralel yola bölünür.",
  },
  {
    image: stills.metricsHud,
    kicker: "Data",
    title: "250 min Bakı qeydi",
    body: "HUD-da yanacaq, vaxt və rayon siqnalı. FastAPI pipeline üzərində öz data qatımız.",
  },
  {
    image: stills.ecoPoints,
    kicker: "Mükafat",
    title: "EcoPoints",
    body: "Yaşıl sürücülük ölçülür. 1000 xal = 10 AZN yanacaq və ya enerji vauçeri.",
  },
  {
    image: stills.fuelVoucher,
    kicker: "Cüzdan",
    title: "Real vauçer",
    body: "Xallar kod olur. Sürücü qənaəti nağd vəd yox, yanacaq və enerji vauçeri kimi götürür.",
  },
  {
    image: stills.waygoNetwork,
    kicker: "Arxitektura",
    title: "Milli data qatı",
    body: "Spring Boot, React, FastAPI. Nəsimi, Yasamal, Səbail. Məlumat Azərbaycanda qalır.",
  },
];

export function TechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useSceneFrames(sectionRef, 3);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative bg-zinc-950 px-4 py-28 md:px-8 md:py-36"
    >
      <div className="scene-frame mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.36em] text-emerald-400/80">
          03 · Texnologiyamız
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
          Öz mühərrik, öz data, öz qaydalar.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
          Proqnoz, marşrut cəriməsi, EcoPoints və Azərbaycanda qalan data —
          hamısı öz kodumuzdur.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {STACK.map((item) => (
          <div key={item.title} className="scene-frame">
            <TiltCard className="h-full overflow-hidden bg-zinc-950 p-0">
              <div className="relative aspect-[16/10]">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-400/70">
                  {item.kicker}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
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
