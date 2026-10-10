import type { NextConfig } from "next";

/**
 * GitHub Pages serve apenas arquivos estáticos.
 *
 * `output: "export"` faz o `next build` gerar a pasta `out/` com HTML/CSS/JS puros.
 *
 * IMPORTANTE: este projeto pressupõe que o repositório se chama
 * exatamente "<seu-usuario>.github.io", o que publica o site na RAIZ
 * do domínio (https://seu-usuario.github.io).
 *
 * Se você usar qualquer outro nome de repositório (ex.: "portfolio"),
 * o site vai para https://seu-usuario.github.io/portfolio e você
 * PRECISA descomentar as duas linhas de `basePath` / `assetPrefix`.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // O otimizador de imagem do Next precisa de um servidor.
  // Sem servidor, ele fica desligado.
  images: {
    unoptimized: true,
  },

  // Descomente APENAS se o repositório NÃO for "<usuario>.github.io":
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
};

export default nextConfig;
