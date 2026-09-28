import { createContext, useContext } from "react";
import type { Lang } from "../data/axes";
import { copyEs, type Copy } from "../data/copy.es";
import { copyEn } from "../data/copy.en";

export const copyMap: Record<Lang, Copy> = {
  es: copyEs,
  en: copyEn,
};

export interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  copy: Copy;
}

export const I18nContext = createContext<I18nContextValue>({
  lang: "es",
  setLang: () => undefined,
  copy: copyEs,
});

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}

const LANG_KEY = "humani.lang";

export function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // Ignorar.
  }
  if (typeof navigator !== "undefined" && navigator.language.startsWith("en")) {
    return "en";
  }
  return "es";
}

export function persistLang(lang: Lang): void {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Ignorar.
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
}
