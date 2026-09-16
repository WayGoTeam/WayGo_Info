import { CONTACT_EMAIL, CONTACT_LINKEDIN } from "../i18n/strings";
import { useLocale } from "../i18n/LocaleContext";
import { stills } from "../lib/media";

export function Footer() {
  const { s } = useLocale();

  return (
    <footer className="border-t border-white/5 bg-night px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <img
            src={stills.waygoLogo}
            alt="WayGo"
            className="h-14 w-auto object-contain object-left md:h-16"
          />
          <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-leaf/80">
            {s.footer.tag}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={CONTACT_LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-paper/60 transition hover:text-leaf"
          >
            {s.footer.linkedin}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-paper/60 transition hover:text-leaf"
          >
            {s.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
