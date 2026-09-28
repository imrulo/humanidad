import { useI18n } from "../i18n";

export function About() {
  const { copy } = useI18n();
  const a = copy.about;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-3xl font-black md:text-5xl">{a.title}</h1>
        <p className="mt-4 text-lg text-ink/70 dark:text-ink-dark/70">{a.subtitle}</p>
      </header>

      <div className="flex flex-col gap-8">
        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="what">
          <h2 id="what" className="mb-3 font-serif text-2xl font-bold">{a.whatTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{a.whatText}</p>
        </section>

        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="why">
          <h2 id="why" className="mb-3 font-serif text-2xl font-bold">{a.whyTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{a.whyText}</p>
        </section>

        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="credits">
          <h2 id="credits" className="mb-3 font-serif text-2xl font-bold">{a.creditsTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{a.creditsText}</p>
        </section>

        <section className="rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15" aria-labelledby="license">
          <h2 id="license" className="mb-3 font-serif text-2xl font-bold">{a.licenseTitle}</h2>
          <p className="leading-relaxed text-ink/70 dark:text-ink-dark/70">{a.licenseText}</p>
        </section>
      </div>
    </div>
  );
}
