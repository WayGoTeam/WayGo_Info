import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { cn } from "../lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const edgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const card = cardRef.current;
      const shine = shineRef.current;
      const edge = edgeRef.current;
      if (!card || !shine || !edge || !contextSafe) return;

      gsap.set(card, { transformPerspective: 1100, transformStyle: "preserve-3d" });
      gsap.set(edge, { autoAlpha: 0 });

      const rotX = gsap.quickTo(card, "rotationX", {
        duration: 0.45,
        ease: "power3",
      });
      const rotY = gsap.quickTo(card, "rotationY", {
        duration: 0.45,
        ease: "power3",
      });
      const lift = gsap.quickTo(card, "y", { duration: 0.45, ease: "power3" });

      const onMove = contextSafe((event: MouseEvent) => {
        const box = card.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        rotY(x * 16);
        rotX(-y * 14);
        lift(-6);
        gsap.set(shine, {
          background: `radial-gradient(420px circle at ${x * 100 + 50}% ${y * 100 + 50}%, rgba(52,211,153,0.16), transparent 42%)`,
        });
        gsap.to(edge, { autoAlpha: 1, duration: 0.28, overwrite: "auto" });
      });

      const onLeave = contextSafe(() => {
        rotX(0);
        rotY(0);
        lift(0);
        gsap.set(shine, {
          background:
            "radial-gradient(420px circle at 50% 0%, rgba(52,211,153,0.08), transparent 46%)",
        });
        gsap.to(edge, { autoAlpha: 0, duration: 0.4, overwrite: "auto" });
      });

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      return () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="h-full [perspective:1100px]">
      <div
        ref={cardRef}
        className={cn(
          "relative h-full will-change-transform overflow-hidden rounded-3xl border border-white/10 bg-night",
          className,
        )}
      >
        <div
          ref={shineRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(420px circle at 50% 0%, rgba(52,211,153,0.08), transparent 46%)",
          }}
        />
        <div
          ref={edgeRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-30 rounded-3xl"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(52,211,153,0.48), inset 0 0 28px rgba(52,211,153,0.08), 0 0 22px rgba(52,211,153,0.14)",
          }}
        />
        <div className="relative z-20 flex h-full flex-col">{children}</div>
      </div>
    </div>
  );
}
