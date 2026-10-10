import { site } from "@/data/site";
import { Section } from "@/components/Section";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";

/** Segundos que um projeto leva para atravessar a tela. */
const SEGUNDOS_POR_PROJETO = 5;

/**
 * Letreiro contínuo de projetos.
 *
 * Como o movimento sem fim funciona: a lista é renderizada DUAS vezes lado a
 * lado e a animação desloca o trilho em -50% — exatamente a largura de uma
 * cópia. Quando a animação reinicia, o quadro é idêntico ao inicial, então o
 * salto é invisível.
 *
 * O espaçamento entre os cards é `margin-right`, e não `gap` no container,
 * justamente para que uma cópia inteira meça exatamente 50% do trilho: com
 * `gap`, sobraria meio espaço na emenda e o letreiro daria um pulo a cada volta.
 *
 * A duração é calculada a partir da quantidade de projetos para manter a
 * VELOCIDADE constante — assim, adicionar projetos não acelera o giro.
 *
 * O letreiro pausa quando o mouse está em cima ou quando um link recebe foco.
 * Sem isso seria impossível clicar num card, porque o link sairia debaixo do
 * cursor. Para nunca pausar, basta remover as duas classes de
 * `animation-play-state` abaixo.
 *
 * Quem tem "reduzir movimento" ligado no sistema TAMBÉM vê o letreiro andando:
 * é uma exceção consciente, pedida explicitamente pelo dono do site. Para
 * voltar a respeitar a preferência, troque `animate-marquee` por
 * `motion-safe:animate-marquee` abaixo e remova o `:not(.animate-marquee)` da
 * regra de `prefers-reduced-motion` em app/globals.css.
 *
 * Sem a animação o container recortaria os cards que passam da largura da tela,
 * deixando-os inalcançáveis — por isso, se você reverter a exceção, devolva
 * também o `motion-reduce:overflow-x-auto` no container.
 */
export function Projects() {
  const total = site.projects.length;
  if (total === 0) return null;

  return (
    <Section
      id="projetos"
      kicker="Projetos"
      title="Coisas que eu construí"
      description="Uma seleção do que considero mais representativo do meu trabalho."
    >
      <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-50/40 py-8 dark:border-neutral-800 dark:bg-neutral-900/30 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          style={{ animationDuration: `${total * SEGUNDOS_POR_PROJETO}s` }}
        >
          {[...site.projects, ...site.projects].map((projeto, indice) => (
            <article
              key={`${projeto.title}-${indice}`}
              /* A segunda cópia é só visual: não deve ser lida nem focável. */
              inert={indice >= total}
              className="mr-6 flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 sm:w-80 dark:border-neutral-800 dark:bg-neutral-900/60"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  {projeto.year}
                </span>
                {projeto.featured && (
                  <span className="rounded-full border border-neutral-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-900 dark:border-white dark:text-white">
                    Destaque
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                {projeto.title}
              </h3>

              <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {projeto.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {projeto.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-neutral-200 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-neutral-700/70 dark:text-neutral-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {(projeto.href || projeto.repo) && (
                <div className="mt-5 flex items-center gap-4 border-t border-neutral-200/80 pt-4 dark:border-neutral-800">
                  {projeto.href && (
                    <a
                      href={projeto.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Ver online
                    </a>
                  )}
                  {projeto.repo && (
                    <a
                      href={projeto.repo}
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
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
