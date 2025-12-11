/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.detalhemoveisaluminios.com.br',
        pathname: '/**',
      },
    ],
  },
  // Configuração para produção otimizada
  reactStrictMode: true,
};

module.exports = nextConfig;