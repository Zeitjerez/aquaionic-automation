import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'iron-sulfur-removal' : 'eliminacion-hierro-azufre';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Iron & Sulfur Removal | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/iron-sulfur-removal/',
        'es': 'https://aquaionic.us/es/eliminacion-hierro-azufre/',
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

export default function IronSulfurRemovalPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: locale === 'en' ? 'Iron & Sulfur Removal' : 'Eliminación de Hierro y Azufre',
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
              {locale === 'en' ? 'Iron & Sulfur Removal Systems Florida' : 'Sistemas de Eliminación de Hierro y Azufre Florida'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Remove iron and sulfur from well water. Eliminate rust stains, rotten egg smell, and metallic taste. NSF certified filtration for Florida homes.'
                  : 'Elimine el hierro y azufre del agua de pozo. Acabe con manchas de óxido, olor a huevo podrido y sabor metálico. Filtración certificada NSF.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Problems We Solve' : 'Problemas que Resolvemos'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>{locale === 'en' ? '✓ Rust-colored water & staining' : '✓ Agua color óxido y manchas'}</li>
                <li>{locale === 'en' ? '✓ Rotten egg smell (hydrogen sulfide)' : '✓ Olor a huevo podrido (sulfuro de hidrógeno)'}</li>
                <li>{locale === 'en' ? '✓ Metallic taste in water' : '✓ Sabor metálico en el agua'}</li>
                <li>{locale === 'en' ? '✓ Stained fixtures, toilets & sinks' : '✓ Manchas en sanitarios y lavabos'}</li>
                <li>{locale === 'en' ? '✓ Damaged plumbing & appliances' : '✓ Tuberías y electrodomésticos dañados'}</li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan/10 to-accent-green/10 rounded-lg border-2 border-cyan">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en' ? 'Free Water Analysis' : 'Análisis de Agua Gratuito'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Test your water for iron and sulfur levels. Free analysis for South Florida residents.'
                    : 'Analice su agua para niveles de hierro y azufre. Análisis gratuito para residentes del sur de Florida.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
