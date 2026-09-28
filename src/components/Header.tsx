import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";
import { ProgressBar } from "./ProgressBar";
import { useQuizStore } from "../store/quiz";

export function Header() {
  const { copy } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const draft = useQuizStore((s) => s.draft);

  const isQuiz = location.pathname === "/quiz";
  const isResult = location.pathname.startsWith("/r/") || location.pathname === "/r";

  // En /quiz: solo logo + progreso.
  if (isQuiz && draft) {
    const total = draft.order.length;
    const answered = Object.keys(draft.answers).length;
    return (
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-sm dark:border-ink-dark/10 dark:bg-paper-dark/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="font-serif text-xl font-black tracking-tight text-ink dark:text-ink-dark"
          >
            humani.dad
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-ink/60 dark:text-ink-dark/60">
              {answered}/{total}
            </span>
            <div className="w-24">
              <ProgressBar current={answered} total={total} />
            </div>
          </div>
        </div>
      </header>
    );
  }

  // En resultado: solo logo + idioma + tema.
  if (isResult) {
    return (
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-sm dark:border-ink-dark/10 dark:bg-paper-dark/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="font-serif text-xl font-black tracking-tight text-ink dark:text-ink-dark"
          >
            humani.dad
          </Link>
          <div className="flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  }

  // Resto del sitio: logo, Empezar, idioma, tema + menú móvil "Más".
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-sm dark:border-ink-dark/10 dark:bg-paper-dark/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="font-serif text-xl font-black tracking-tight text-ink dark:text-ink-dark"
        >
          humani.dad
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/quiz?modo=short"
            className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-paper transition-transform hover:scale-105 dark:bg-ink-dark dark:text-paper-dark"
          >
            {copy.home.cta}
          </Link>
          <LangToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-ink hover:bg-ink/10 dark:text-ink-dark dark:hover:bg-ink-dark/10"
            onClick={() => setOpen((o) => !o)}
            aria-label={copy.nav.more}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-ink/10 px-4 py-2 md:hidden dark:border-ink-dark/10"
          aria-label={copy.nav.more}
        >
          <Link
            to="/quiz?modo=short"
            onClick={() => setOpen(false)}
            className="block rounded-lg bg-ink px-3 py-2 text-sm font-bold text-paper dark:bg-ink-dark dark:text-paper-dark"
          >
            {copy.home.cta}
          </Link>
          {[
            { to: "/ejes", label: copy.nav.axes },
            { to: "/metodo", label: copy.nav.method },
            { to: "/nosotros", label: copy.nav.about },
            { to: "/donar", label: copy.nav.donate },
            { to: "/comparar", label: copy.nav.compare },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm ${
                  isActive
                    ? "bg-ink/10 font-bold text-ink dark:bg-ink-dark/10 dark:text-ink-dark"
                    : "text-ink/70 hover:bg-ink/5 dark:text-ink-dark/70 dark:hover:bg-ink-dark/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
