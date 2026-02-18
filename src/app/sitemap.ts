import { MetadataRoute } from 'next';

const baseUrl = 'https://aquaionic.us';

// Routes with localized ES slugs
const localizedRoutes = [
  { en: '/well-water-treatment', es: '/tratamiento-agua-de-pozo', priority: 0.9 },
  { en: '/iron-sulfur-removal', es: '/eliminacion-hierro-azufre', priority: 0.8 },
  { en: '/hard-water-solutions', es: '/soluciones-agua-dura', priority: 0.8 },
  { en: '/reverse-osmosis-systems', es: '/sistemas-osmosis-inversa', priority: 0.9 },
  { en: '/whole-house-filtration', es: '/filtracion-toda-la-casa', priority: 0.9 },
  { en: '/city-water-purification', es: '/purificacion-agua-ciudad', priority: 0.8 },
  { en: '/about', es: '/nosotros', priority: 0.6 },
  { en: '/shop', es: '/tienda', priority: 0.7 },
  { en: '/blog', es: '/blog', priority: 0.7 },
  { en: '/privacy-policy', es: '/politica-de-privacidad', priority: 0.3 },
  { en: '/refund-policy', es: '/politica-de-reembolso', priority: 0.3 },
];

// Location pages — same slug for both locales
const locationRoutes = [
  '/miami',
  '/boca-raton',
  '/fort-lauderdale',
  '/palm-beach',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Home page
  entries.push({
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/`,
        es: `${baseUrl}/es/`,
      },
    },
  });

  // Localized service & company pages
  for (const route of localizedRoutes) {
    entries.push({
      url: `${baseUrl}${route.en}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${route.en}/`,
          es: `${baseUrl}/es${route.es}/`,
        },
      },
    });
  }

  // Location pages (same URL for both languages)
  for (const route of locationRoutes) {
    entries.push({
      url: `${baseUrl}${route}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}/`,
          es: `${baseUrl}/es${route}/`,
        },
      },
    });
  }

  return entries;
}
