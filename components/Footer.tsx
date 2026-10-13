import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/70 py-10 dark:border-neutral-800/70">
      <div className="mx-auto flex max-w-5xl justify-center px-6">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
