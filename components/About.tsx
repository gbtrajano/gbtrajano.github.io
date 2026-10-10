import { site } from "@/data/site";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section
      id="sobre"
      kicker="Sobre"
      title="Quem está do outro lado da tela"
      description={`${site.role} · ${site.location}`}
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {site.bio.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-neutral-600 text-pretty dark:text-neutral-400"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-4 self-start">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/40"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-medium leading-snug text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
