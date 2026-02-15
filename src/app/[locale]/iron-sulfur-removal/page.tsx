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

  const content = {
    en: {
      badge: 'Proven Technology',
      title: 'Iron & Sulfur Removal Systems',
      subtitle: 'Eliminate rust stains, rotten egg smell, and metallic taste from your well water. Crystal-clear, odor-free water throughout your entire home.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',
      benefitsTitle: 'Say Goodbye To Water Problems',
      benefitsSubtitle: 'Advanced filtration technology designed for Florida well water',
      benefit1Title: 'No More Staining',
      benefit1Text: 'Eliminate rust-colored water and orange stains on fixtures, clothing, and appliances.',
      benefit2Title: 'Fresh, Clean Smell',
      benefit2Text: 'Remove hydrogen sulfide gas that causes the unpleasant rotten egg odor in your water.',
      benefit3Title: 'Better Taste',
      benefit3Text: 'Get rid of metallic taste and enjoy crystal-clear, fresh-tasting water from every tap.',
      featuresTitle: 'Problems We Solve',
      featuresSubtitle: 'Comprehensive iron and sulfur removal for Florida homes',
      feature1: 'Rust-colored water & orange staining',
      feature2: 'Rotten egg smell (hydrogen sulfide)',
      feature3: 'Metallic or bitter taste',
      feature4: 'Stained fixtures, toilets & sinks',
      feature5: 'Damaged plumbing & appliances',
      feature6: 'Discolored laundry & dishes',
      feature7: 'High iron levels (over 0.3 ppm)',
      feature8: 'Sulfur bacteria growth',
      ctaTitle: 'Ready To Stop Water Stains?',
      ctaSubtitle: 'Get a free water test and find out how much iron and sulfur is in your water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Tecnología Probada',
      title: 'Sistemas de Eliminación de Hierro y Azufre',
      subtitle: 'Elimine manchas de óxido, olor a huevo podrido y sabor metálico de su agua de pozo. Agua cristalina y sin olores en toda su casa.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',
      benefitsTitle: 'Diga Adiós a los Problemas de Agua',
      benefitsSubtitle: 'Tecnología de filtración avanzada diseñada para agua de pozo de Florida',
      benefit1Title: 'No Más Manchas',
      benefit1Text: 'Elimine el agua color óxido y las manchas naranjas en sanitarios, ropa y electrodomésticos.',
      benefit2Title: 'Olor Fresco y Limpio',
      benefit2Text: 'Elimine el gas de sulfuro de hidrógeno que causa el desagradable olor a huevo podrido en su agua.',
      benefit3Title: 'Mejor Sabor',
      benefit3Text: 'Elimine el sabor metálico y disfrute de agua cristalina y de sabor fresco en cada grifo.',
      featuresTitle: 'Problemas que Resolvemos',
      featuresSubtitle: 'Eliminación completa de hierro y azufre para hogares de Florida',
      feature1: 'Agua color óxido y manchas naranjas',
      feature2: 'Olor a huevo podrido (sulfuro de hidrógeno)',
      feature3: 'Sabor metálico o amargo',
      feature4: 'Manchas en sanitarios y lavabos',
      feature5: 'Tuberías y electrodomésticos dañados',
      feature6: 'Ropa y platos decolorados',
      feature7: 'Niveles altos de hierro (más de 0.3 ppm)',
      feature8: 'Crecimiento de bacterias de azufre',
      ctaTitle: '¿Listo Para Detener las Manchas?',
      ctaSubtitle: 'Obtenga un análisis de agua gratuito y descubra cuánto hierro y azufre hay en su agua',
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
            description: t.subtitle,
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-orange-900 via-orange-700 to-amber-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-amber-50 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary bg-white text-orange-700 hover:bg-amber-50 hover:shadow-2xl">
                  {t.cta1}
                </a>
                <a href="tel:+13054671525" className="btn-secondary border-white text-white hover:bg-white hover:text-orange-700">
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-ocean rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-cyan rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-12 backdrop-blur-sm border-2 border-orange-300 shadow-xl">
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="text-7xl mb-6">🚿</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-5xl font-jakarta font-extrabold text-orange-600">100%</div>
                        <div className="text-sm font-semibold text-orange-800 mt-1">
                          {locale === 'en' ? 'Iron Removal' : 'Eliminación de Hierro'}
                        </div>
                      </div>
                      <div>
                        <div className="text-5xl font-jakarta font-extrabold text-cyan">0</div>
                        <div className="text-sm font-semibold text-ocean mt-1">
                          {locale === 'en' ? 'Rotten Egg Smell' : 'Olor a Huevo'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-orange-900 via-orange-700 to-amber-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-amber-50 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-orange-700 hover:bg-amber-50 hover:shadow-2xl text-lg px-8 py-4">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
