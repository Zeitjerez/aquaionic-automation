/**
 * SITE CONFIGURATION — Single source of truth for all business-specific data.
 *
 * When using this project as a template for a new site:
 * 1. Replace every value in this file with the new business data.
 * 2. Update tailwind.config.ts colors to match the new brand palette.
 * 3. Replace message files (src/messages/en.json + es.json) with new copy.
 * 4. Update src/lib/content/pages.ts with new SEO metadata.
 *    - All EN canonicals must use /en/ prefix: https://domain.com/en/slug/
 *    - All ES canonicals must use /es/ prefix: https://domain.com/es/slug/
 *    - ES home key is 'home', canonical 'https://domain.com/es/'
 *    - Location keys are plain slugs (miami, boca-raton), NOT miami-es
 * 5. Update src/lib/i18n/routing.ts with new service slugs.
 *    - Include /contact → { en: /contact, es: /contacto } if using contact page.
 * 6. Replace images in /public/images/.
 * 7. Update public/llms.txt with new business services, areas, and contact info.
 * 8. Verify src/app/robots.ts sitemap URL matches new domain.
 * 9. Update the @graph JSON-LD in src/app/[locale]/layout.tsx:
 *    LocalBusiness (name, url, telephone, areaServed) + WebSite + FAQPage.
 */

// ─── BUSINESS IDENTITY ───────────────────────────────────────────────────────

export const SITE_NAME = 'Aquaionic';
export const SITE_TAGLINE = 'Pure Water, Pure Life';
export const SITE_DESCRIPTION =
  'Professional water purification systems for South Florida homes. NSF/FDA certified.';

/** Production domain — no trailing slash */
export const SITE_URL = 'https://aquaionic.us';

/** Schema.org @type for LocalBusiness — change per niche:
 *  Plumber | HVACBusiness | Dentist | AutoRepair | LegalService | Restaurant | etc.
 *  Full list: https://schema.org/LocalBusiness */
export const SCHEMA_BUSINESS_TYPE = 'LocalBusiness';

// ─── CONTACT ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  phone: '(305) 467-1525',
  phoneHref: 'tel:+13054671525',
  email: 'info@aquaionic.us',
  whatsapp: '+13054671525',
  whatsappHref: 'https://wa.me/13054671525',
  address: {
    street: 'South Florida',
    city: 'Miami',
    state: 'FL',
    zip: '33101',
    country: 'US',
  },
  hours: {
    weekdays: 'Mon–Fri: 8am–6pm',
    saturday: 'Sat: 9am–4pm',
    sunday: 'Sun: Closed',
  },
} as const;

// ─── BRAND COLORS (reference for tailwind.config.ts) ─────────────────────────
// Primary: deep-blue #0a2540 | ocean #1a5276 | cyan #00bcd4
// Accent:  accent-green #00c9a7
// Background: ghost #f7f9fc
// Change these in tailwind.config.ts → theme.extend.colors

export const BRAND = {
  /** Used in Header logo, OG images, Schema name */
  logoText: 'AQUAIONIC',
  /** Primary CTA color token from tailwind */
  ctaColorClass: 'bg-cyan hover:bg-cyan-soft',
  /** Gradient used in hero / CTA sections */
  heroGradient: 'from-deep-blue via-ocean to-ocean-mid',
} as const;

// ─── SERVICES ─────────────────────────────────────────────────────────────────
// Add / remove entries to match the new business offerings.

export const SERVICES = [
  {
    key: 'well-water-treatment',
    slugEn: 'well-water-treatment',
    slugEs: 'tratamiento-agua-de-pozo',
    icon: 'Droplets',
    nameEn: 'Well Water Treatment',
    nameEs: 'Tratamiento de Agua de Pozo',
    descEn: 'Complete well water treatment for Florida homes.',
    descEs: 'Tratamiento completo de agua de pozo para hogares en Florida.',
  },
  {
    key: 'iron-sulfur-removal',
    slugEn: 'iron-sulfur-removal',
    slugEs: 'eliminacion-hierro-azufre',
    icon: 'FlaskConical',
    nameEn: 'Iron & Sulfur Removal',
    nameEs: 'Eliminación de Hierro y Azufre',
    descEn: 'Remove iron, sulfur, and rust stains from well water.',
    descEs: 'Elimina hierro, azufre y manchas de óxido del agua de pozo.',
  },
  {
    key: 'hard-water-solutions',
    slugEn: 'hard-water-solutions',
    slugEs: 'soluciones-agua-dura',
    icon: 'Layers',
    nameEn: 'Hard Water Solutions',
    nameEs: 'Soluciones para Agua Dura',
    descEn: 'Professional water softeners for Florida homes.',
    descEs: 'Ablandadores profesionales para hogares en Florida.',
  },
  {
    key: 'reverse-osmosis-systems',
    slugEn: 'reverse-osmosis-systems',
    slugEs: 'sistemas-osmosis-inversa',
    icon: 'Filter',
    nameEn: 'Reverse Osmosis Systems',
    nameEs: 'Sistemas de Ósmosis Inversa',
    descEn: 'Advanced RO drinking water systems — 99% contaminant removal.',
    descEs: 'Sistemas avanzados de OI — 99% de eliminación de contaminantes.',
  },
  {
    key: 'whole-house-filtration',
    slugEn: 'whole-house-filtration',
    slugEs: 'filtracion-toda-la-casa',
    icon: 'Home',
    nameEn: 'Whole House Filtration',
    nameEs: 'Filtración para Toda la Casa',
    descEn: 'Clean water from every tap in your home.',
    descEs: 'Agua limpia en cada grifo de tu hogar.',
  },
  {
    key: 'city-water-purification',
    slugEn: 'city-water-purification',
    slugEs: 'purificacion-agua-ciudad',
    icon: 'Building2',
    nameEn: 'City Water Purification',
    nameEs: 'Purificación de Agua Municipal',
    descEn: 'Remove chlorine, lead, and chemicals from city water.',
    descEs: 'Elimina cloro, plomo y químicos del agua municipal.',
  },
] as const;

// ─── SERVICE AREAS (LOCATIONS) ────────────────────────────────────────────────

export const LOCATIONS = [
  { key: 'miami', slug: 'miami', nameEn: 'Miami', nameEs: 'Miami' },
  { key: 'boca-raton', slug: 'boca-raton', nameEn: 'Boca Raton', nameEs: 'Boca Raton' },
  { key: 'fort-lauderdale', slug: 'fort-lauderdale', nameEn: 'Fort Lauderdale', nameEs: 'Fort Lauderdale' },
  { key: 'palm-beach', slug: 'palm-beach', nameEn: 'Palm Beach', nameEs: 'Palm Beach' },
] as const;

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

export const NAV_CTA = {
  labelEn: 'Free Water Test',
  labelEs: 'Análisis Gratis',
  href: '/contact',
} as const;

// ─── SEO DEFAULTS ─────────────────────────────────────────────────────────────

export const SEO_DEFAULTS = {
  separator: ' | ',
  twitterHandle: '@aquaionic',
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────

export const SOCIAL = {
  facebook: '',
  instagram: '',
  linkedin: '',
  youtube: '',
} as const;
