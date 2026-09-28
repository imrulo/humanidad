import { useI18n } from "../i18n";
import type { Lang } from "../data/axes";

export function LangToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-ink/20 p-0.5 dark:border-ink-dark/20">
      {(["es", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
            lang === l
              ? "bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark"
              : "text-ink/60 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
