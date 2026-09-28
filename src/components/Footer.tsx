import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export function Footer() {
  const { copy } = useI18n();

  const links = [
    { to: "/ejes", label: copy.nav.axes },
    { to: "/metodo", label: copy.nav.method },
    { to: "/nosotros", label: copy.nav.about },
    { to: "/donar", label: copy.nav.donate },
    { to: "/comparar", label: copy.nav.compare },
  ];

  return (
    <footer className="border-t border-ink/10 py-8 dark:border-ink-dark/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
        <p className="font-serif text-2xl font-black text-ink dark:text-ink-dark">
          humani.dad
        </p>
        <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Footer">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-ink/60 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-ink/40 dark:text-ink-dark/40">{copy.home.footerNote}</p>
        <p className="text-xs text-ink/40 dark:text-ink-dark/40">
          <a
            href="https://github.com/imrulo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-ink dark:hover:text-ink-dark"
          >
            {copy.home.footerCredit}
          </a>
        </p>
      </div>
    </footer>
  );
}
