import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'reverse-osmosis-systems' : 'sistemas-osmosis-inversa';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Reverse Osmosis Systems | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/reverse-osmosis-systems/',
        'es': 'https://aquaionic.us/es/sistemas-osmosis-inversa/',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonical,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default function ReverseOsmosisPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: locale === 'en' ? 'Reverse Osmosis System' : 'Sistema de Ósmosis Inversa',
            description: locale === 'en'
              ? 'Advanced reverse osmosis drinking water systems. Remove 99% of contaminants.'
              : 'Sistemas avanzados de ósmosis inversa. Elimine 99% de contaminantes.',
            brand: {
              '@type': 'Brand',
              name: 'Aquaionic',
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Reverse Osmosis Systems Florida' : 'Sistemas de Ósmosis Inversa Florida'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Advanced reverse osmosis drinking water systems for Florida homes. Remove 99% of contaminants including lead, chlorine, fluoride. NSF/FDA certified.'
                  : 'Sistemas avanzados de ósmosis inversa para hogares en Florida. Elimine 99% de contaminantes incluyendo plomo, cloro y fluoruro. Certificados NSF/FDA.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'What RO Systems Remove' : 'Qué Eliminan los Sistemas RO'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>{locale === 'en' ? '✓ Lead, arsenic & heavy metals' : '✓ Plomo, arsénico y metales pesados'}</li>
                <li>{locale === 'en' ? '✓ Chlorine & chloramines' : '✓ Cloro y cloraminas'}</li>
                <li>{locale === 'en' ? '✓ Fluoride & pharmaceuticals' : '✓ Fluoruro y farmacéuticos'}</li>
                <li>{locale === 'en' ? '✓ Bacteria & viruses' : '✓ Bacterias y virus'}</li>
                <li>{locale === 'en' ? '✓ Nitrates & pesticides' : '✓ Nitratos y pesticidas'}</li>
                <li>{locale === 'en' ? '✓ Total Dissolved Solids (TDS)' : '✓ Sólidos Disueltos Totales (TDS)'}</li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan/10 to-accent-green/10 rounded-lg border-2 border-cyan">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en' ? '99% Contaminant Removal' : 'Eliminación del 99% de Contaminantes'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Our RO systems remove up to 99% of dissolved solids and contaminants, providing the purest drinking water.'
                    : 'Nuestros sistemas RO eliminan hasta el 99% de sólidos disueltos y contaminantes, proporcionando el agua potable más pura.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
