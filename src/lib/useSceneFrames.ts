import type { RefObject } from "react";
import { gsap, useGSAP } from "./gsap";

export function useSceneFrames(
  scope: RefObject<HTMLElement | null>,
  refreshPriority = 1,
) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        const root = scope.current;
        if (!root) return;
        gsap.set(".scene-frame", { autoAlpha: 1, y: 0 });
      });

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const root = scope.current;
          if (!root) return;

          gsap.utils
            .toArray<HTMLElement>(".scene-frame", root)
            .forEach((el, i) => {
              gsap.fromTo(
                el,
                { y: 36, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.85,
                  delay: i * 0.04,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none reverse",
                    refreshPriority,
                  },
                },
              );
            });
        },
      );

      return () => mm.revert();
    },
    { scope },
  );
}
