import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-slate-800/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {site.name}. Feito com Next.js, Tailwind e Bun.
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Publicado via GitHub Pages
        </p>
      </div>
    </footer>
  );
}
