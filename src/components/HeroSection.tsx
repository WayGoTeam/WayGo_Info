import { useRef, useState } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { reelFrames, reelVideo } from "../lib/media";
import { useLenis } from "./SmoothScroll";

export function HeroSection() {
  const { locale, s } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cueRef = useRef<HTMLButtonElement>(null);
  const [frameReady, setFrameReady] = useState(false);
  const lenis = useLenis();

  useGSAP(
    () => {
      const video = videoRef.current;
      const section = sectionRef.current;
      const cue = cueRef.current;
      if (!video || !section || !cue) return;

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");
      video.preload = "auto";
      const snapStart = () => setFrameReady(true);
      snapStart();
      video.addEventListener("loadeddata", snapStart, { once: true });

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        video.pause();
        gsap.set(cue, { autoAlpha: 1 });
      });

      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(cue, { autoAlpha: 1 });
          video.loop = true;
          const play = () => {
            void video.play().catch(() => undefined);
          };
          play();
          video.addEventListener("canplay", play);
          const unlock = () => play();
          window.addEventListener("touchstart", unlock, { passive: true });
          window.addEventListener("click", unlock);
          return () => {
            video.removeEventListener("canplay", play);
            window.removeEventListener("touchstart", unlock);
            window.removeEventListener("click", unlock);
            video.pause();
          };
        },
      );

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          video.pause();
          video.loop = false;
          video.currentTime = 0;
          gsap.set(cue, { autoAlpha: 1 });
          const playhead = { p: 0 };

          const apply = (p: number) => {
            gsap.set(cue, { autoAlpha: 1 - Math.min(1, p * 2.2) });
            if (!video.duration) return;
            const next = p * Math.max(0, video.duration - 0.04);
            if (Math.abs(video.currentTime - next) > 1 / 48) {
              video.currentTime = next;
            }
          };

          const tween = gsap.to(playhead, {
            p: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => {
                const seconds = video.duration || 10;
                return `+=${Math.round(seconds * 780)}`;
              },
              pin: true,
              scrub: 0.18,
              fastScrollEnd: true,
              anticipatePin: 1,
              refreshPriority: 0,
            },
            onUpdate: () => apply(playhead.p),
          });

          const onMeta = () => ScrollTrigger.refresh();
          video.addEventListener("loadedmetadata", onMeta);

          return () => {
            video.removeEventListener("loadedmetadata", onMeta);
            tween.kill();
          };
        },
      );

      return () => {
        mm.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope: sectionRef },
  );

  const goAbout = () => {
    if (lenis) {
      lenis.scrollTo("#about");
      return;
    }
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative bg-night"
      aria-label={s.hero.label}
    >
      <h1 className="sr-only">{s.hero.title}</h1>
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src={reelFrames[0]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            frameReady ? "opacity-100" : "opacity-0"
          }`}
          src={reelVideo}
          poster={reelFrames[0]}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent"
        />
        <button
          ref={cueRef}
          type="button"
          onClick={goAbout}
          className="hero-scroll-cue absolute inset-x-0 bottom-8 z-30 mx-auto md:bottom-12"
        >
          <span aria-hidden className="hero-scroll-cue__icon">
            <svg
              className="hero-scroll-cue__arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="M6 13l6 6 6-6" />
            </svg>
          </span>
          <span className="hero-scroll-cue__label">
            {locale === "az" ? s.hero.scrollAz : s.hero.scrollEn}
          </span>
        </button>
      </div>
    </section>
  );
}
