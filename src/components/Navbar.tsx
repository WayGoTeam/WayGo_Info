import type { Locale } from "../i18n/strings";
import { useLocale } from "../i18n/LocaleContext";
import { stills } from "../lib/media";
import { useLenis } from "./SmoothScroll";

export function Navbar() {
  const { s, locale, setLocale } = useLocale();
  const lenis = useLenis();

  const links = [
    { href: "#about", label: s.nav.about },
    { href: "#metrics", label: s.nav.metrics },
    { href: "#tech", label: s.nav.tech },
    { href: "#team", label: s.nav.team },
    { href: "#contact", label: s.nav.contact },
    { href: "#live", label: s.nav.live },
  ];

  const go = (href: string) => {
    if (lenis) {
      lenis.scrollTo(href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 md:px-8 md:py-5">
        <button
          type="button"
          onClick={() => go("#hero")}
          className="group flex items-center gap-3"
        >
          <img
            src={stills.waygoLogo}
            alt="WayGo"
            className="h-10 w-auto object-contain object-left md:h-14"
          />
        </button>

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => go(link.href)}
                className="text-[11px] uppercase tracking-[0.22em] text-paper/60 transition hover:text-leaf"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center rounded-full border border-white/15 bg-night/55 p-0.5 backdrop-blur-md">
            {(["az", "en"] as Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                  locale === code
                    ? "bg-leaf/20 text-leaf"
                    : "text-paper/45 hover:text-paper/85"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go("#about")}
            className="rounded-full border border-white/15 bg-night/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-paper/85 backdrop-blur-md transition hover:border-leaf/50 hover:text-leaf md:hidden"
          >
            {s.nav.about}
          </button>
          <button
            type="button"
            onClick={() => go("#contact")}
            className="rounded-full border border-leaf/50 bg-night/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-leaf backdrop-blur-md transition hover:border-leaf hover:bg-leaf/15 md:hidden"
          >
            {s.nav.contact}
          </button>
        </div>
      </div>
    </header>
  );
}
