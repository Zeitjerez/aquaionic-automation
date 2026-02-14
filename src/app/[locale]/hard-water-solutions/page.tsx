import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'hard-water-solutions' : 'soluciones-agua-dura';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Hard Water Solutions | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/hard-water-solutions/',
        'es': 'https://aquaionic.us/es/soluciones-agua-dura/',
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

export default function HardWaterSolutionsPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: locale === 'en' ? 'Hard Water Solutions' : 'Soluciones para Agua Dura',
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
              {locale === 'en' ? 'Hard Water Solutions Florida | Water Softeners' : 'Soluciones para Agua Dura Florida | Ablandadores'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Solve hard water problems in Florida. Professional water softeners remove calcium, magnesium & scale buildup. Protect plumbing, appliances & skin.'
                  : 'Solucione problemas de agua dura en Florida. Ablandadores profesionales eliminan calcio, magnesio y sarro. Proteja tuberías, electrodomésticos y piel.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Signs of Hard Water' : 'Señales de Agua Dura'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>{locale === 'en' ? '✓ White scale on faucets & fixtures' : '✓ Sarro blanco en grifos y sanitarios'}</li>
                <li>{locale === 'en' ? '✓ Dry skin & hair after showering' : '✓ Piel y cabello secos después de la ducha'}</li>
                <li>{locale === 'en' ? '✓ Spots on dishes & glassware' : '✓ Manchas en platos y cristalería'}</li>
                <li>{locale === 'en' ? '✓ Reduced soap lather' : '✓ Jabón produce poca espuma'}</li>
                <li>{locale === 'en' ? '✓ Stiff, dingy laundry' : '✓ Ropa rígida y opaca'}</li>
                <li>{locale === 'en' ? '✓ Higher energy bills' : '✓ Facturas de energía más altas'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Benefits of Water Softening' : 'Beneficios del Ablandamiento'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>{locale === 'en' ? '✓ Softer skin & hair' : '✓ Piel y cabello más suaves'}</li>
                <li>{locale === 'en' ? '✓ Cleaner dishes & clothes' : '✓ Platos y ropa más limpios'}</li>
                <li>{locale === 'en' ? '✓ Extended appliance lifespan' : '✓ Mayor vida útil de electrodomésticos'}</li>
                <li>{locale === 'en' ? '✓ Lower energy costs' : '✓ Menores costos de energía'}</li>
                <li>{locale === 'en' ? '✓ Reduced soap & detergent usage' : '✓ Menor uso de jabón y detergente'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
