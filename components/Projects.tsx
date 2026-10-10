"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { Section } from "@/components/Section";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "@/components/icons";

/** Quanto tempo cada projeto fica na tela, em ms. */
const INTERVALO = 6000;

/** Distância mínima do arrasto no celular para trocar de slide, em px. */
const ARRASTO_MINIMO = 50;

export function Projects() {
  const total = site.projects.length;
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const inicioDoToque = useRef<number | null>(null);

  const ir = useCallback(
    (passo: number) => setAtual((indice) => (indice + passo + total) % total),
    [total],
  );

  /*
   * Avanço automático.
   *
   * Não roda quando: o carrossel está pausado (mouse em cima ou foco dentro),
   * existe um único projeto, ou a pessoa pediu menos animação no sistema
   * operacional — nesse caso as setas continuam funcionando normalmente.
   */
  useEffect(() => {
    if (pausado || total <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => setAtual((indice) => (indice + 1) % total), INTERVALO);
    return () => window.clearInterval(id);
  }, [pausado, total]);

  if (total === 0) return null;

  return (
    <Section
      id="projetos"
      kicker="Projetos"
      title="Coisas que eu construí"
      description="Uma seleção do que considero mais representativo do meu trabalho."
    >
      <div
        role="region"
        aria-roledescription="carrossel"
        aria-label="Projetos"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocusCapture={() => setPausado(true)}
        onBlurCapture={() => setPausado(false)}
        onTouchStart={(evento) => {
          inicioDoToque.current = evento.touches[0].clientX;
        }}
        onTouchEnd={(evento) => {
          if (inicioDoToque.current === null) return;
          const deslocamento = evento.changedTouches[0].clientX - inicioDoToque.current;
          if (Math.abs(deslocamento) > ARRASTO_MINIMO) ir(deslocamento < 0 ? 1 : -1);
          inicioDoToque.current = null;
        }}
      >
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/40">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${atual * 100}%)` }}
            /* Anunciar cada troca só faz sentido quando o avanço é manual. */
            aria-live={pausado ? "polite" : "off"}
          >
            {site.projects.map((projeto, indice) => (
              <article
                key={projeto.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${indice + 1} de ${total}: ${projeto.title}`}
                /* Fora da tela, o slide não deve ser lido nem receber foco. */
                inert={indice !== atual}
                className="w-full shrink-0 p-8 sm:p-12"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    {projeto.year}
                  </span>
                  {projeto.featured && (
                    <span className="rounded-full border border-neutral-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-900 dark:border-white dark:text-white">
                      Destaque
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                  {projeto.title}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 text-pretty dark:text-neutral-400">
                  {projeto.summary}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {projeto.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-neutral-200 px-2 py-0.5 font-mono text-[11px] text-neutral-500 dark:border-neutral-700/70 dark:text-neutral-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {(projeto.href || projeto.repo) && (
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {projeto.href && (
                      <a
                        href={projeto.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:border-white dark:hover:bg-neutral-900"
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

        {/* Controles: bolinhas à esquerda, setas e contador à direita. */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {site.projects.map((projeto, indice) => (
              <button
                key={projeto.title}
                type="button"
                onClick={() => setAtual(indice)}
                aria-label={`Ir para o projeto ${indice + 1}: ${projeto.title}`}
                aria-current={indice === atual}
                className={
                  "h-2.5 rounded-full transition-all duration-500 " +
                  (indice === atual
                    ? "w-8 bg-neutral-900 dark:bg-white"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600")
                }
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => ir(-1)}
              aria-label="Projeto anterior"
              className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 text-neutral-600 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <span className="min-w-14 text-center font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {atual + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => ir(1)}
              aria-label="Próximo projeto"
              className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 text-neutral-600 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
