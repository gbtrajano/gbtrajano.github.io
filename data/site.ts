/**
 * ⚠️  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
 *
 * Todo o conteúdo do portfólio (nome, textos, carreira, projetos, skills, links)
 * vive aqui. Os componentes apenas renderizam estes dados.
 */

export type SocialIcon = "github" | "linkedin" | "instagram" | "mail";

export type Social = {
  label: string;
  /**
   * OPCIONAL, de propósito.
   *
   * Sem `href`, o item é exibido mas fica desabilitado: sem link, sem hover e
   * sem foco pelo teclado. É o caso do Instagram, que ainda será criado.
   * Assim que você preencher o href, ele vira um link sozinho — não precisa
   * mexer em nenhum componente.
   */
  href?: string;
  icon: SocialIcon;
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  year: string;
  /**
   * Link do projeto publicado (opcional).
   *
   * Projetos sem uma página pública podem deixar este campo de fora.
   */
  href?: string;
  /** Marque como true para dar destaque visual no card. */
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Experience = {
  /** Cargo, ex.: "Analista de T.I". */
  role: string;
  /** Empresa, ex.: "Genial Veículos". */
  company: string;
  /**
   * Período exibido, ex.: "jan 2023 — ago 2024".
   *
   * Deixe de fora enquanto não tiver confirmado as datas: o selo de período
   * simplesmente não é renderizado. Nada de placeholder feio no site.
   */
  period?: string;
  /** Local, ex.: "Rio de Janeiro · RJ". Opcional. */
  location?: string;
  /** Marque true no trabalho atual: exibe o selo "Atual". */
  current?: boolean;
  /** Bullets curtos sobre o que você fazia. Opcional. */
  highlights?: string[];
};

export type Site = {
  /** Seu nome completo ou como você quer ser chamado. */
  name: string;
  /** Cargo/título principal. */
  role: string;
  /** URL final do site. */
  url: string;
  email: string;
  location: string;
  /** Se true, mostra o selo "disponível". */
  available: boolean;
  /** Frase de impacto do topo. */
  headline: string;
  /** Descrição usada no <meta description> e no Open Graph. */
  description: string;
  bio: string[];
  /** Números do bloco "Sobre". Se ficar vazio, o bloco não é renderizado. */
  stats: { value: string; label: string }[];
  experience: Experience[];
  nav: { label: string; href: string }[];
  socials: Social[];
  projects: Project[];
  skills: SkillGroup[];
};

/* ------------------------------------------------------------------ *
 * SEUS PROJETOS
 *
 * Esta lista alimenta o letreiro da seção "Projetos". Se ficar vazia, a seção
 * e o link dela no menu NÃO aparecem — melhor não mostrar nada do que mostrar
 * placeholder.
 *
 * Esta é uma seleção manual dos projetos que devem aparecer no portfólio.
 * Ajuste os textos, links e a ordem diretamente nesta lista.
 *
 * O botão "Ver online" aparece apenas quando existe `href`. Projetos sem uma
 * página publicada, como o OrçaFácil neste momento, ficam sem botão.
 *
 * Campos:
 *   title     nome do projeto                              (obrigatório)
 *   summary   1 ou 2 frases sobre o problema que resolve   (obrigatório)
 *   tags      tecnologias, viram chips                     (obrigatório)
 *   year      ano mostrado no selo                         (obrigatório)
 *   href      link do projeto publicado                    (opcional)
 *   featured  true mostra o selo "Destaque" no card         (opcional)
 * ------------------------------------------------------------------ */
const projects: Project[] = [
  {
    title: "SimplificaPDV",
    summary:
      "Ponto de venda desktop e instalável — não é sistema web. O banco SQLite fica no computador do próprio cliente, sem servidor, e o aplicativo se atualiza sozinho por atualização remota assinada.",
    tags: ["Tauri", "Rust", "React", "TypeScript", "SQLite"],
    year: "2026",
    href: "https://simplificapdv.netlify.app/",
    featured: true,
  },
  {
    title: "SimplificaOficina",
    summary:
      "Sistema de gestão para oficinas mecânicas que reúne clientes, veículos, ordens de serviço, estoque e financeiro em um só lugar.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    year: "2026",
    href: "https://simplificaoficina.netlify.app/",
  },
  {
    title: "Ateliê — E-commerce de moda",
    summary:
      "E-commerce de moda feminina em Next.js: carrinho persistente com Zustand, cálculo de frete por API Route e a estrutura pronta para webhooks de pagamento e logística reversa.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    year: "2026",
    href: "https://armariodalilly.vercel.app",
  },
  {
    title: "OrçaFácil",
    summary:
      "Emissor de orçamentos, pedidos e recibos para autônomos. Os dados ficam no computador do usuário (sem estoque, sem nuvem), o PDF sai com o logotipo do profissional e o histórico de clientes guarda todos os documentos.",
    tags: ["Tauri", "TypeScript", "SQLite"],
    year: "2026",
  },
  {
    title: "ÓticaOS — Gestão para óticas",
    summary:
      "Sistema de gestão para óticas: o orçamento vira ordem de serviço em um clique, as OS são acompanhadas por status (Solicitado → Laboratório → Pronto → Concluído) e o estoque avisa quando bate o mínimo.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    year: "2026",
    href: "https://frevo-os.vercel.app",
  },
  {
    title: "Calculadora de Combustível",
    summary:
      "Calculadora que estima o custo de uma viagem a partir da distância, do consumo médio do veículo e do preço do litro, com opção de ida e volta. Feita em HTML, CSS e JavaScript puros.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    href: "https://calculoconsumo.netlify.app/",
  },
  {
    title: "Supply Sistemas",
    summary:
      "Site institucional de uma empresa de software sob medida, apresentando serviços, projetos, equipe e canais de contato em uma experiência responsiva.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    year: "2026",
    href: "https://supplysistemas.netlify.app/",
  },
];

export const site: Site = {
  name: "Gabriel Trajano",
  role: "Analista de T.I",
  url: "https://gbtrajano.github.io",
  email: "conversarcomgabriel@gmail.com",
  location: "Rio de Janeiro · Brasil",
  available: true,

  // TODO: escreva com as suas palavras. Esta é só uma sugestão de tom.
  headline: "Mantenho a infraestrutura de pé e as pessoas trabalhando.",
  description:
    "Portfólio de Gabriel Trajano — Analista de T.I no Rio de Janeiro, com experiência em suporte a usuários e infraestrutura.",

  bio: [
    "Sou Analista de T.I e aprendi o ofício na prática: comecei como auxiliar, atendendo usuário e resolvendo problema no chão, e hoje respondo pela operação de T.I na Genial Veículos.",
    "Meu dia a dia passa por suporte a usuários, manutenção de equipamentos, redes e sistemas. Gosto da parte que ninguém vê: documentar o que foi feito, buscar a causa raiz em vez de só apagar o incêndio, e deixar a operação um pouco mais estável a cada semana.",
    "Trabalho bem com pessoas — boa parte de resolver T.I é traduzir o problema de quem não é técnico e dar um retorno claro sobre quando aquilo vai ser resolvido.",
  ],

  /**
   * Deixei este bloco VAZIO de propósito.
   *
   * Números como "5+ anos" ou "30+ projetos" são afirmações sobre a sua carreira,
   * e eu não tenho como saber os seus. Inventar aqui é pior do que não mostrar nada.
   *
   * Enquanto estiver vazio, o bloco não aparece e a bio ocupa a largura toda.
   * Preencha só com o que você conseguir defender numa entrevista. Ex.:
   *
   *   { value: "3+", label: "anos em T.I" },
   *   { value: "120", label: "usuários atendidos" },
   *   { value: "2", label: "empresas" },
   */
  stats: [],

  /**
   * Trajetória profissional — do mais recente para o mais antigo.
   *
   * As datas vieram de memória ("mais ou menos"), então vale conferir quando
   * você tiver os registros em mãos. O selo de período só aparece quando
   * `period` está preenchido.
   *
   * TODO (opcional): adicione `highlights` com 2 ou 3 bullets do que você fazia.
   */
  experience: [
    {
      role: "Analista de T.I",
      company: "Genial Veículos",
      period: "desde out 2026",
      current: true,
      // highlights: [
      //   "O que você faz no dia a dia.",
      //   "Algum projeto, melhoria ou resultado concreto.",
      // ],
    },
    {
      role: "Auxiliar de T.I",
      company: "Genial Veículos",
      period: "mar 2026 — out 2026",
    },
    {
      role: "Auxiliar de T.I",
      company: "Aeroporto Santos Dumont",
      location: "Rio de Janeiro · RJ",
      period: "jan 2025 — nov 2025",
    },
  ],

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Carreira", href: "#carreira" },
    // Entra sozinho quando houver projetos na lista lá em cima.
    ...(projects.length > 0 ? [{ label: "Projetos", href: "#projetos" }] : []),
    { label: "Skills", href: "#skills" },
    { label: "Contato", href: "#contato" },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/gbtrajano", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gbtrajano/", icon: "linkedin" },
    // TODO: quando criar o Instagram profissional, adicione o href assim:
    //   { label: "Instagram", href: "https://instagram.com/seu-usuario", icon: "instagram" },
    // Enquanto não houver href, ele aparece como "em breve" e não é clicável.
    { label: "Instagram", icon: "instagram" },
    { label: "E-mail", href: "mailto:conversarcomgabriel@gmail.com", icon: "mail" },
  ],

  projects,

  /** Skills informadas pelo Gabriel. */
  skills: [
    {
      label: "Sistemas",
      items: ["Dealernet", "SiTef", "Holmes", "GLPI", "WordPress", "Instalação de sistemas"],
    },
    {
      label: "Redes",
      items: ["TCP/IP", "DHCP", "Switches", "Cabeamento estruturado", "Endereçamento IP"],
    },
    {
      label: "Infraestrutura",
      items: ["Active Directory", "Manutenção de computadores", "Linux"],
    },
    {
      label: "Suporte remoto",
      items: ["AnyDesk", "UltraVNC"],
    },
    {
      label: "Desenvolvimento e automação",
      items: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Tauri",
        "Bun",
        "npm",
        "Automações em Python",
        "Desenvolvimento de sistemas",
      ],
    },
  ],
};
