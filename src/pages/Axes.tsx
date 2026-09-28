import { useI18n } from "../i18n";
import { AXES } from "../data/axes";

export function Axes() {
  const { copy } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-3xl font-black md:text-5xl">{copy.axes.title}</h1>
        <p className="mt-4 text-lg text-ink/70 dark:text-ink-dark/70">{copy.axes.subtitle}</p>
      </header>

      <div className="flex flex-col gap-6">
        {AXES.map((axis, i) => (
          <article
            key={axis.id}
            className="animate-fade-up rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-lg font-black"
                style={{ backgroundColor: axis.color, color: "#1c1a15" }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h2 className="font-serif text-xl font-bold md:text-2xl">{axis.shortLabel}</h2>
            </div>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-ink/5 p-4 dark:bg-ink-dark/5">
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink/50 dark:text-ink-dark/50">
                  {axis.poleA}
                </div>
                <p className="text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
                  {axis.longExplanation.es.split(".")[0]}.
                </p>
              </div>
              <div className="rounded-xl bg-ink/5 p-4 dark:bg-ink-dark/5">
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink/50 dark:text-ink-dark/50">
                  {axis.poleB}
                </div>
                <p className="text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
                  {axis.longExplanation.en.split(".")[0]}.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 pl-4 text-sm italic text-ink/60 dark:text-ink-dark/60" style={{ borderColor: axis.color }}>
              “{copy.axes.guide}: {axis.guide.es}”
            </blockquote>
          </article>
        ))}
      </div>
    </div>
  );
}
