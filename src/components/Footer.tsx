import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export function Footer() {
  const { copy } = useI18n();

  return (
    <footer className="border-t border-ink/10 py-8 dark:border-ink-dark/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
        <p className="font-serif text-2xl font-black text-ink dark:text-ink-dark">
          humani.dad
        </p>
        <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Footer">
          <Link to="/ejes" className="text-ink/60 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark">
            {copy.nav.axes}
          </Link>
          <Link to="/metodo" className="text-ink/60 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark">
            {copy.nav.method}
          </Link>
          <Link to="/nosotros" className="text-ink/60 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark">
            {copy.nav.about}
          </Link>
          <Link to="/donar" className="text-ink/60 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark">
            {copy.nav.donate}
          </Link>
        </nav>
        <p className="text-xs text-ink/40 dark:text-ink-dark/40">{copy.home.footerNote}</p>
      </div>
    </footer>
  );
}
