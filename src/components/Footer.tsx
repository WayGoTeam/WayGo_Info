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
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://github.com/WayGoTeam"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-emerald-400"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
            WayGoTeam
          </a>
          <a
            href="mailto:hello@waygo.az"
            className="text-sm text-zinc-400 transition hover:text-emerald-400"
          >
            hello@waygo.az
          </a>
        </div>
      </div>
    </footer>
  );
}
