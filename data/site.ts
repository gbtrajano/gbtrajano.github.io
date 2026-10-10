/**
 * ⚠️  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
 *
 * Todo o conteúdo do portfólio (nome, textos, carreira, projetos, skills, links)
 * vive aqui. Os componentes apenas renderizam estes dados.
 */

export type SocialIcon = "github" | "linkedin" | "mail";

export type Social = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  year: string;
  /** Link do site/app em produção (opcional). */
  href?: string;
  /** Link do repositório (opcional). */
  repo?: string;
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
  /** Suas iniciais — aparecem no avatar e no favicon. */
  initials: string;
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
 * Enquanto esta lista estiver vazia, a seção "Projetos" e o link dela no
 * menu NÃO aparecem. É de propósito: melhor não mostrar nada do que mostrar
 * placeholder.
 *
 * Para ativar: preencha a lista. A seção e o link do menu voltam sozinhos,
 * não precisa mexer em mais nada.
 *
 * Vale trabalho de T.I, não só software. Exemplos do que serve:
 *   - Padronização / criação de imagem do parque de máquinas
 *   - Estruturação ou migração de rede
 *   - Implantação de sistema, ERP ou ferramenta de chamados
 *   - Rotina de backup e recuperação
 *   - Automação de tarefa repetitiva (script, planilha, PowerShell)
 *
 * Modelo:
 *   {
 *     title: "Padronização do parque de máquinas",
 *     summary: "O que você fez e qual problema resolveu. Foque no resultado.",
 *     tags: ["Windows", "Implantação", "Documentação"],
 *     year: "2025",
 *   },
 * ------------------------------------------------------------------ */
const projects: Project[] = [];

export const site: Site = {
  name: "Gabriel Trajano",
  initials: "GT",
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
    // TODO: troque pelo seu perfil real (ou apague esta linha se não usar LinkedIn).
    { label: "LinkedIn", href: "https://linkedin.com/in/SEU-USUARIO", icon: "linkedin" },
    { label: "E-mail", href: "mailto:conversarcomgabriel@gmail.com", icon: "mail" },
  ],

  projects,

  /** Skills informadas pelo Gabriel. */
  skills: [
    {
      label: "Sistemas",
      items: ["Dealernet", "SiTef", "GLPI", "WordPress", "Instalação de sistemas"],
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
