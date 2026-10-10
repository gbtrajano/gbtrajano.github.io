type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({ id, kicker, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-slate-200/70 py-20 sm:py-24 dark:border-slate-800/70"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          {kicker}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
