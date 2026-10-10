import { site } from "@/data/site";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Ferramentas que eu uso"
      description="O que eu domino hoje — e continuo estudando todo dia."
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {site.skills.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400"
              />
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700/70 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
