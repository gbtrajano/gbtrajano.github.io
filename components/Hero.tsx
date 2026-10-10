import { site } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";
import { ArrowUpRightIcon } from "@/components/icons";

export function Hero() {
  // Sem projetos cadastrados, o CTA principal aponta para a carreira em vez de
  // levar a uma âncora que não existe.
  const cta =
    site.projects.length > 0
      ? { label: "Ver projetos", href: "#projetos" }
      : { label: "Ver minha trajetória", href: "#carreira" };

  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      {/* Fundo decorativo monocromático: dois brilhos neutros + grade com máscara radial. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-neutral-900/10 blur-3xl dark:bg-white/10" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-neutral-500/10 blur-3xl dark:bg-white/5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(115_115_115/0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgb(115_115_115/0.10)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="animate-fade-up">
            {site.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-900 opacity-75 dark:bg-white" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
                </span>
                Disponível para novos projetos
              </span>
            )}

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              <span className="block text-neutral-900 dark:text-white">{site.name}</span>
              <span className="mt-2 block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                {site.role}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 text-pretty dark:text-neutral-400">
              {site.headline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={cta.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/10 transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-950 dark:shadow-white/10 dark:hover:bg-neutral-200"
              >
                {cta.label}
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:border-white dark:hover:bg-neutral-900"
              >
                Falar comigo
              </a>
            </div>

            <ul className="mt-10 flex items-center gap-2">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    aria-label={social.label}
                    title={social.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-neutral-200 text-neutral-500 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white"
                  >
                    <SocialIcon icon={social.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Monograma — troque por <img> ou <Image unoptimized> se quiser uma foto sua. */}
          <div className="hidden lg:block">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-neutral-900/15 to-neutral-400/10 blur-2xl dark:from-white/10 dark:to-white/5"
              />
              <div className="relative grid h-56 w-56 place-items-center rounded-[2rem] border border-neutral-200/80 bg-white/60 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
                <span className="bg-gradient-to-br from-neutral-900 to-neutral-500 bg-clip-text text-7xl font-bold text-transparent dark:from-white dark:to-neutral-400">
                  {site.initials}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
