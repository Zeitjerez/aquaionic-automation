import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'boca-raton' : 'boca-raton-es';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Water Purification Boca Raton | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/boca-raton/',
        'es': 'https://aquaionic.us/es/boca-raton-es/',
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

export default function BocaRatonPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aquaionic Water Purification - Boca Raton',
            areaServed: {
              '@type': 'City',
              name: 'Boca Raton',
              containedIn: {
                '@type': 'AdministrativeArea',
                name: 'Florida',
              },
            },
            url: 'https://aquaionic.us/boca-raton/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Water Purification Boca Raton FL' : 'Purificación de Agua Boca Raton FL'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Expert water purification in Boca Raton, FL. Remove hard water, chlorine, iron & contaminants. Serving Palm Beach County since 2010. NSF certified systems.'
                  : 'Expertos en purificación de agua en Boca Raton, FL. Elimine agua dura, cloro, hierro y contaminantes. Sirviendo al condado de Palm Beach desde 2010. Sistemas certificados NSF.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Serving Palm Beach County' : 'Sirviendo el Condado de Palm Beach'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>✓ Boca Raton</li>
                <li>✓ Delray Beach</li>
                <li>✓ Boynton Beach</li>
                <li>✓ Wellington</li>
                <li>✓ West Palm Beach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
