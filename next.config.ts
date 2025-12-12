/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para o componente Image, se necessário, dependendo da sua versão do Next.js
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'upload.wikimedia.org',
  //     },
  //   ],
  // },

  async headers() {
    return [
      // 1. Configuração para Cache de Arquivos Estáticos (JS, CSS, etc.)
      // Isso resolve o erro "A 'cache-control' header is missing or empty."
      {
        source: '/_next/static/(.*)',
        headers: [
          // Cache agressivo (1 ano) para arquivos que não mudam (por terem hash no nome)
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
      // 2. Configuração de Charset para Páginas HTML
      // Isso resolve o aviso "'content-type' header charset value should be 'utf-8'."
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          // Cache curto para a página HTML em si (força revalidação no servidor)
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      // 3. Configuração de Cache para Imagens Públicas
      {
        source: '/(.*)\\.(png|jpg|jpeg|gif|svg|ico)$',
        headers: [
          // Cache moderado (30 dias) para imagens que podem mudar sem ter hash no nome
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;