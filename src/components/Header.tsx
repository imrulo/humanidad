import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { copy } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: copy.nav.home },
    { to: "/ejes", label: copy.nav.axes },
    { to: "/metodo", label: copy.nav.method },
    { to: "/nosotros", label: copy.nav.about },
    { to: "/donar", label: copy.nav.donate },
    { to: "/comparar", label: copy.nav.compare },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-sm dark:border-ink-dark/10 dark:bg-paper-dark/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="font-serif text-xl font-black tracking-tight text-ink dark:text-ink-dark"
        >
          humani.dad
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark"
                    : "text-ink/70 hover:bg-ink/5 hover:text-ink dark:text-ink-dark/70 dark:hover:bg-ink-dark/5 dark:hover:text-ink-dark"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-ink hover:bg-ink/10 md:hidden dark:text-ink-dark dark:hover:bg-ink-dark/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-ink/10 px-4 py-2 md:hidden dark:border-ink-dark/10"
          aria-label="Menú móvil"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm ${
                  isActive
                    ? "bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark"
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
