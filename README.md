# Portfólio — Next.js + Tailwind + TypeScript + Bun no GitHub Pages

Portfólio pessoal estático, publicado gratuitamente em `https://gbtrajano.github.io`.

## Stack

| Camada | Escolha |
|---|---|
| Framework | Next.js 15 (App Router, `output: "export"`) |
| Estilo | Tailwind CSS v4 |
| Linguagem | TypeScript (strict) |
| Runtime / package manager | Bun |
| Hospedagem | GitHub Pages via GitHub Actions |
| Dependências de UI | **nenhuma** — ícones em SVG inline, zero bibliotecas de componente |

Sem `next/image` remoto, sem API routes, sem banco: é HTML/CSS/JS puro no final.

---

## 1. Rodar localmente

```bash
bun install
bun run dev          # http://localhost:3000
```

Outros comandos:

```bash
bun run build        # gera a pasta out/ (é isso que vai pro ar)
bun run typecheck    # tsc --noEmit
```

Para conferir o resultado exatamente como vai pro ar:

```bash
bun run build
bunx serve out       # ou: python -m http.server 4000 --directory out
```

> `out/` é o site final. Abrir o `index.html` direto pelo `file://` não funciona
> porque os caminhos são absolutos (`/_next/...`).

---

## 2. Publicar no GitHub Pages

### 2.1 Crie o repositório com o nome exato

O repositório **precisa** se chamar `<seu-usuario>.github.io` — por exemplo,
se seu usuário é `maria`, o repositório é `maria.github.io`.

Só assim o site fica em `https://maria.github.io` (na raiz). Se você usar outro
nome, veja a seção 3.

```bash
git init -b main
git add .
git commit -m "feat: portfolio inicial"
git remote add origin https://github.com/gbtrajano/gbtrajano.github.io.git
git push -u origin main
```

O `bun.lock` **deve** ser commitado — o workflow usa `--frozen-lockfile`.

### 2.2 Ative o Pages com source "GitHub Actions"

No repositório: **Settings → Pages → Build and deployment → Source** e escolha
**GitHub Actions** (não "Deploy from a branch").

Pronto. O workflow em `.github/workflows/deploy.yml` roda a cada push na `main`:
instala o Bun → `bun install` → `bun run build` → publica a pasta `out/`.

Acompanhe em **Actions** na aba do repositório. O primeiro deploy leva ~1 min.

---

## 3. Se o repositório NÃO se chamar `<usuario>.github.io`

O site vai para `https://gbtrajano.github.io/nome-do-repo`, e você precisa
dizer isso ao Next. Em `next.config.ts`, descomente:

```ts
basePath: "/nome-do-repo",
assetPrefix: "/nome-do-repo/",
```

Sem isso o CSS e o JS dão 404 e a página aparece sem estilo.

---

## 4. Editar o conteúdo

**Todo o conteúdo vive em um único arquivo: [`data/site.ts`](data/site.ts).**
Você não precisa tocar em nenhum componente para trocar textos, projetos ou links.

```ts
export const site: Site = {
  name: "Seu Nome",              // aparece no menu, no rodapé e no <title>
  role: "Analista de T.I",
  url: "https://gbtrajano.github.io",
  email: "seu@email.com",
  location: "Rio de Janeiro · Brasil",
  available: true,               // selo "disponível"
  headline: "…",                 // frase de impacto do topo
  description: "…",              // <meta description> e Open Graph
  bio: ["…", "…"],               // parágrafos da seção "Sobre"
  stats: [{ value: "5+", label: "anos de experiência" }],
  experience: [{ role: "…", company: "…", period: "…", current: true }],
  nav: [{ label: "Sobre", href: "#sobre" }],
  socials: [{ label: "GitHub", href: "…", icon: "github" }],
  projects: [{ title: "…", summary: "…", tags: ["…"], year: "2025", href: "…", repo: "…" }],
  skills: [{ label: "Redes", items: ["DHCP", "Switches"] }],
};
```

Depois de editar `name`, ajuste também:

- **`public/favicon.svg`** — o ícone do favicon, desenhado à mão (um chip).
- **`app/layout.tsx`** — só se você quiser mexer em SEO/Open Graph.

### Trocar o ícone por uma foto

Em `components/Hero.tsx`, substitua o bloco marcado com o comentário
`Marca do site` por:

```tsx
<img
  src="/eu.jpg"
  alt="Foto de Seu Nome"
  width={224}
  height={224}
  className="h-56 w-56 rounded-[2rem] object-cover"
/>
```

Coloque o arquivo em `public/eu.jpg`. Use `<img>` comum: com `output: "export"`
o `next/image` não otimiza nada mesmo (`images.unoptimized` já está ligado).

### Seção de carreira

A seção `#carreira` renderiza o campo `experience` como uma linha do tempo,
do mais recente para o mais antigo:

```ts
experience: [
  { role: "Analista de T.I", company: "Genial Veículos", current: true },
  { role: "Auxiliar de T.I", company: "Genial Veículos", period: "mar 2023 — jul 2025" },
  { role: "Auxiliar de T.I", company: "Aeroporto Santos Dumont", location: "Rio de Janeiro · RJ" },
],
```

| Campo | Obrigatório | Efeito |
|---|---|---|
| `role` | sim | Cargo em destaque |
| `company` | sim | Empresa, logo abaixo do cargo |
| `period` | não | Selo com o período. **Se estiver ausente, o selo não aparece** — dá para publicar sem as datas e preencher depois |
| `current` | não | Mostra o selo "Atual" e preenche a bolinha da linha do tempo |
| `location` | não | Local, exibido depois da empresa |
| `highlights` | não | Lista de bullets com o que você fazia na função |

### Bloco de números (opcional)

`stats` alimenta os cartões numéricos da seção Sobre:

```ts
stats: [
  { value: "3+", label: "anos em T.I" },
  { value: "120", label: "usuários atendidos" },
],
```

Se ficar `stats: []`, o bloco **não é renderizado** e a bio ocupa a largura toda —
o layout se adapta, nada quebra. Preencha só com números que você consiga
defender numa entrevista.

### Seção de projetos (letreiro contínuo)

`projects` é o único campo que mora **fora** do objeto `site`, numa constante
logo acima dele:

```ts
const projects: Project[] = [ /* ... */ ];
```

A seção `#projetos` renderiza esses itens num **letreiro que desliza sem parar**,
da direita para a esquerda. Não precisa clicar em nada e não existe botão de
avançar.

**Como o loop é invisível:** a lista é renderizada **duas vezes** lado a lado e a
animação desloca o trilho em `-50%` — exatamente a largura de uma cópia. No fim
da animação o quadro é idêntico ao inicial, então o reinício não aparece. É por
isso que o espaçamento entre os cards é `margin-right` e não `gap`: com `gap`
sobraria meio espaço na emenda e o letreiro daria um pulo a cada volta.

**Velocidade:** a duração é calculada a partir da quantidade de projetos
(`SEGUNDOS_POR_PROJETO` em `components/Projects.tsx`, hoje `5`), então a
velocidade é constante — adicionar projetos **não** acelera o giro.

**Pausa:** o letreiro para quando o mouse está em cima ou quando um link recebe
foco pelo teclado. Isso é necessário: sem a pausa seria impossível clicar num
card, porque o link sairia debaixo do cursor. Para nunca pausar, remova as duas
classes `[animation-play-state:paused]` do trilho.

Os cards da segunda cópia recebem `inert` — são apenas visuais, então não são
lidos por leitores de tela nem recebem foco.

**Exceção consciente:** o letreiro anda **mesmo para quem tem "reduzir movimento"
ligado** no sistema. Foi uma escolha explícita do dono do site, e ela vive em
dois lugares que precisam andar juntos:

- `animate-marquee`, **sem** o prefixo `motion-safe:`, em `components/Projects.tsx`;
- o `:not(.animate-marquee)` na regra de `prefers-reduced-motion` de
  `app/globals.css`.

O `:not()` é necessário porque `!important` ganha de estilo inline: sem ele, o
`animation-duration: 0.01ms` da regra global venceria a duração que o componente
define e o letreiro ficaria parado de qualquer jeito.

Para voltar a respeitar a preferência, reverta os dois pontos **e** devolva o
`motion-reduce:overflow-x-auto` no container — sem animação, os cards que passam
da largura da tela ficariam inalcançáveis, porque o container recorta o conteúdo.

Todo o resto do site (transições de hover, foco, o fade do topo) continua
respeitando "reduzir movimento" normalmente.

Se a lista ficar vazia:

- a seção `#projetos` **não é renderizada**;
- o link "Projetos" **não aparece no menu**;
- o botão principal do topo passa a apontar para a carreira.

Campos de cada projeto:

| Campo | Obrigatório | Efeito |
|---|---|---|
| `title` | sim | Título do card |
| `summary` | sim | Uma ou duas frases sobre o problema que resolve |
| `tags` | sim | Chips de tecnologia |
| `year` | sim | Selo com o ano |
| `href` | não | Link "Ver online" |
| `repo` | não | Link "Código" |
| `featured` | não | Selo "Destaque" no card |

### Redes de contato (com item "em breve")

Em `socials`, o campo `href` é **opcional**. Um item sem `href` continua
aparecendo no site, mas fica desabilitado: borda tracejada, cor apagada, sem
clique, sem hover e sem foco pelo teclado.

```ts
socials: [
  { label: "GitHub", href: "https://github.com/gbtrajano", icon: "github" },
  { label: "Instagram", icon: "instagram" },   // ← sem href = "em breve"
],
```

É assim que o Instagram está hoje, esperando o perfil profissional. **Para
ativar, basta adicionar o `href`** — o item vira um link clicável sozinho, sem
tocar em nenhum componente. As opções de `icon` são `github`, `linkedin`,
`instagram` e `mail`.

---

## 5. Domínio próprio (opcional)

1. Compre o domínio (Registro.br, Cloudflare, Namecheap…).
2. Crie `public/CNAME` com **uma linha**, o domínio sem `https://`:

   ```
   seunome.com
   ```

3. No DNS, aponte para o GitHub Pages:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `gbtrajano.github.io` |

4. Em **Settings → Pages**, preencha "Custom domain" e marque **Enforce HTTPS**.

O `public/CNAME` vai para `out/CNAME` no build, então o domínio não se perde
a cada deploy.

---

## 6. Estrutura

```
.
├── app/
│   ├── globals.css        # Tailwind v4 + variante dark por classe + keyframes
│   ├── layout.tsx         # <html>, SEO/Open Graph, script anti-flash de tema
│   └── page.tsx           # composição das seções
├── components/
│   ├── Nav.tsx            # menu fixo + menu mobile (client)
│   ├── Hero.tsx           # topo: nome, cargo, CTAs, redes
│   ├── About.tsx          # bio + números
│   ├── Experience.tsx     # linha do tempo de carreira
│   ├── Projects.tsx       # cards de projeto (só renderiza se houver projetos)
│   ├── Skills.tsx         # grupos de tecnologias
│   ├── Contact.tsx        # CTA final
│   ├── Footer.tsx
│   ├── Section.tsx        # wrapper de seção reutilizável
│   ├── ThemeToggle.tsx    # alterna claro/escuro (client)
│   ├── SocialIcon.tsx     # mapeia nome -> ícone
│   └── icons.tsx          # todos os SVGs inline
├── data/site.ts           # ← TODO o conteúdo
├── public/
│   ├── favicon.svg
│   └── .nojekyll          # impede o Jekyll de ignorar pastas com "_"
├── next.config.ts         # output: "export"
└── .github/workflows/deploy.yml
```

### Tema claro/escuro

O tema é aplicado por uma classe `.dark` no `<html>`. Um script inline no
`<head>` (`app/layout.tsx`) lê o `localStorage` **antes** do primeiro paint,
então não há flash branco. A preferência do sistema é o padrão inicial.

A variante do Tailwind v4 que habilita isso está em `globals.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

### Paleta de cores (monocromática)

O visual é **preto e branco**: não há nenhuma cor com matiz — nem indigo, nem
azul, nem verde. Tudo usa a escala `neutral` do Tailwind.

| Papel | Tema claro | Tema escuro |
|---|---|---|
| Fundo da página | `bg-white` | `bg-neutral-950` (`#0a0a0a`) |
| Superfícies / cards | `bg-neutral-50` | `bg-neutral-900` |
| Bordas | `border-neutral-200` | `border-neutral-800` |
| Texto principal | `text-neutral-900` | `text-white` |
| Texto secundário | `text-neutral-600` | `text-neutral-400` |
| Destaque / hover | `bg-neutral-900` | `bg-white` |

O destaque é sempre o **inverso** do fundo: preto sobre branco no tema claro,
branco sobre preto no escuro. Os gradientes que existiam (indigo → cyan) viraram
gradientes de cinza (`from-neutral-900 to-neutral-500`, invertidos no escuro).

O favicon (`public/favicon.svg`) também é monocromático: quadrado `#0a0a0a`
com o chip em branco.

O ícone da marca é o `ChipIcon`, em `components/icons.tsx` — um chip/processador
em SVG inline que herda a cor do texto. Ele aparece no logo do menu, no card
grande do topo e no favicon. Para trocar por outro desenho, basta substituir o
`<svg>` dentro do `ChipIcon`.

**Para mudar o tom do cinza:** troque `neutral` por `zinc`, `stone` ou `gray`
nos arquivos de `components/` — são ~60 ocorrências, um find & replace resolve.

**Para reintroduzir uma cor de acento:** troque as ocorrências de
`hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-white
dark:hover:text-white` pela cor desejada, e ajuste `::selection` e
`:focus-visible` em `app/globals.css`.

---

## 7. Limitações do `output: "export"` (importante)

Como o GitHub Pages só serve arquivos estáticos, **não funciona**:

- API Routes / Route Handlers com lógica de servidor
- Server Actions
- ISR / revalidação
- `middleware.ts`
- `next/image` com otimização (já contornado com `unoptimized: true`)

Rotas dinâmicas (`app/[slug]/page.tsx`) só funcionam com `generateStaticParams()`.

**Formulário de contato:** não há back-end. Use um serviço externo (Formspree,
Web3Forms, Resend) ou deixe só o `mailto:` — que é o que está implementado.

---

## 8. Problemas comuns

| Sintoma | Causa e solução |
|---|---|
| Página sem estilo, CSS 404 | Repositório não é `<usuario>.github.io` e falta `basePath` (seção 3) |
| 404 ao recarregar uma rota | Já mitigado por `trailingSlash: true`; confirme que `out/.nojekyll` foi publicado |
| `EPERM: uv_spawn` no build | Sandbox restritivo que bloqueia named pipes. Rode o build em um terminal normal, fora do sandbox — não é problema do projeto |
| Workflow falha em `bun install --frozen-lockfile` | `bun.lock` não foi commitado |
| Actions falha com "Get Pages site failed" | Pages não está com Source = **GitHub Actions** (seção 2.2) |

---

## 9. Próximos passos sugeridos

- **Blog**: `app/blog/page.tsx` + MDX, ou consuma arquivos de `content/` em build time
- **OG image**: `app/opengraph-image.tsx` (o Next gera a imagem no build, sem servidor)
- **Analytics**: Umami ou Plausible (um `<script>` no `layout.tsx`)
- **Lint**: adicionar `eslint` + `eslint-config-next`
- **Testes**: Vitest para utilitários, Playwright para smoke test da home
