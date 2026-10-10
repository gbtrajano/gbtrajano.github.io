import { site } from "@/data/site";
import { Section } from "@/components/Section";
import { SocialIcon } from "@/components/SocialIcon";
import { MailIcon } from "@/components/icons";

export function Contact() {
  return (
    <Section
      id="contato"
      kicker="Contato"
      title="Vamos trabalhar juntos"
      description="Aberto a oportunidades full-time, freelances e conversas sobre tecnologia."
    >
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-12 dark:border-slate-800 dark:from-slate-900/70 dark:to-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20"
        />

        <div className="relative">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            O jeito mais rápido de me encontrar
          </p>

          <a
            href={`mailto:${site.email}`}
            className="group mt-3 inline-flex items-center gap-3 text-xl font-semibold text-slate-900 transition hover:text-indigo-600 sm:text-3xl dark:text-white dark:hover:text-indigo-400"
          >
            <MailIcon className="h-6 w-6 shrink-0 text-indigo-500 sm:h-8 sm:w-8" />
            <span className="break-all">{site.email}</span>
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.socials
              .filter((social) => social.icon !== "mail")
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                >
                  <SocialIcon icon={social.icon} className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
          </div>

          <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            Também estou em {site.location}. Costumo responder em até 24h.
          </p>
        </div>
      </div>
    </Section>
  );
}
