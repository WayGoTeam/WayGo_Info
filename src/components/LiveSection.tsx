import { LIVE_APP_URL } from "../i18n/strings";
import { useLocale } from "../i18n/LocaleContext";

export function LiveSection() {
  const { s } = useLocale();

  return (
    <section id="live" className="live-wrap">
      <a
        href={LIVE_APP_URL}
        target="_blank"
        rel="noreferrer"
        className="live-chip"
      >
        <span className="live-chip__copy">
          <span className="live-chip__kicker">
            <span aria-hidden className="live-chip__dot" />
            {s.nav.live}
          </span>
          <span className="live-chip__label">{s.live.title}</span>
        </span>
        <span className="live-chip__cta">{s.live.cta}</span>
      </a>
    </section>
  );
}
