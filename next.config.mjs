import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Redirect root / → /en (middleware handles locale, but vercel.json catch-all can block it)
  async redirects() {
    return [
      { source: '/', destination: '/en', permanent: true },
    ];
  },

  // Rewrites: map Spanish slugs → internal English routes
  async rewrites() {
    return [
      { source: '/es/tratamiento-agua-de-pozo', destination: '/es/well-water-treatment' },
      { source: '/es/eliminacion-hierro-azufre', destination: '/es/iron-sulfur-removal' },
      { source: '/es/soluciones-agua-dura', destination: '/es/hard-water-solutions' },
      { source: '/es/sistemas-osmosis-inversa', destination: '/es/reverse-osmosis-systems' },
      { source: '/es/filtracion-toda-la-casa', destination: '/es/whole-house-filtration' },
      { source: '/es/purificacion-agua-ciudad', destination: '/es/city-water-purification' },
      { source: '/es/nosotros', destination: '/es/about' },
      { source: '/es/tienda', destination: '/es/shop' },
      { source: '/es/carrito', destination: '/es/cart' },
      { source: '/es/finalizar-compra', destination: '/es/checkout' },
      { source: '/es/mi-cuenta', destination: '/es/my-account' },
      { source: '/es/politica-de-privacidad', destination: '/es/privacy-policy' },
      { source: '/es/politica-de-reembolso', destination: '/es/refund-policy' },
      { source: '/es/contacto', destination: '/es/contact' },
    ];
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
