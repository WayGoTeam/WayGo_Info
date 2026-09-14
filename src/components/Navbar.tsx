import { stills } from "../lib/media";
import { useLenis } from "./SmoothScroll";

const links = [
  { href: "#about", label: "Layihəmiz" },
  { href: "#metrics", label: "Nailiyyətlər" },
  { href: "#tech", label: "Texnologiya" },
  { href: "#team", label: "Komanda" },
  { href: "#contact", label: "Əlaqə" },
];

export function Navbar() {
  const lenis = useLenis();

  const go = (href: string) => {
    if (lenis) {
      lenis.scrollTo(href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <button
          type="button"
          onClick={() => go("#hero")}
          className="group flex items-center gap-3"
        >
          <img
            src={stills.waygoLogo}
            alt="WayGo"
            className="h-12 w-auto object-contain object-left md:h-14"
          />
          <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            BİZ KİMİK
          </span>
        </button>

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => go(link.href)}
                className="text-[11px] uppercase tracking-[0.22em] text-zinc-400 transition hover:text-emerald-400"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => go("#about")}
            className="rounded-full border border-white/15 bg-zinc-950/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-zinc-200 backdrop-blur-md transition hover:border-emerald-400/50 hover:text-emerald-300 md:hidden"
          >
            Layihəmiz
          </button>
          <button
            type="button"
            onClick={() => go("#contact")}
            className="rounded-full border border-emerald-400/50 bg-zinc-950/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-emerald-300 backdrop-blur-md transition hover:border-emerald-400 hover:bg-emerald-400/15 md:hidden"
          >
            Əlaqə
          </button>
        </div>
      </div>
    </header>
  );
}
