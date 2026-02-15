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

  const content = {
    en: {
      badge: 'NSF & FDA Certified',
      title: 'Well Water Treatment Systems',
      subtitle: 'Professional solutions for clean, safe well water in Florida. Remove iron, sulfur, bacteria, and hard minerals with industry-leading filtration systems.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',
      benefitsTitle: 'Why Choose Our Systems?',
      benefitsSubtitle: 'Professional-grade water treatment solutions designed specifically for Florida well water',
      benefit1Title: '99.9% Contaminant Removal',
      benefit1Text: 'Advanced filtration removes iron, sulfur, bacteria, sediments, and harmful contaminants from your well water.',
      benefit2Title: 'NSF/FDA Certified',
      benefit2Text: 'All our systems meet the highest industry standards for safety and performance in residential water treatment.',
      benefit3Title: 'Lifetime Support',
      benefit3Text: 'Free installation, maintenance training, and ongoing technical support for the life of your system.',
      featuresTitle: 'What We Remove From Your Water',
      featuresSubtitle: 'Comprehensive well water treatment for Florida homes',
      feature1: 'Iron & rust (stops orange staining)',
      feature2: 'Hydrogen sulfide (eliminates rotten egg smell)',
      feature3: 'Bacteria, E.coli & coliform',
      feature4: 'Hard minerals (calcium & magnesium)',
      feature5: 'Sediment, sand & turbidity',
      feature6: 'Low pH (acidic water correction)',
      feature7: 'Manganese (black staining)',
      feature8: 'Tannins (yellow/brown discoloration)',
      ctaTitle: 'Ready for Clean Well Water?',
      ctaSubtitle: 'Get your free water analysis today and discover exactly what\'s in your well water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Certificado NSF y FDA',
      title: 'Sistemas de Tratamiento de Agua de Pozo',
      subtitle: 'Soluciones profesionales para agua de pozo limpia y segura en Florida. Elimine hierro, azufre, bacterias y minerales duros con sistemas de filtración líderes en la industria.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',
      benefitsTitle: '¿Por Qué Elegir Nuestros Sistemas?',
      benefitsSubtitle: 'Soluciones de tratamiento de agua de grado profesional diseñadas específicamente para agua de pozo de Florida',
      benefit1Title: '99.9% Eliminación de Contaminantes',
      benefit1Text: 'Filtración avanzada elimina hierro, azufre, bacterias, sedimentos y contaminantes dañinos de su agua de pozo.',
      benefit2Title: 'Certificado NSF/FDA',
      benefit2Text: 'Todos nuestros sistemas cumplen con los más altos estándares de la industria para seguridad y rendimiento.',
      benefit3Title: 'Soporte de Por Vida',
      benefit3Text: 'Instalación gratuita, capacitación de mantenimiento y soporte técnico continuo durante la vida de su sistema.',
      featuresTitle: 'Lo Que Eliminamos De Su Agua',
      featuresSubtitle: 'Tratamiento completo de agua de pozo para hogares de Florida',
      feature1: 'Hierro y óxido (detiene manchas naranjas)',
      feature2: 'Sulfuro de hidrógeno (elimina olor a huevo podrido)',
      feature3: 'Bacterias, E.coli y coliformes',
      feature4: 'Minerales duros (calcio y magnesio)',
      feature5: 'Sedimentos, arena y turbidez',
      feature6: 'pH bajo (corrección de agua ácida)',
      feature7: 'Manganeso (manchas negras)',
      feature8: 'Taninos (decoloración amarilla/marrón)',
      ctaTitle: '¿Listo Para Agua de Pozo Limpia?',
      ctaSubtitle: 'Obtenga su análisis de agua gratuito hoy y descubra exactamente qué hay en su agua de pozo',
      ctaButton: 'Programar Análisis Gratuito',
    },
  };

  const t = content[locale as keyof typeof content];

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
            description: t.subtitle,
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-deep-blue via-ocean to-cyan overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-cyan-50 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary bg-white text-ocean hover:bg-cyan-50 hover:shadow-2xl">
                  {t.cta1}
                </a>
                <a href="tel:+13054671525" className="btn-secondary border-white text-white hover:bg-white hover:text-ocean">
                  {t.cta2}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-ghost">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                {t.benefitsTitle}
              </h2>
              <p className="text-lg md:text-xl text-text-mid">
                {t.benefitsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-ocean rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit1Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit1Text}
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-cyan rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit2Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit2Text}
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean to-deep-blue rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit3Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit3Text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                  {t.featuresTitle}
                </h2>
                <p className="text-lg text-text-mid mb-8">
                  {t.featuresSubtitle}
                </p>
                <ul className="space-y-4">
                  {[t.feature1, t.feature2, t.feature3, t.feature4, t.feature5, t.feature6, t.feature7, t.feature8].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-text-mid">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-cyan/20 to-ocean/20 rounded-3xl p-12 backdrop-blur-sm border-2 border-cyan/30 shadow-xl">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-float">💧</div>
                      <div className="text-6xl font-jakarta font-extrabold text-gradient">99.9%</div>
                      <div className="text-xl font-semibold text-ocean mt-2">
                        {locale === 'en' ? 'Contaminant Removal' : 'Eliminación'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-deep-blue via-ocean to-cyan text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-cyan-50 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-ocean hover:bg-cyan-50 hover:shadow-2xl text-lg px-8 py-4">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
