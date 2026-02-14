import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';
import { useTranslations } from 'next-intl';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'well-water-treatment' : 'tratamiento-agua-de-pozo';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Well Water Treatment | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/well-water-treatment/',
        'es': 'https://aquaionic.us/es/tratamiento-agua-de-pozo/',
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

export default function WellWaterTreatmentPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: locale === 'en' ? 'Well Water Treatment' : 'Tratamiento de Agua de Pozo',
            provider: {
              '@type': 'Organization',
              name: 'Aquaionic',
              url: 'https://aquaionic.us',
            },
            areaServed: {
              '@type': 'State',
              name: 'Florida',
            },
            description: locale === 'en'
              ? 'Professional well water treatment systems for Florida homes. Remove iron, sulfur, bacteria & hard minerals.'
              : 'Sistemas profesionales de tratamiento de agua de pozo para hogares en Florida. Eliminamos hierro, azufre, bacterias y minerales duros.',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Well Water Treatment Systems Florida' : 'Sistemas de Tratamiento de Agua de Pozo Florida'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Professional well water treatment for Florida homes. Remove iron, sulfur, bacteria & hard minerals. NSF/FDA certified systems. 99% contaminant removal. Free water test in South Florida.'
                  : 'Tratamiento profesional de agua de pozo en Florida. Eliminamos hierro, azufre, bacterias y minerales duros. Sistemas certificados NSF/FDA. 99% de eliminación de contaminantes. Análisis gratuito.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Our Well Water Treatment Solutions' : 'Nuestras Soluciones de Tratamiento'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>{locale === 'en' ? '✓ Iron & sulfur removal systems' : '✓ Sistemas de eliminación de hierro y azufre'}</li>
                <li>{locale === 'en' ? '✓ Bacteria & pathogen filtration' : '✓ Filtración de bacterias y patógenos'}</li>
                <li>{locale === 'en' ? '✓ Hard water softening' : '✓ Ablandamiento de agua dura'}</li>
                <li>{locale === 'en' ? '✓ Sediment & turbidity removal' : '✓ Eliminación de sedimentos y turbidez'}</li>
                <li>{locale === 'en' ? '✓ pH balancing & neutralization' : '✓ Equilibrio y neutralización del pH'}</li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan/10 to-accent-green/10 rounded-lg border-2 border-cyan">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en' ? 'Free Water Test Available' : 'Análisis de Agua Gratuito'}
                </h3>
                <p className="text-text-mid mb-4">
                  {locale === 'en'
                    ? 'Get a comprehensive water quality analysis. We test for iron, sulfur, bacteria, hardness, pH, and more.'
                    : 'Obtenga un análisis completo de calidad del agua. Analizamos hierro, azufre, bacterias, dureza, pH y más.'}
                </p>
                <a
                  href={locale === 'en' ? '/#water-test' : '/es/inicio/#water-test'}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan to-ocean text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  {locale === 'en' ? 'Request Free Test' : 'Solicitar Análisis Gratuito'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
