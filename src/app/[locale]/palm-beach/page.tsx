import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'palm-beach' : 'palm-beach-es';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Water Purification Palm Beach | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/palm-beach/',
        'es': 'https://aquaionic.us/es/palm-beach-es/',
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

export default function PalmBeachPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aquaionic Water Purification - Palm Beach',
            areaServed: {
              '@type': 'City',
              name: 'Palm Beach',
              containedIn: {
                '@type': 'AdministrativeArea',
                name: 'Florida',
              },
            },
            url: 'https://aquaionic.us/palm-beach/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Water Purification Palm Beach FL' : 'Purificación de Agua Palm Beach FL'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Expert water purification in Palm Beach, FL. Well water treatment, reverse osmosis, water softeners. Serving Palm Beach County homes. NSF certified.'
                  : 'Expertos en purificación de agua en Palm Beach, FL. Tratamiento de agua de pozo, ósmosis inversa, ablandadores. Sirviendo hogares en el condado de Palm Beach. Certificado NSF.'}
              </p>

              <ul className="space-y-2 text-text-mid">
                <li>✓ Palm Beach</li>
                <li>✓ West Palm Beach</li>
                <li>✓ Jupiter</li>
                <li>✓ Palm Beach Gardens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
