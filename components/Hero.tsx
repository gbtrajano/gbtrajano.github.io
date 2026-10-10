import { site } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";
import { ArrowUpRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      {/* Fundo decorativo: dois brilhos + grade sutil com máscara radial. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/25" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(100_116_139/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(100_116_139/0.08)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="animate-fade-up">
            {site.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Disponível para novos projetos
              </span>
            )}

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              <span className="block text-slate-900 dark:text-white">{site.name}</span>
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                {site.role}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 text-pretty dark:text-slate-400">
              {site.headline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:shadow-white/10 dark:hover:bg-slate-200"
              >
                Ver projetos
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-900"
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
                    className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
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
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-2xl"
              />
              <div className="relative grid h-56 w-56 place-items-center rounded-[2rem] border border-slate-200/80 bg-white/60 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
                <span className="bg-gradient-to-br from-indigo-600 to-cyan-500 bg-clip-text text-7xl font-bold text-transparent">
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
