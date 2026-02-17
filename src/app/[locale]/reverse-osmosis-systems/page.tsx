import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'reverse-osmosis-systems' : 'sistemas-osmosis-inversa';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  const defaultTitle = locale === 'en'
    ? 'Reverse Osmosis Systems Florida | RO Water Filters | Drinking Water Purification | Aquaionic'
    : 'Sistemas de Ósmosis Inversa Florida | Filtros de Agua RO | Purificación de Agua Potable | Aquaionic';

  const defaultDescription = locale === 'en'
    ? '5-stage reverse osmosis water systems in South Florida. Remove 99% of contaminants: lead, chlorine, fluoride, PFAS. NSF certified. Free installation. Serving Miami, Boca Raton, Fort Lauderdale. Call (305) 467-1525.'
    : 'Sistemas de ósmosis inversa de 5 etapas en el sur de Florida. Elimine el 99% de contaminantes: plomo, cloro, fluoruro, PFAS. Certificado NSF. Instalación gratuita. Sirviendo Miami, Boca Ratón, Fort Lauderdale. Llame al (305) 467-1525.';

  const keywords = locale === 'en'
    ? 'reverse osmosis system Florida, RO water filter, drinking water purification, under sink water filter, lead removal, fluoride removal, PFAS removal, TDS reduction, reverse osmosis installation Miami, South Florida water purification, best RO system'
    : 'sistema ósmosis inversa Florida, filtro agua RO, purificación agua potable, filtro agua bajo fregadero, eliminación plomo, eliminación fluoruro, eliminación PFAS, reducción TDS, instalación ósmosis inversa Miami, purificación agua sur Florida, mejor sistema RO';

  if (!metadata) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      keywords: keywords,
    };
  }

  return {
    title: metadata.title || defaultTitle,
    description: metadata.description || defaultDescription,
    keywords: metadata.keywords || keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/reverse-osmosis-systems/',
        'es': 'https://aquaionic.us/es/sistemas-osmosis-inversa/',
      },
    },
    openGraph: {
      title: metadata.title || defaultTitle,
      description: metadata.description || defaultDescription,
      url: metadata.canonical,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [
        {
          url: 'https://aquaionic.us/images/og-reverse-osmosis.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'Reverse Osmosis Systems Florida' : 'Sistemas de Ósmosis Inversa Florida',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title || defaultTitle,
      description: metadata.description || defaultDescription,
    },
  };
}

export default function ReverseOsmosisPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'NSF Certified - 99% Contaminant Removal',
      title: 'Reverse Osmosis Water Systems ',
      highlight: 'Florida',
      subtitle: 'The purest drinking water for your South Florida home. Advanced 5-stage RO technology removes 99% of contaminants including lead, chlorine, fluoride, PFAS, and pharmaceuticals. Under-sink and whole-house systems available.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',

      // Benefits Section
      benefitsLabel: 'Premium Drinking Water',
      benefitsTitle: 'Why Choose Reverse Osmosis Filtration',
      benefitsSubtitle: 'NSF/FDA certified RO systems for the purest, healthiest drinking water in Florida',
      benefit1Title: 'Purest Water Available',
      benefit1Text: 'Advanced 5-stage reverse osmosis filtration removes up to 99% of dissolved solids, heavy metals, and over 1,000 contaminants.',
      benefit2Title: 'Great Taste & Odor',
      benefit2Text: 'Remove chlorine, chemicals, and impurities that affect the taste and smell of your drinking water. Crystal-clear, refreshing water.',
      benefit3Title: 'Cost Effective & Eco-Friendly',
      benefit3Text: 'Stop buying expensive bottled water. Save thousands annually while reducing plastic waste and protecting the environment.',

      // Process Section
      processLabel: 'Installation Process',
      processTitle: 'How We Install Your RO System',
      processStep1: 'Free Water Testing',
      processDesc1: 'Professional TDS and contaminant analysis to determine your water quality',
      processStep2: 'System Selection',
      processDesc2: 'Choose between under-sink or whole-house RO based on your needs',
      processStep3: 'Professional Installation',
      processDesc3: 'Expert setup with minimal disruption, typically completed in 2-3 hours',
      processStep4: 'Filter Maintenance',
      processDesc4: 'Scheduled filter changes every 6-12 months to maintain peak performance',

      // Features Section
      featuresTitle: 'What Reverse Osmosis Removes',
      featuresSubtitle: 'Comprehensive 5-stage filtration for maximum contaminant removal',
      feature1: 'Lead, arsenic & heavy metals (up to 99% reduction)',
      feature2: 'Chlorine & chloramines (taste & odor removal)',
      feature3: 'Fluoride & pharmaceuticals (medication residues)',
      feature4: 'Bacteria, viruses & cysts (E.coli, Giardia)',
      feature5: 'Nitrates & pesticides (agricultural contaminants)',
      feature6: 'Total Dissolved Solids / TDS (minerals & salts)',
      feature7: 'PFAS "forever chemicals" (PFOA, PFOS)',
      feature8: 'Microplastics & nanoparticles (invisible contaminants)',

      // FAQ Section
      faqLabel: 'Common Questions',
      faqTitle: 'Reverse Osmosis FAQs',
      faq1Q: 'How does reverse osmosis work?',
      faq1A: 'Reverse osmosis uses a semi-permeable membrane to remove dissolved solids and contaminants from water. Water is forced through the membrane under pressure, leaving impurities behind. This process removes 95-99% of contaminants.',
      faq2Q: 'How much does a reverse osmosis system cost in Florida?',
      faq2A: 'Under-sink RO systems typically cost $400-$800 installed. Whole-house systems range from $2,500-$5,000. We offer free quotes and financing options. Most systems pay for themselves within 1-2 years compared to bottled water costs.',
      faq3Q: 'Does reverse osmosis remove healthy minerals?',
      faq3A: 'Yes, RO removes most minerals. However, you get minerals from food, not water. Many customers prefer to add a remineralization filter to balance pH and add beneficial minerals back to the water.',
      faq4Q: 'How often do RO filters need replacement?',
      faq4A: 'Pre-filters: every 6-12 months. RO membrane: every 2-3 years. Post-filters: every 12 months. We provide full maintenance service and send reminders when filters need changing.',

      // CTA Section
      ctaTitle: 'Ready for the Purest Drinking Water?',
      ctaSubtitle: 'Get crystal-clear, great-tasting water from every tap in your South Florida home',
      ctaButton: 'Get Your Free Quote Today',
    },
    es: {
      badge: 'Certificado NSF - 99% Eliminación de Contaminantes',
      title: 'Sistemas de Ósmosis Inversa ',
      highlight: 'Florida',
      subtitle: 'El agua potable más pura para su hogar en el sur de Florida. Tecnología RO avanzada de 5 etapas elimina el 99% de contaminantes incluyendo plomo, cloro, fluoruro, PFAS y farmacéuticos. Sistemas bajo fregadero y para toda la casa disponibles.',
      cta1: 'Análisis de Agua Gratis',
      cta2: 'Llamar (305) 467-1525',

      // Benefits Section
      benefitsLabel: 'Agua Potable Premium',
      benefitsTitle: 'Por Qué Elegir Filtración de Ósmosis Inversa',
      benefitsSubtitle: 'Sistemas RO certificados NSF/FDA para el agua potable más pura y saludable en Florida',
      benefit1Title: 'Agua Más Pura Disponible',
      benefit1Text: 'Filtración avanzada de ósmosis inversa de 5 etapas elimina hasta el 99% de sólidos disueltos, metales pesados y más de 1,000 contaminantes.',
      benefit2Title: 'Excelente Sabor y Olor',
      benefit2Text: 'Elimine cloro, químicos e impurezas que afectan el sabor y olor de su agua potable. Agua cristalina y refrescante.',
      benefit3Title: 'Económico y Ecológico',
      benefit3Text: 'Deje de comprar agua embotellada costosa. Ahorre miles anualmente mientras reduce los residuos plásticos y protege el medio ambiente.',

      // Process Section
      processLabel: 'Proceso de Instalación',
      processTitle: 'Cómo Instalamos Su Sistema RO',
      processStep1: 'Análisis de Agua Gratuito',
      processDesc1: 'Análisis profesional de TDS y contaminantes para determinar la calidad de su agua',
      processStep2: 'Selección de Sistema',
      processDesc2: 'Elija entre RO bajo fregadero o para toda la casa según sus necesidades',
      processStep3: 'Instalación Profesional',
      processDesc3: 'Configuración experta con mínima interrupción, típicamente completada en 2-3 horas',
      processStep4: 'Mantenimiento de Filtros',
      processDesc4: 'Cambios de filtros programados cada 6-12 meses para mantener el máximo rendimiento',

      // Features Section
      featuresTitle: 'Lo Que Elimina la Ósmosis Inversa',
      featuresSubtitle: 'Filtración integral de 5 etapas para máxima eliminación de contaminantes',
      feature1: 'Plomo, arsénico y metales pesados (hasta 99% de reducción)',
      feature2: 'Cloro y cloraminas (eliminación de sabor y olor)',
      feature3: 'Fluoruro y farmacéuticos (residuos de medicamentos)',
      feature4: 'Bacterias, virus y quistes (E.coli, Giardia)',
      feature5: 'Nitratos y pesticidas (contaminantes agrícolas)',
      feature6: 'Sólidos Disueltos Totales / TDS (minerales y sales)',
      feature7: 'PFAS "químicos permanentes" (PFOA, PFOS)',
      feature8: 'Microplásticos y nanopartículas (contaminantes invisibles)',

      // FAQ Section
      faqLabel: 'Preguntas Frecuentes',
      faqTitle: 'Preguntas Sobre Ósmosis Inversa',
      faq1Q: '¿Cómo funciona la ósmosis inversa?',
      faq1A: 'La ósmosis inversa usa una membrana semipermeable para eliminar sólidos disueltos y contaminantes del agua. El agua se fuerza a través de la membrana bajo presión, dejando atrás las impurezas. Este proceso elimina del 95-99% de los contaminantes.',
      faq2Q: '¿Cuánto cuesta un sistema de ósmosis inversa en Florida?',
      faq2A: 'Los sistemas RO bajo fregadero típicamente cuestan $400-$800 instalados. Los sistemas para toda la casa varían de $2,500 a $5,000. Ofrecemos cotizaciones gratuitas y opciones de financiamiento. La mayoría de los sistemas se pagan solos en 1-2 años comparado con los costos de agua embotellada.',
      faq3Q: '¿La ósmosis inversa elimina minerales saludables?',
      faq3A: 'Sí, la RO elimina la mayoría de los minerales. Sin embargo, obtienes minerales de los alimentos, no del agua. Muchos clientes prefieren agregar un filtro de remineralización para equilibrar el pH y añadir minerales beneficiosos de vuelta al agua.',
      faq4Q: '¿Con qué frecuencia necesitan reemplazo los filtros RO?',
      faq4A: 'Pre-filtros: cada 6-12 meses. Membrana RO: cada 2-3 años. Post-filtros: cada 12 meses. Proporcionamos servicio completo de mantenimiento y enviamos recordatorios cuando los filtros necesitan cambio.',

      // CTA Section
      ctaTitle: '¿Listo Para el Agua Potable Más Pura?',
      ctaSubtitle: 'Obtenga agua cristalina y de excelente sabor en cada grifo de su hogar en el sur de Florida',
      ctaButton: 'Obtenga Su Cotización Gratuita Hoy',
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: locale === 'en' ? 'Reverse Osmosis Water System' : 'Sistema de Ósmosis Inversa',
            description: t.subtitle,
            brand: {
              '@type': 'Brand',
              name: 'Aquaionic',
            },
            offers: {
              '@type': 'AggregateOffer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'USD',
              lowPrice: '400',
              highPrice: '5000',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: t.faq1Q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t.faq1A,
                },
              },
              {
                '@type': 'Question',
                name: t.faq2Q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t.faq2A,
                },
              },
              {
                '@type': 'Question',
                name: t.faq3Q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t.faq3A,
                },
              },
              {
                '@type': 'Question',
                name: t.faq4Q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t.faq4A,
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-deep-blue via-ocean to-cyan overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-accent-green">
                  {t.highlight}
                </span>
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
              <span className="section-label">{t.benefitsLabel}</span>
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

              {/* Benefit 2 */}
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

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean to-deep-blue rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
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
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-white rounded-3xl p-12 backdrop-blur-sm border-2 border-cyan/30 shadow-xl">
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <div className="text-8xl mb-4 animate-float">💧</div>
                      <div className="text-6xl font-jakarta font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-cyan mb-2">
                        99%
                      </div>
                      <div className="text-xl font-semibold text-ocean">
                        {locale === 'en' ? 'Pure Water' : 'Agua Pura'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-green/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">{t.processLabel}</span>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue">
                {t.processTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative group">
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan to-transparent" />
                <div className="bg-ghost rounded-2xl p-8 h-full border border-border hover:border-cyan hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-jakarta font-extrabold text-cyan/30 mb-4">01</div>
                  <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-2">
                    {t.processStep1}
                  </h3>
                  <p className="text-text-mid">{t.processDesc1}</p>
                </div>
              </div>

              <div className="relative group">
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan to-transparent" />
                <div className="bg-ghost rounded-2xl p-8 h-full border border-border hover:border-cyan hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-jakarta font-extrabold text-cyan/30 mb-4">02</div>
                  <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-2">
                    {t.processStep2}
                  </h3>
                  <p className="text-text-mid">{t.processDesc2}</p>
                </div>
              </div>

              <div className="relative group">
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan to-transparent" />
                <div className="bg-ghost rounded-2xl p-8 h-full border border-border hover:border-cyan hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-jakarta font-extrabold text-cyan/30 mb-4">03</div>
                  <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-2">
                    {t.processStep3}
                  </h3>
                  <p className="text-text-mid">{t.processDesc3}</p>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-ghost rounded-2xl p-8 h-full border border-border hover:border-cyan hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-jakarta font-extrabold text-cyan/30 mb-4">04</div>
                  <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-2">
                    {t.processStep4}
                  </h3>
                  <p className="text-text-mid">{t.processDesc4}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-ghost">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">{t.faqLabel}</span>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue">
                {t.faqTitle}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-border hover:border-cyan transition-all duration-300">
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.faq1Q}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.faq1A}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border hover:border-cyan transition-all duration-300">
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.faq2Q}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.faq2A}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border hover:border-cyan transition-all duration-300">
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.faq3Q}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.faq3A}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border hover:border-cyan transition-all duration-300">
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.faq4Q}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.faq4A}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-deep-blue via-ocean to-cyan text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl" />
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-cyan-50 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-ocean hover:bg-cyan-50 hover:shadow-2xl text-lg px-8 py-4 animate-breathe">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
