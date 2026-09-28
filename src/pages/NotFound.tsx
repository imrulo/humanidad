import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export function NotFound() {
  const { copy } = useI18n();

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="mb-4 font-serif text-8xl font-black text-ink/20 dark:text-ink-dark/20">404</p>
      <h1 className="mb-4 font-serif text-3xl font-black">{copy.notFound.title}</h1>
      <p className="mb-8 text-lg text-ink/60 dark:text-ink-dark/60">{copy.notFound.text}</p>
      <Link
        to="/"
        className="rounded-full bg-ink px-6 py-3 font-bold text-paper dark:bg-ink-dark dark:text-paper-dark"
      >
        {copy.notFound.cta}
      </Link>
    </div>
  );
}
