import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { strings, type Locale, type Strings } from "./strings";

const STORAGE_KEY = "waygo.info.locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "az";
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "az";
}

interface LocaleContextValue {
  locale: Locale;
  s: Strings;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = strings[locale].meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", strings[locale].meta.description);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, s: strings[locale], setLocale }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
