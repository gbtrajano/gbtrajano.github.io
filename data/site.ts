/**
 * ⚠️  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
 *
 * Todo o conteúdo do portfólio (nome, textos, projetos, skills, links)
 * vive aqui. Os componentes apenas renderizam estes dados.
 */

export type SocialIcon = "github" | "linkedin" | "mail" | "whatsapp";

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

export type Site = {
  /** Seu nome completo ou como você quer ser chamado. */
  name: string;
  /** Suas iniciais — aparecem no avatar e no favicon. */
  initials: string;
  /** Cargo/título principal. */
  role: string;
  /** URL final do site. Troque "SEU-USUARIO" pelo seu usuário do GitHub. */
  url: string;
  email: string;
  location: string;
  /** Se true, mostra o selo verde "disponível". */
  available: boolean;
  /** Frase de impacto do topo. */
  headline: string;
  /** Descrição usada no <meta description> e no Open Graph. */
  description: string;
  bio: string[];
  stats: { value: string; label: string }[];
  nav: { label: string; href: string }[];
  socials: Social[];
  projects: Project[];
  skills: SkillGroup[];
};

export const site: Site = {
  name: "Gabriel Trajano",
  initials: "GT",
  role: "Desenvolvedor Full Stack",
  url: "https://gbtrajano.github.io",
  email: "conversarcomgabriel@gmail.com",
  location: "São Paulo · Brasil", // TODO: ajuste para a sua cidade
  available: true,

  headline: "Eu construo interfaces rápidas e produtos que escalam.", // TODO: seu texto
  description:
    "Portfólio de Gabriel Trajano — desenvolvedor full stack especializado em TypeScript, React, Next.js e Node.js.",

  bio: [
    "Sou desenvolvedor full stack com foco em aplicações web de ponta a ponta: da modelagem de dados à interface final. Gosto de trabalhar perto do produto, entendendo o problema antes de escolher a stack.",
    "Meu dia a dia é TypeScript, React e Next.js no front, Node.js e PostgreSQL no back. Tenho interesse especial em performance, acessibilidade e design systems — coisas que o usuário não vê, mas sente.",
    "Fora do trabalho, contribuo com projetos open source e escrevo sobre o que aprendo construindo.",
  ],

  stats: [
    { value: "5+", label: "anos de experiência" },
    { value: "30+", label: "projetos entregues" },
    { value: "12", label: "tecnologias no stack" },
    { value: "100%", label: "remoto ou híbrido" },
  ],

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Skills", href: "#skills" },
    { label: "Contato", href: "#contato" },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/gbtrajano", icon: "github" },
    // TODO: troque pelo seu perfil real (ou apague esta linha se não usar LinkedIn).
    { label: "LinkedIn", href: "https://linkedin.com/in/SEU-USUARIO", icon: "linkedin" },
    { label: "E-mail", href: "mailto:conversarcomgabriel@gmail.com", icon: "mail" },
    // TODO: troque pelo seu número com DDI + DDD, só dígitos (ex.: 5511987654321).
    { label: "WhatsApp", href: "https://wa.me/5511999999999", icon: "whatsapp" },
  ],

  projects: [
    {
      title: "Nome do Projeto Um",
      summary:
        "Descrição curta e direta do que o projeto faz e qual problema ele resolve. Foque no resultado, não na lista de tecnologias.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      year: "2025",
      href: "https://exemplo.com",
      repo: "https://github.com/gbtrajano/projeto-um",
      featured: true,
    },
    {
      title: "Nome do Projeto Dois",
      summary:
        "Outro projeto de destaque. Uma ou duas frases explicando o impacto: quantos usuários, quanto tempo economizou, qual métrica melhorou.",
      tags: ["React", "Node.js", "Redis"],
      year: "2024",
      repo: "https://github.com/gbtrajano/projeto-dois",
    },
    {
      title: "Nome do Projeto Três",
      summary:
        "Projeto pessoal, open source ou freelance. Vale incluir mesmo que seja pequeno, se mostrar bem uma habilidade.",
      tags: ["Bun", "Hono", "SQLite"],
      year: "2024",
      href: "https://exemplo.com",
    },
    {
      title: "Nome do Projeto Quatro",
      summary:
        "Descreva o desafio técnico mais interessante e como você resolveu. Isso diferencia um portfólio de uma lista de links.",
      tags: ["TypeScript", "Tailwind", "Vitest"],
      year: "2023",
      repo: "https://github.com/gbtrajano/projeto-quatro",
    },
  ],

  skills: [
    {
      label: "Front-end",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML semântico", "Acessibilidade"],
    },
    {
      label: "Back-end",
      items: ["Node.js", "Bun", "REST", "GraphQL", "PostgreSQL", "Prisma"],
    },
    {
      label: "Infra & DevOps",
      items: ["Git", "GitHub Actions", "Docker", "Vercel", "Linux", "Cloudflare"],
    },
    {
      label: "Práticas",
      items: ["Testes (Vitest, Playwright)", "Design System", "Code Review", "Performance Web", "Scrum"],
    },
  ],
};
