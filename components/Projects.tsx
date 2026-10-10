import { site } from "@/data/site";
import { Section } from "@/components/Section";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";

export function Projects() {
  return (
    <Section
      id="projetos"
      kicker="Projetos"
      title="Coisas que eu construí"
      description="Uma seleção do que considero mais representativo do meu trabalho."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {site.projects.map((project) => (
          <li
            key={project.title}
            className={
              "group relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 " +
              (project.featured
                ? "border-indigo-300/70 bg-indigo-50/40 shadow-lg shadow-indigo-500/5 dark:border-indigo-500/30 dark:bg-indigo-500/5"
                : "border-slate-200/80 bg-white/60 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:shadow-black/20")
            }
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {project.year}
              </span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 text-pretty dark:text-slate-400">
              {project.summary}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-slate-200 px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:border-slate-700/70 dark:text-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {(project.href || project.repo) && (
              <div className="mt-6 flex items-center gap-4 border-t border-slate-200/80 pt-4 dark:border-slate-800">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Ver online
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Código
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
