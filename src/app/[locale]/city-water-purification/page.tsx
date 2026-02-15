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

  const content = {
    en: {
      badge: 'Municipal Water Treatment',
      title: 'City Water Purification Systems',
      subtitle: 'Advanced filtration for municipal water. Remove chlorine, chloramines, disinfection byproducts, and improve taste from your city water supply.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',
      benefitsTitle: 'Better Than City Water',
      benefitsSubtitle: 'Professional filtration systems for municipal water in Florida',
      benefit1Title: 'Remove Chlorine',
      benefit1Text: 'Eliminate chlorine and chloramines that cause bad taste, odor, and dry skin.',
      benefit2Title: 'Filter Contaminants',
      benefit2Text: 'Remove disinfection byproducts, lead from pipes, and other contaminants in city water.',
      benefit3Title: 'Great Tasting Water',
      benefit3Text: 'Enjoy fresh, clean-tasting water for drinking, cooking, and ice making.',
      featuresTitle: 'What We Remove',
      featuresSubtitle: 'Advanced city water purification',
      feature1: 'Chlorine & chloramines',
      feature2: 'Disinfection byproducts (THMs, HAAs)',
      feature3: 'Lead & copper from pipes',
      feature4: 'Sediment & rust particles',
      feature5: 'Bad taste & odor',
      feature6: 'Volatile organic compounds (VOCs)',
      feature7: 'Herbicides & pesticides',
      feature8: 'PFAS & emerging contaminants',
      ctaTitle: 'Ready For Better City Water?',
      ctaSubtitle: 'Upgrade your municipal water with professional filtration',
      ctaButton: 'Get Your Free Quote',
    },
    es: {
      badge: 'Tratamiento de Agua Municipal',
      title: 'Sistemas de Purificación de Agua de Ciudad',
      subtitle: 'Filtración avanzada para agua municipal. Elimine cloro, cloraminas, subproductos de desinfección y mejore el sabor del suministro de agua de su ciudad.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',
      benefitsTitle: 'Mejor Que el Agua de la Ciudad',
      benefitsSubtitle: 'Sistemas de filtración profesionales para agua municipal en Florida',
      benefit1Title: 'Elimine el Cloro',
      benefit1Text: 'Elimine cloro y cloraminas que causan mal sabor, olor y piel seca.',
      benefit2Title: 'Filtre Contaminantes',
      benefit2Text: 'Elimine subproductos de desinfección, plomo de tuberías y otros contaminantes en agua de ciudad.',
      benefit3Title: 'Agua de Excelente Sabor',
      benefit3Text: 'Disfrute de agua fresca y de sabor limpio para beber, cocinar y hacer hielo.',
      featuresTitle: 'Lo Que Eliminamos',
      featuresSubtitle: 'Purificación avanzada de agua de ciudad',
      feature1: 'Cloro y cloraminas',
      feature2: 'Subproductos de desinfección (THMs, HAAs)',
      feature3: 'Plomo y cobre de tuberías',
      feature4: 'Sedimentos y partículas de óxido',
      feature5: 'Mal sabor y olor',
      feature6: 'Compuestos orgánicos volátiles (COVs)',
      feature7: 'Herbicidas y pesticidas',
      feature8: 'PFAS y contaminantes emergentes',
      ctaTitle: '¿Listo Para Mejor Agua de Ciudad?',
      ctaSubtitle: 'Mejore su agua municipal con filtración profesional',
      ctaButton: 'Obtenga Su Cotización Gratuita',
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
            name: locale === 'en' ? 'City Water Purification' : 'Purificación de Agua de Ciudad',
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
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-indigo-900 via-blue-700 to-sky-500 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary bg-white text-indigo-700 hover:bg-sky-50 hover:shadow-2xl">
                  {t.cta1}
                </a>
                <a href="tel:+13054671525" className="btn-secondary border-white text-white hover:bg-white hover:text-indigo-700">
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
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-ocean rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <div className="aspect-square bg-gradient-to-br from-sky-100 to-indigo-100 rounded-3xl p-12 backdrop-blur-sm border-2 border-sky-300 shadow-xl">
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <div className="text-8xl mb-4 animate-float">🏙️</div>
                      <div className="text-5xl font-jakarta font-extrabold bg-gradient-to-br from-indigo-600 to-sky-500 bg-clip-text text-transparent mb-2">
                        Clean
                      </div>
                      <div className="text-xl font-semibold text-indigo-700">
                        {locale === 'en' ? 'City Water' : 'Agua de Ciudad'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-indigo-900 via-blue-700 to-sky-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-indigo-700 hover:bg-sky-50 hover:shadow-2xl text-lg px-8 py-4">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
