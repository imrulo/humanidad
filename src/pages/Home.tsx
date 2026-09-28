import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { useI18n } from "../i18n";
import { AXES } from "../data/axes";
import { AxisBar } from "../components/AxisBar";
import type { QuizMode } from "../store/quiz";

const SIZES: { mode: QuizMode; labelKey: "sizeShort" | "sizeStandard" | "sizeDeep"; timeKey: "sizeShortTime" | "sizeStandardTime" | "sizeDeepTime"; descKey: "sizeShortDesc" | "sizeStandardDesc" | "sizeDeepDesc" }[] = [
  { mode: "short", labelKey: "sizeShort", timeKey: "sizeShortTime", descKey: "sizeShortDesc" },
  { mode: "standard", labelKey: "sizeStandard", timeKey: "sizeStandardTime", descKey: "sizeStandardDesc" },
  { mode: "deep", labelKey: "sizeDeep", timeKey: "sizeDeepTime", descKey: "sizeDeepDesc" },
];

// Datos ficticios para el ejemplo de tarjeta.
const EXAMPLE_SCORES = {
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
} as const;

export function Home() {
  const { copy } = useI18n();

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 py-16 text-center md:py-24">
        <h1 className="max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {copy.home.heroTitle}
        </h1>
        <p className="max-w-xl text-lg text-ink/70 dark:text-ink-dark/70">
          {copy.home.heroSubtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/quiz"
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

      {/* Tamaños */}
      <section className="py-8" aria-labelledby="sizes-heading">
        <h2 id="sizes-heading" className="mb-6 text-center font-serif text-2xl font-bold md:text-3xl">
          {copy.home.sizesTitle}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {SIZES.map((size) => (
            <Link
              key={size.mode}
              to={`/quiz?modo=${size.mode}`}
              className="group flex flex-col gap-2 rounded-2xl border border-ink/15 p-6 transition-all hover:border-accent hover:shadow-lg dark:border-ink-dark/15 dark:hover:border-accent-dark"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-bold">{copy.home[size.labelKey]}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-ink/5 px-3 py-1 text-xs font-bold text-ink/60 dark:bg-ink-dark/5 dark:text-ink-dark/60">
                  <Clock size={12} />
                  {copy.home[size.timeKey]}
                </span>
              </div>
              <p className="text-sm text-ink/60 dark:text-ink-dark/60">{copy.home[size.descKey]}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-accent opacity-0 transition-opacity group-hover:opacity-100 dark:text-accent-dark">
                {copy.home.cta} <ArrowRight size={14} />
              </span>
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

      {/* Ejemplo de tarjeta */}
      <section className="py-12" aria-labelledby="example-heading">
        <h2 id="example-heading" className="mb-2 text-center font-serif text-2xl font-bold md:text-3xl">
          {copy.home.exampleTitle}
        </h2>
        <p className="mb-8 text-center text-ink/60 dark:text-ink-dark/60">{copy.home.exampleText}</p>
        <div className="mx-auto max-w-md rounded-2xl border border-ink/15 bg-white p-6 shadow-xl dark:border-ink-dark/15 dark:bg-neutral-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-serif text-lg font-black">humani.dad</span>
            <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent dark:bg-accent-dark/20 dark:text-accent-dark">
              78% match
            </span>
          </div>
          <div className="mb-4 font-serif text-xl font-bold">Comunalista hogareño</div>
          <div className="flex flex-col gap-3">
            {AXES.map((axis) => (
              <AxisBar key={axis.id} axis={axis} value={EXAMPLE_SCORES[axis.id]} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
