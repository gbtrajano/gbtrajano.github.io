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
            className={
              "rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/40" +
              // Grupo com muitos itens ocupa a linha inteira: assim a grade de
              // 2 colunas não fica com um buraco quando o total de grupos é ímpar.
              (group.items.length > 6 ? " sm:col-span-2" : "")
            }
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-white"
              />
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700/70 dark:bg-neutral-800/60 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
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
