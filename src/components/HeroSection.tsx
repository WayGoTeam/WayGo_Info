import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { reelVideo, stills } from "../lib/media";

const CAPTIONS = [
  { start: 0, end: 0.17, lead: "91.6%", rest: "AI dəqiqliyi" },
  { start: 0.17, end: 0.26, lead: "39 dəq", rest: "gecikmə" },
  { start: 0.26, end: 0.34, lead: "21 dəq", rest: "WayGo" },
  { start: 0.34, end: 0.49, lead: "EcoPoints", rest: "SOCAR" },
  { start: 0.49, end: 0.63, lead: "22%", rest: "yanacaq qənaəti" },
  { start: 0.63, end: 1, lead: "WayGo", rest: "şəbəkə" },
] as const;

function captionIndex(progress: number) {
  for (let i = CAPTIONS.length - 1; i >= 0; i -= 1) {
    if (progress >= CAPTIONS[i].start) return i;
  }
  return 0;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      const section = sectionRef.current;
      const bar = barRef.current;
      if (!video || !section || !bar) return;

      video.pause();
      video.preload = "auto";
      video.load();

      const captions = gsap.utils.toArray<HTMLElement>(".film-caption");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(captions, { autoAlpha: 0 });
        gsap.set(bar, { scaleX: 0, transformOrigin: "0% 50%" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(captions, { autoAlpha: 0 });
        gsap.set(bar, { scaleX: 0, transformOrigin: "0% 50%" });
        if (captions[0]) gsap.set(captions[0], { autoAlpha: 1 });

        const playhead = { p: 0 };
        let active = 0;

        const showCaption = (next: number) => {
          if (next === active) return;
          if (captions[active]) {
            gsap.to(captions[active], {
              autoAlpha: 0,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
          if (captions[next]) {
            gsap.to(captions[next], {
              autoAlpha: 1,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
          active = next;
        };

        gsap.to(playhead, {
          p: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=1050%",
            pin: true,
            scrub: 1.05,
            refreshPriority: 0,
          },
          onUpdate: () => {
            gsap.set(bar, { scaleX: playhead.p });
            showCaption(captionIndex(playhead.p));

            if (!video.duration) return;
            const next = playhead.p * (video.duration - 0.02);
            if (Math.abs(video.currentTime - next) > 0.004) {
              video.currentTime = next;
            }
          },
        });
      });

      return () => {
        mm.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative bg-zinc-950"
      aria-label="WayGo giriş"
    >
      <h1 className="sr-only">
        Bakının Nəqliyyat Gələcəyini Süni İntellektlə Şəkilləndiririk
      </h1>
      <div className="relative min-h-[100svh] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={reelVideo}
          poster={stills.citySky}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-20 h-8 bg-black md:h-10"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-20 h-8 bg-black md:h-10"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-14 left-5 z-30 md:bottom-[4.75rem] md:left-10"
        >
          {CAPTIONS.map((caption) => (
            <p
              key={caption.lead + caption.rest}
              className="film-caption invisible absolute bottom-0 left-0 flex items-center gap-3 whitespace-nowrap font-display text-[10px] font-medium uppercase tracking-[0.32em] text-white/75 opacity-0 md:text-[11px]"
            >
              <span className="h-px w-5 bg-emerald-400/80 md:w-7" />
              <span className="text-emerald-400">{caption.lead}</span>
              <span className="text-emerald-400/45">·</span>
              <span>{caption.rest}</span>
            </p>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[2px] bg-white/10"
        >
          <div
            ref={barRef}
            className="h-full w-full origin-left bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]"
          />
        </div>
      </div>
    </section>
  );
}
