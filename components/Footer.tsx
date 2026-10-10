import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/70 py-10 dark:border-neutral-800/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {year} {site.name}. Feito com Next.js, Tailwind e Bun.
        </p>
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Publicado via GitHub Pages
        </p>
      </div>
    </footer>
  );
}
