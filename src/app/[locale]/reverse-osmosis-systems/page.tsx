import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'reverse-osmosis-systems' : 'sistemas-osmosis-inversa';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Reverse Osmosis Systems | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/reverse-osmosis-systems/',
        'es': 'https://aquaionic.us/es/sistemas-osmosis-inversa/',
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

export default function ReverseOsmosisPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: '99% Contaminant Removal',
      title: 'Reverse Osmosis Systems',
      subtitle: 'The purest drinking water for your home. Advanced RO technology removes 99% of contaminants including lead, chlorine, fluoride, and pharmaceuticals.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',
      benefitsTitle: 'Pure, Healthy Drinking Water',
      benefitsSubtitle: 'NSF/FDA certified reverse osmosis systems for Florida homes',
      benefit1Title: 'Purest Water Available',
      benefit1Text: '5-stage filtration removes up to 99% of dissolved solids, heavy metals, and contaminants.',
      benefit2Title: 'Great Taste',
      benefit2Text: 'Remove chlorine, chemicals, and impurities that affect the taste and smell of your water.',
      benefit3Title: 'Cost Effective',
      benefit3Text: 'Stop buying bottled water. Save thousands while protecting the environment.',
      featuresTitle: 'What We Remove',
      featuresSubtitle: '5-stage reverse osmosis filtration',
      feature1: 'Lead, arsenic & heavy metals',
      feature2: 'Chlorine & chloramines',
      feature3: 'Fluoride & pharmaceuticals',
      feature4: 'Bacteria, viruses & cysts',
      feature5: 'Nitrates & pesticides',
      feature6: 'Total Dissolved Solids (TDS)',
      feature7: 'PFAS (forever chemicals)',
      feature8: 'Microplastics & nanoparticles',
      ctaTitle: 'Ready For Pure Water?',
      ctaSubtitle: 'Get crystal-clear, great-tasting water from every tap',
      ctaButton: 'Get Your Free Quote',
    },
    es: {
      badge: '99% Eliminación de Contaminantes',
      title: 'Sistemas de Ósmosis Inversa',
      subtitle: 'El agua potable más pura para su hogar. Tecnología RO avanzada elimina el 99% de contaminantes incluyendo plomo, cloro, fluoruro y farmacéuticos.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',
      benefitsTitle: 'Agua Potable Pura y Saludable',
      benefitsSubtitle: 'Sistemas de ósmosis inversa certificados NSF/FDA para hogares de Florida',
      benefit1Title: 'Agua Más Pura Disponible',
      benefit1Text: 'Filtración de 5 etapas elimina hasta el 99% de sólidos disueltos, metales pesados y contaminantes.',
      benefit2Title: 'Excelente Sabor',
      benefit2Text: 'Elimine cloro, químicos e impurezas que afectan el sabor y olor de su agua.',
      benefit3Title: 'Económico',
      benefit3Text: 'Deje de comprar agua embotellada. Ahorre miles mientras protege el medio ambiente.',
      featuresTitle: 'Lo Que Eliminamos',
      featuresSubtitle: 'Filtración por ósmosis inversa de 5 etapas',
      feature1: 'Plomo, arsénico y metales pesados',
      feature2: 'Cloro y cloraminas',
      feature3: 'Fluoruro y farmacéuticos',
      feature4: 'Bacterias, virus y quistes',
      feature5: 'Nitratos y pesticidas',
      feature6: 'Sólidos Disueltos Totales (TDS)',
      feature7: 'PFAS (químicos permanentes)',
      feature8: 'Microplásticos y nanopartículas',
      ctaTitle: '¿Listo Para Agua Pura?',
      ctaSubtitle: 'Obtenga agua cristalina y de excelente sabor en cada grifo',
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
            '@type': 'Product',
            name: locale === 'en' ? 'Reverse Osmosis System' : 'Sistema de Ósmosis Inversa',
            description: t.subtitle,
            brand: {
              '@type': 'Brand',
              name: 'Aquaionic',
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary bg-white text-blue-700 hover:bg-cyan-50 hover:shadow-2xl">
                  {t.cta1}
                </a>
                <a href="tel:+13054671525" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-700">
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-cyan rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
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

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-ocean rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-12 backdrop-blur-sm border-2 border-blue-300 shadow-xl">
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <div className="text-8xl mb-4 animate-float">💧</div>
                      <div className="text-6xl font-jakarta font-extrabold text-gradient mb-2">99%</div>
                      <div className="text-xl font-semibold text-ocean">
                        {locale === 'en' ? 'Pure Water' : 'Agua Pura'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-700 to-cyan text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-blue-700 hover:bg-cyan-50 hover:shadow-2xl text-lg px-8 py-4">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
