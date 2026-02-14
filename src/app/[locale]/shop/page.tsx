import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'shop' : 'tienda';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Shop | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/shop/',
        'es': 'https://aquaionic.us/es/tienda/',
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

export default function ShopPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Store',
            name: 'Aquaionic Shop',
            description: locale === 'en'
              ? 'Buy professional water purification systems for Florida homes.'
              : 'Compre sistemas profesionales de purificación de agua para hogares en Florida.',
            url: locale === 'en' ? 'https://aquaionic.us/shop/' : 'https://aquaionic.us/es/tienda/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Shop Water Purification Systems' : 'Tienda de Sistemas de Purificación'}
            </h1>
            <p className="text-xl text-text-mid leading-relaxed mb-12">
              {locale === 'en'
                ? 'Buy professional water purification systems for Florida homes. NSF certified products. Free shipping in South Florida.'
                : 'Compre sistemas profesionales de purificación de agua para hogares en Florida. Productos certificados NSF. Envío gratis en el sur de Florida.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product grid will be populated dynamically */}
              <div className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en' ? 'Reverse Osmosis Systems' : 'Sistemas de Ósmosis Inversa'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Remove 99% of contaminants from drinking water.'
                    : 'Elimine 99% de contaminantes del agua potable.'}
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en' ? 'Water Softeners' : 'Ablandadores de Agua'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Solve hard water problems throughout your home.'
                    : 'Resuelva problemas de agua dura en toda su casa.'}
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en' ? 'Whole House Filters' : 'Filtros para Toda la Casa'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Clean water from every tap in your home.'
                    : 'Agua limpia en cada grifo de su hogar.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
