import { stills } from "../lib/media";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <img
            src={stills.waygoLogo}
            alt="WayGo"
            className="h-14 w-auto object-contain object-left md:h-16"
          />
          <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-emerald-400/80">
            Bakı Mobiliti · Data Azərbaycanda qalır
          </p>
        </div>
        <a
          href="mailto:hello@waygo.az"
          className="text-sm text-zinc-400 transition hover:text-emerald-400"
        >
          hello@waygo.az
        </a>
      </div>
    </footer>
  );
}
