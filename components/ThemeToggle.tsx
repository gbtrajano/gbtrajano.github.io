"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

/**
 * Alterna o tema escrevendo/removendo a classe `.dark` no <html>.
 *
 * Os dois ícones ficam sempre no DOM e são trocados por CSS (`dark:block`).
 * Isso evita qualquer divergência de hidratação entre servidor e cliente.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Modo privado ou storage bloqueado: o tema vale só nesta navegação.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
      className="grid h-9 w-9 place-items-center rounded-lg text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/70 dark:hover:text-white"
    >
      <SunIcon className="hidden h-5 w-5 dark:block" />
      <MoonIcon className="block h-5 w-5 dark:hidden" />
    </button>
  );
}
