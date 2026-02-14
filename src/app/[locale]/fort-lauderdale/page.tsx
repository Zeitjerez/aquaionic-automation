import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'fort-lauderdale' : 'fort-lauderdale-es';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Water Purification Fort Lauderdale | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/fort-lauderdale/',
        'es': 'https://aquaionic.us/es/fort-lauderdale-es/',
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

export default function FortLauderdalePage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aquaionic Water Purification - Fort Lauderdale',
            areaServed: {
              '@type': 'City',
              name: 'Fort Lauderdale',
              containedIn: {
                '@type': 'AdministrativeArea',
                name: 'Florida',
              },
            },
            url: 'https://aquaionic.us/fort-lauderdale/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Water Purification Fort Lauderdale FL' : 'Purificación de Agua Fort Lauderdale FL'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Professional water treatment in Fort Lauderdale, FL. Well water & city water purification. Remove iron, sulfur, hard water. Serving Broward County.'
                  : 'Tratamiento profesional de agua en Fort Lauderdale, FL. Purificación de agua de pozo y municipal. Elimine hierro, azufre, agua dura. Sirviendo al condado de Broward.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Serving Broward County' : 'Sirviendo el Condado de Broward'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>✓ Fort Lauderdale</li>
                <li>✓ Hollywood</li>
                <li>✓ Pompano Beach</li>
                <li>✓ Plantation</li>
                <li>✓ Coral Springs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
