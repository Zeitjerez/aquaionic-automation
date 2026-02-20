import { MetadataRoute } from 'next';

const baseUrl = 'https://aquaionic.us';

type Freq = MetadataRoute.Sitemap[number]['changeFrequency'];

interface PageDef {
  enSlug: string;
  esSlug: string;
  priority: number;
  freq: Freq;
}

function buildEntries(pages: PageDef[]): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const { enSlug, esSlug, priority, freq } of pages) {
    const enUrl = enSlug ? `${baseUrl}/en/${enSlug}/` : `${baseUrl}/en/`;
    const esUrl = esSlug ? `${baseUrl}/es/${esSlug}/` : `${baseUrl}/es/`;
    const alternates = { languages: { en: enUrl, es: esUrl } };
    const shared = { lastModified: new Date(), changeFrequency: freq, priority, alternates };
    entries.push({ url: enUrl, ...shared });
    entries.push({ url: esUrl, ...shared });
  }
  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Home ─────────────────────────────────────────────────────────────────
    ...buildEntries([
      { enSlug: '', esSlug: '', priority: 1.0, freq: 'weekly' },
    ]),

    // ── Service pages ─────────────────────────────────────────────────────────
    ...buildEntries([
      { enSlug: 'well-water-treatment',    esSlug: 'tratamiento-agua-de-pozo',  priority: 0.9, freq: 'monthly' },
      { enSlug: 'reverse-osmosis-systems', esSlug: 'sistemas-osmosis-inversa',  priority: 0.9, freq: 'monthly' },
      { enSlug: 'whole-house-filtration',  esSlug: 'filtracion-toda-la-casa',   priority: 0.9, freq: 'monthly' },
      { enSlug: 'iron-sulfur-removal',     esSlug: 'eliminacion-hierro-azufre', priority: 0.8, freq: 'monthly' },
      { enSlug: 'hard-water-solutions',    esSlug: 'soluciones-agua-dura',      priority: 0.8, freq: 'monthly' },
      { enSlug: 'city-water-purification', esSlug: 'purificacion-agua-ciudad',  priority: 0.8, freq: 'monthly' },
    ]),

    // ── Location pages ────────────────────────────────────────────────────────
    ...buildEntries([
      { enSlug: 'miami',           esSlug: 'miami',           priority: 0.8, freq: 'monthly' },
      { enSlug: 'boca-raton',      esSlug: 'boca-raton',      priority: 0.8, freq: 'monthly' },
      { enSlug: 'fort-lauderdale', esSlug: 'fort-lauderdale', priority: 0.8, freq: 'monthly' },
      { enSlug: 'palm-beach',      esSlug: 'palm-beach',      priority: 0.8, freq: 'monthly' },
    ]),

    // ── Company pages ─────────────────────────────────────────────────────────
    ...buildEntries([
      { enSlug: 'shop',    esSlug: 'tienda',   priority: 0.7, freq: 'weekly'  },
      { enSlug: 'blog',    esSlug: 'blog',     priority: 0.7, freq: 'weekly'  },
      { enSlug: 'about',   esSlug: 'nosotros', priority: 0.6, freq: 'monthly' },
      { enSlug: 'contact', esSlug: 'contacto', priority: 0.6, freq: 'monthly' },
    ]),

    // ── Legal ─────────────────────────────────────────────────────────────────
    ...buildEntries([
      { enSlug: 'privacy-policy', esSlug: 'politica-de-privacidad', priority: 0.3, freq: 'yearly' },
      { enSlug: 'refund-policy',  esSlug: 'politica-de-reembolso',  priority: 0.3, freq: 'yearly' },
    ]),
  ];
}
