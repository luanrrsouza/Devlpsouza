/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24,
    // Qualities config (preparando para Next 16 warning)
    // Mantemos o default 75 via componentes; aqui habilitamos lista explícita
    // para suprimir warnings futuros.
    // Nota: qualities é experimental em algumas versões; mantemos básico.
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

module.exports = nextConfig;
