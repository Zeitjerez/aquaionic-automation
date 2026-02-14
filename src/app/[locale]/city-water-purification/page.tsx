import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'city-water-purification' : 'purificacion-agua-ciudad';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'City Water Purification | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/city-water-purification/',
        'es': 'https://aquaionic.us/es/purificacion-agua-ciudad/',
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

export default function CityWaterPurificationPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: locale === 'en' ? 'City Water Purification' : 'Purificación de Agua Municipal',
            provider: {
              '@type': 'Organization',
              name: 'Aquaionic',
              url: 'https://aquaionic.us',
            },
            areaServed: {
              '@type': 'State',
              name: 'Florida',
            },
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'City Water Purification Systems Florida' : 'Sistemas de Purificación de Agua Municipal Florida'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Purify Florida city water. Remove chlorine, lead, chemicals & pharmaceuticals. Protect your family from municipal water contaminants. NSF certified.'
                  : 'Purifique el agua municipal de Florida. Elimine cloro, plomo, químicos y farmacéuticos. Proteja a su familia de contaminantes del agua municipal. Certificado NSF.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Common City Water Issues' : 'Problemas Comunes del Agua Municipal'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>{locale === 'en' ? '✓ Chlorine taste & odor' : '✓ Sabor y olor a cloro'}</li>
                <li>{locale === 'en' ? '✓ Lead from old pipes' : '✓ Plomo de tuberías antiguas'}</li>
                <li>{locale === 'en' ? '✓ Disinfection byproducts' : '✓ Subproductos de desinfección'}</li>
                <li>{locale === 'en' ? '✓ Pharmaceutical residues' : '✓ Residuos farmacéuticos'}</li>
                <li>{locale === 'en' ? '✓ Industrial chemicals' : '✓ Químicos industriales'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
