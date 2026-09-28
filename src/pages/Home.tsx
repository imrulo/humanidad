import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { useI18n } from "../i18n";
import type { Scores } from "../data/axes";
import { computeMatches } from "../lib/match";
import { Monogram } from "../components/Monogram";
import type { QuizMode } from "../store/quiz";

const SIZES: { mode: QuizMode; labelKey: "sizeShort" | "sizeStandard" | "sizeDeep"; timeKey: "sizeShortTime" | "sizeStandardTime" | "sizeDeepTime"; descKey: "sizeShortDesc" | "sizeStandardDesc" | "sizeDeepDesc" }[] = [
  { mode: "short", labelKey: "sizeShort", timeKey: "sizeShortTime", descKey: "sizeShortDesc" },
  { mode: "standard", labelKey: "sizeStandard", timeKey: "sizeStandardTime", descKey: "sizeStandardDesc" },
  { mode: "deep", labelKey: "sizeDeep", timeKey: "sizeDeepTime", descKey: "sizeDeepDesc" },
];

// Datos ficticios para el ejemplo de retrato.
const EXAMPLE_SCORES: Scores = {
  "hogar-imperio": 30,
  "asamblea-cetro": 25,
  "desorden-orden": 35,
  "raiz-transito": 60,
  "tregua-hierro": 20,
  "umbral-cruzada": 15,
  "comun-mio": 40,
  "plan-precio": 55,
  "muralla-puerto": 45,
  "altar-taller": 70,
  "herencia-quiebre": 65,
  "organo-circuito": 50,
};

export function Home() {
  const { copy, lang } = useI18n();
  const exampleMatch = computeMatches(EXAMPLE_SCORES);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 py-12 text-center md:py-20">
        <h1 className="max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {copy.home.heroTitle}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {copy.home.heroSubtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/quiz?modo=short"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-paper transition-transform hover:scale-105 dark:bg-ink-dark dark:text-paper-dark"
          >
            {copy.home.cta}
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/ejes"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-6 py-3 font-bold text-ink transition-colors hover:border-ink/40 dark:border-ink-dark/20 dark:text-ink-dark dark:hover:border-ink-dark/40"
          >
            {copy.home.ctaSecondary}
          </Link>
        </div>
      </section>

      {/* Tamaños como alternativa */}
      <section className="py-8" aria-labelledby="sizes-heading">
        <h2 id="sizes-heading" className="mb-6 text-center font-serif text-xl font-bold text-ink/60 dark:text-ink-dark/60">
          {copy.home.sizesTitle}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {SIZES.map((size) => (
            <Link
              key={size.mode}
              to={`/quiz?modo=${size.mode}`}
              className="group flex flex-col gap-2 rounded-2xl border border-ink/15 p-5 transition-all hover:border-accent hover:shadow-lg dark:border-ink-dark/15 dark:hover:border-accent-dark"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold">{copy.home[size.labelKey]}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-ink/5 px-3 py-1 text-xs font-bold text-ink/60 dark:bg-ink-dark/5 dark:text-ink-dark/60">
                  <Clock size={12} />
                  {copy.home[size.timeKey]}
                </span>
              </div>
              <p className="text-sm text-ink/60 dark:text-ink-dark/60">{copy.home[size.descKey]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Espejo */}
      <section className="py-12" aria-labelledby="mirror-heading">
        <div className="rounded-2xl border border-ink/15 p-8 md:p-12 dark:border-ink-dark/15">
          <h2 id="mirror-heading" className="mb-4 font-serif text-2xl font-bold md:text-3xl">
            {copy.home.mirrorTitle}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-ink/70 dark:text-ink-dark/70">
            {copy.home.mirrorText}
          </p>
        </div>
      </section>

      {/* Ejemplo de retrato */}
      <section className="py-12" aria-labelledby="example-heading">
        <h2 id="example-heading" className="mb-2 text-center font-serif text-2xl font-bold md:text-3xl">
          {copy.home.exampleTitle}
        </h2>
        <p className="mb-8 text-center text-ink/60 dark:text-ink-dark/60">{copy.home.exampleText}</p>
        <div className="mx-auto max-w-md rounded-2xl border border-ink/15 bg-white p-6 shadow-xl dark:border-ink-dark/15 dark:bg-neutral-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-serif text-lg font-black">humani.dad</span>
            <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent dark:bg-accent-dark/20 dark:text-accent-dark">
              {exampleMatch.topIdeology.compatibility}% {copy.results.compatibility}
            </span>
          </div>
          <div className="mb-4 font-serif text-xl font-bold">
            {exampleMatch.topIdeology.item.name[lang]}
          </div>
          <div className="mb-4 flex items-center gap-3">
            <Monogram name={exampleMatch.topPerson.item.name} size={48} tint={exampleMatch.topPerson.item.tint} />
            <div>
              <div className="font-bold">{exampleMatch.topPerson.item.name}</div>
              <div className="text-sm text-ink/60 dark:text-ink-dark/60">
                {exampleMatch.topPerson.item.occupation[lang]}
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-ink/5 p-3 text-sm dark:bg-ink-dark/5">
            <span className="font-bold">{copy.results.archetype}:</span>{" "}
            {exampleMatch.topArchetype.item.name[lang]}
          </div>
        </div>
      </section>
    </div>
  );
}
