import { site } from "@/data/site";
import { Section } from "@/components/Section";

export function Experience() {
  return (
    <Section
      id="carreira"
      kicker="Carreira"
      title="Minha trajetória"
      description="As empresas e funções por onde passei até chegar aqui."
    >
      <ol className="border-l border-neutral-200 dark:border-neutral-800">
        {site.experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="relative pb-10 pl-8 last:pb-0"
          >
            {/*
              Bolinha na linha do tempo. Fica preenchida no trabalho atual.
              `left-0` + `-translate-x-1/2` centraliza na borda de 1px do <ol>.
            */}
            <span
              aria-hidden="true"
              className={
                "absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 " +
                (job.current
                  ? "border-neutral-900 bg-neutral-900 dark:border-white dark:bg-white"
                  : "border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950")
              }
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                {job.role}
              </h3>

              {job.current && (
                <span className="rounded-full border border-neutral-900 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-900 dark:border-white dark:text-white">
                  Atual
                </span>
              )}

              {job.period && (
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  {job.period}
                </span>
              )}
            </div>

            <p className="mt-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {job.company}
              {job.location && (
                <span className="font-normal text-neutral-400 dark:text-neutral-500">
                  {" · "}
                  {job.location}
                </span>
              )}
            </p>

            {job.highlights && job.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
