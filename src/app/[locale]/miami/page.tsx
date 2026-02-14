import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'miami' : 'miami-es';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Water Purification Miami | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/miami/',
        'es': 'https://aquaionic.us/es/miami-es/',
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

export default function MiamiPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aquaionic Water Purification - Miami',
            description: locale === 'en'
              ? 'Professional water purification services in Miami, FL. Well water treatment, reverse osmosis, whole house filtration.'
              : 'Servicios profesionales de purificación de agua en Miami, FL. Tratamiento de agua de pozo, ósmosis inversa, filtración completa.',
            areaServed: {
              '@type': 'City',
              name: 'Miami',
              containedIn: {
                '@type': 'AdministrativeArea',
                name: 'Florida',
              },
            },
            url: 'https://aquaionic.us/miami/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Water Purification Miami FL' : 'Purificación de Agua Miami FL'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Professional water purification services in Miami, FL. Well water treatment, reverse osmosis, whole house filtration. 10+ years serving Miami-Dade County. Free water test.'
                  : 'Servicios profesionales de purificación de agua en Miami, FL. Tratamiento de agua de pozo, ósmosis inversa, filtración completa. 10+ años sirviendo al condado de Miami-Dade. Análisis gratuito.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Serving Miami-Dade County' : 'Sirviendo el Condado de Miami-Dade'}
              </h2>

              <p className="text-text-mid mb-4">
                {locale === 'en'
                  ? 'We provide water treatment services throughout Miami-Dade County, including:'
                  : 'Proporcionamos servicios de tratamiento de agua en todo el condado de Miami-Dade, incluyendo:'}
              </p>

              <ul className="space-y-2 text-text-mid">
                <li>✓ Miami</li>
                <li>✓ Miami Beach</li>
                <li>✓ Coral Gables</li>
                <li>✓ Kendall</li>
                <li>✓ Homestead</li>
                <li>✓ Doral</li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan/10 to-accent-green/10 rounded-lg border-2 border-cyan">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en' ? 'Free Water Test in Miami' : 'Análisis de Agua Gratuito en Miami'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Schedule your free water quality test. We serve all of Miami-Dade County.'
                    : 'Programe su análisis de calidad del agua gratuito. Servimos todo el condado de Miami-Dade.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
