import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',

  // Always use locale prefix: /en/... and /es/...
  localePrefix: 'always',

  pathnames: {
    // Home
    '/': '/',

    // Service pages - localized slugs for ES
    '/well-water-treatment': {
      en: '/well-water-treatment',
      es: '/tratamiento-agua-de-pozo',
    },
    '/iron-sulfur-removal': {
      en: '/iron-sulfur-removal',
      es: '/eliminacion-hierro-azufre',
    },
    '/hard-water-solutions': {
      en: '/hard-water-solutions',
      es: '/soluciones-agua-dura',
    },
    '/reverse-osmosis-systems': {
      en: '/reverse-osmosis-systems',
      es: '/sistemas-osmosis-inversa',
    },
    '/whole-house-filtration': {
      en: '/whole-house-filtration',
      es: '/filtracion-toda-la-casa',
    },
    '/city-water-purification': {
      en: '/city-water-purification',
      es: '/purificacion-agua-ciudad',
    },

    // Location pages - same URL for both languages (city names don't change)
    '/miami': '/miami',
    '/boca-raton': '/boca-raton',
    '/fort-lauderdale': '/fort-lauderdale',
    '/palm-beach': '/palm-beach',

    // Company pages
    '/about': {
      en: '/about',
      es: '/nosotros',
    },
    '/shop': {
      en: '/shop',
      es: '/tienda',
    },
    '/blog': '/blog',
    '/cart': {
      en: '/cart',
      es: '/carrito',
    },
    '/checkout': {
      en: '/checkout',
      es: '/finalizar-compra',
    },
    '/my-account': {
      en: '/my-account',
      es: '/mi-cuenta',
    },
    '/refund-policy': {
      en: '/refund-policy',
      es: '/politica-de-reembolso',
    },
    '/privacy-policy': {
      en: '/privacy-policy',
      es: '/politica-de-privacidad',
    },
    '/contact': {
      en: '/contact',
      es: '/contacto',
    },
  },
});

export type AppPathnames = keyof typeof routing.pathnames;
