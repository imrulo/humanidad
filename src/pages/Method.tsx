import { useI18n } from "../i18n";

export function Method() {
  const { copy } = useI18n();
  const m = copy.method;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-3xl font-black md:text-5xl">{m.title}</h1>
        <p className="mt-4 text-lg text-ink/70 dark:text-ink-dark/70">{m.subtitle}</p>
      </header>

      <div className="flex flex-col gap-8">
        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="how">
          <h2 id="how" className="mb-3 font-serif text-2xl font-bold">{m.howTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{m.howText}</p>
        </section>

        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="match">
          <h2 id="match" className="mb-3 font-serif text-2xl font-bold">{m.matchTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{m.matchText}</p>
        </section>

        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="limits">
          <h2 id="limits" className="mb-3 font-serif text-2xl font-bold">{m.limitsTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{m.limitsText}</p>
        </section>

        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="data">
          <h2 id="data" className="mb-3 font-serif text-2xl font-bold">{m.dataTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{m.dataText}</p>
        </section>

        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="why">
          <h2 id="why" className="mb-3 font-serif text-2xl font-bold">{m.whyTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{m.whyText}</p>
        </section>
      </div>
    </div>
  );
}
