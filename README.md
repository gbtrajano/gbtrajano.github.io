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
  initials: "SN",                // monograma do topo + favicon
  role: "Desenvolvedor Full Stack",
  url: "https://gbtrajano.github.io",
  email: "seu@email.com",
  location: "Rio de Janeiro · Brasil",
  available: true,               // selo verde "disponível"
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

Depois de editar `name` ou `initials`, ajuste também:

- **`public/favicon.svg`** — o monograma desenhado à mão (texto `SN`).
- **`app/layout.tsx`** — só se você quiser mexer em SEO/Open Graph.

### Trocar o monograma por uma foto

Em `components/Hero.tsx`, substitua o bloco marcado com o comentário
`Monograma` por:

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

### Seção de projetos (opcional)

`projects` é o único campo que mora **fora** do objeto `site`, numa constante
logo acima dele:

```ts
const projects: Project[] = [];   // ← preencha aqui
```

Enquanto a lista estiver vazia:

- a seção `#projetos` **não é renderizada**;
- o link "Projetos" **não aparece no menu**.

Preencha a lista e as duas coisas voltam sozinhas — não precisa mexer em mais nada.

Vale trabalho de T.I, não só software: padronização do parque de máquinas,
estruturação de rede, implantação de ERP, rotina de backup, automação de tarefa
repetitiva (script, PowerShell, planilha).

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
com as iniciais em branco.

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
