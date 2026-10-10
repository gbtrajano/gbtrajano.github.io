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
                ? "border-neutral-900/70 bg-neutral-50 shadow-lg shadow-neutral-900/5 dark:border-white/40 dark:bg-white/5 dark:shadow-black/20"
                : "border-neutral-200/80 bg-white/60 hover:shadow-lg hover:shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:shadow-black/20")
            }
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h3>
              <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                {project.year}
              </span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 text-pretty dark:text-neutral-400">
              {project.summary}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-neutral-200 px-2 py-0.5 font-mono text-[11px] text-neutral-500 dark:border-neutral-700/70 dark:text-neutral-400"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {(project.href || project.repo) && (
              <div className="mt-6 flex items-center gap-4 border-t border-neutral-200/80 pt-4 dark:border-neutral-800">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 underline-offset-4 transition hover:underline dark:text-white"
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
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
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
