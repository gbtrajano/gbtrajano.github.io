"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ChipIcon, CloseIcon, MenuIcon } from "@/components/icons";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Só aplica o fundo translúcido depois que a página rola um pouco.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile com Esc.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass =
    "rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/70 dark:hover:text-white";

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (scrolled
          ? "border-b border-neutral-200/80 bg-white/80 backdrop-blur-lg dark:border-neutral-800/80 dark:bg-neutral-950/80"
          : "border-b border-transparent")
      }
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label={`${site.name} — início`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-600 text-white shadow-lg shadow-neutral-900/20 dark:from-white dark:to-neutral-300 dark:text-neutral-950 dark:shadow-black/20">
            <ChipIcon className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold text-neutral-900 dark:text-white">
            {site.name}
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 sm:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
          <span aria-hidden="true" className="mx-2 h-5 w-px bg-neutral-200 dark:bg-neutral-800" />
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-9 w-9 place-items-center rounded-lg text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/70 dark:hover:text-white"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          className="border-t border-neutral-200/80 bg-white/95 px-6 pb-4 pt-2 backdrop-blur-lg sm:hidden dark:border-neutral-800/80 dark:bg-neutral-950/95"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-700 transition hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/70"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
