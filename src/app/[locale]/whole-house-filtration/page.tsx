import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'whole-house-filtration' : 'filtracion-toda-la-casa';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  const defaultTitle = locale === 'en'
    ? 'Whole House Water Filtration Systems Florida | Complete Home Water Filter | Aquaionic'
    : 'Sistemas de Filtración de Agua para Toda la Casa Florida | Filtro de Agua Completo | Aquaionic';

  const defaultDescription = locale === 'en'
    ? 'Whole house water filtration systems in South Florida. Clean filtered water from every tap. Remove chlorine, sediment, chemicals & contaminants. Protect appliances & plumbing. Free installation. Serving Miami, Boca Raton, Fort Lauderdale. Call (305) 467-1525.'
    : 'Sistemas de filtración de agua para toda la casa en el sur de Florida. Agua filtrada limpia en cada grifo. Elimine cloro, sedimentos, químicos y contaminantes. Proteja electrodomésticos y tuberías. Instalación gratuita. Sirviendo Miami, Boca Ratón, Fort Lauderdale. Llame al (305) 467-1525.';

  const keywords = locale === 'en'
    ? 'whole house water filter Florida, whole home filtration system, home water filtration, complete house water filter, point of entry water filter, chlorine removal whole house, sediment filter system, whole home water treatment, appliance protection water filter, Miami whole house filter'
    : 'filtro agua toda la casa Florida, sistema filtración hogar completo, filtración agua hogar, filtro agua casa completa, filtro agua punto entrada, eliminación cloro toda casa, sistema filtro sedimentos, tratamiento agua hogar completo, protección electrodomésticos filtro agua, filtro toda casa Miami';

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
        'en': 'https://aquaionic.us/whole-house-filtration/',
        'es': 'https://aquaionic.us/es/filtracion-toda-la-casa/',
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
          url: 'https://aquaionic.us/images/og-whole-house-filtration.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'Whole House Water Filtration Systems Florida' : 'Sistemas de Filtración de Agua para Toda la Casa Florida',
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

export default function WholeHouseFiltrationPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'Complete Home Protection',
      title: 'Whole House Water Filtration ',
      highlight: 'Systems',
      subtitle: 'Clean, filtered water from every tap, shower, and appliance in your South Florida home. Comprehensive point-of-entry filtration removes chlorine, sediment, chemicals, and contaminants throughout your entire house. Protect your family and extend appliance life.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',

      // Benefits Section
      benefitsLabel: 'Every Tap Protected',
      benefitsTitle: 'Complete Home Water Filtration for Florida',
      benefitsSubtitle: 'Professional whole-house water treatment systems for total home coverage',
      benefit1Title: 'Total Home Coverage',
      benefit1Text: 'Clean, filtered water from every faucet, shower, washing machine, dishwasher, and appliance throughout your entire home.',
      benefit2Title: 'Healthier Living',
      benefit2Text: 'Remove chlorine, chemicals, sediment, and contaminants for healthier drinking, cooking, and bathing water.',
      benefit3Title: 'Protect Your Investment',
      benefit3Text: 'Extend the life of plumbing, appliances, and water heaters by filtering out damaging sediment and mineral deposits.',

      // Process Section
      processLabel: 'Installation Process',
      processTitle: 'How We Install Your Whole House System',
      processStep1: 'Home Water Assessment',
      processDesc1: 'Professional evaluation of your home\'s water quality and plumbing configuration',
      processStep2: 'System Design',
      processDesc2: 'Custom filtration system sized for your home\'s flow rate and water issues',
      processStep3: 'Main Line Installation',
      processDesc3: 'Expert installation at point-of-entry for complete home coverage',
      processStep4: 'Filter Maintenance',
      processDesc4: 'Simple filter changes every 6-12 months to maintain peak performance',

      // Features Section
      featuresTitle: 'What Whole House Filtration Removes',
      featuresSubtitle: 'Multi-stage filtration for comprehensive home water treatment',
      feature1: 'Chlorine & chloramines (taste, odor & health concerns)',
      feature2: 'Sediment, sand & rust (protects plumbing & appliances)',
      feature3: 'VOCs & chemicals (volatile organic compounds)',
      feature4: 'Bad taste & odors (municipal water treatment byproducts)',
      feature5: 'Scale & mineral deposits (extends appliance life)',
      feature6: 'Iron & manganese (stops staining)',
      feature7: 'Turbidity & cloudiness (clear, clean water)',
      feature8: 'Disinfection byproducts (THMs & HAAs)',

      // FAQ Section
      faqLabel: 'Common Questions',
      faqTitle: 'Whole House Filtration FAQs',
      faq1Q: 'What is whole house water filtration?',
      faq1A: 'A whole house water filter (also called point-of-entry or POE system) treats all water entering your home at the main water line. This ensures every tap, shower, and appliance receives filtered water, unlike point-of-use filters that only treat specific faucets.',
      faq2Q: 'How much does a whole house water filter cost in Florida?',
      faq2A: 'Whole house filtration systems typically range from $1,200-$3,500 installed, depending on home size and water quality issues. Systems include sediment pre-filter, carbon filter, and optional specialty filters. We offer free quotes and financing options.',
      faq3Q: 'Will a whole house filter reduce water pressure?',
      faq3A: 'When properly sized for your home, whole house filters should not noticeably reduce water pressure. We size systems based on your home\'s peak flow rate (typically 10-15 GPM) to maintain adequate pressure throughout your home.',
      faq4Q: 'How often do whole house filters need replacement?',
      faq4A: 'Sediment pre-filters: every 3-6 months. Main carbon filter: every 6-12 months. Filter life depends on water quality and usage. We provide maintenance reminders and can handle all filter changes for you.',

      // CTA Section
      ctaTitle: 'Ready for Clean Water From Every Tap?',
      ctaSubtitle: 'Transform your entire South Florida home with professional whole-house filtration',
      ctaButton: 'Get Your Free Quote Today',
    },
    es: {
      badge: 'Protección Completa del Hogar',
      title: 'Filtración de Agua para Toda la Casa ',
      highlight: 'Sistemas',
      subtitle: 'Agua limpia y filtrada en cada grifo, ducha y electrodoméstico de su hogar en el sur de Florida. Filtración integral en el punto de entrada elimina cloro, sedimentos, químicos y contaminantes en toda su casa. Proteja a su familia y extienda la vida de los electrodomésticos.',
      cta1: 'Análisis de Agua Gratis',
      cta2: 'Llamar (305) 467-1525',

      // Benefits Section
      benefitsLabel: 'Cada Grifo Protegido',
      benefitsTitle: 'Filtración de Agua Completa del Hogar para Florida',
      benefitsSubtitle: 'Sistemas profesionales de tratamiento de agua para toda la casa para cobertura total',
      benefit1Title: 'Cobertura Total del Hogar',
      benefit1Text: 'Agua limpia y filtrada en cada grifo, ducha, lavadora, lavavajillas y electrodoméstico en toda su casa.',
      benefit2Title: 'Vida Más Saludable',
      benefit2Text: 'Elimine cloro, químicos, sedimentos y contaminantes para agua más saludable para beber, cocinar y bañarse.',
      benefit3Title: 'Proteja Su Inversión',
      benefit3Text: 'Extienda la vida de tuberías, electrodomésticos y calentadores de agua filtrando sedimentos dañinos y depósitos minerales.',

      // Process Section
      processLabel: 'Proceso de Instalación',
      processTitle: 'Cómo Instalamos Su Sistema para Toda la Casa',
      processStep1: 'Evaluación del Agua del Hogar',
      processDesc1: 'Evaluación profesional de la calidad del agua y configuración de tuberías de su hogar',
      processStep2: 'Diseño del Sistema',
      processDesc2: 'Sistema de filtración personalizado dimensionado para el flujo y problemas de agua de su hogar',
      processStep3: 'Instalación en Línea Principal',
      processDesc3: 'Instalación experta en el punto de entrada para cobertura completa del hogar',
      processStep4: 'Mantenimiento de Filtros',
      processDesc4: 'Cambios simples de filtros cada 6-12 meses para mantener el máximo rendimiento',

      // Features Section
      featuresTitle: 'Lo Que Elimina la Filtración para Toda la Casa',
      featuresSubtitle: 'Filtración de múltiples etapas para tratamiento integral del agua del hogar',
      feature1: 'Cloro y cloraminas (sabor, olor y preocupaciones de salud)',
      feature2: 'Sedimentos, arena y óxido (protege tuberías y electrodomésticos)',
      feature3: 'COVs y químicos (compuestos orgánicos volátiles)',
      feature4: 'Mal sabor y olores (subproductos del tratamiento de agua municipal)',
      feature5: 'Depósitos de sarro y minerales (extiende vida de electrodomésticos)',
      feature6: 'Hierro y manganeso (detiene manchas)',
      feature7: 'Turbidez y nubosidad (agua clara y limpia)',
      feature8: 'Subproductos de desinfección (THMs y HAAs)',

      // FAQ Section
      faqLabel: 'Preguntas Frecuentes',
      faqTitle: 'Preguntas Sobre Filtración para Toda la Casa',
      faq1Q: '¿Qué es la filtración de agua para toda la casa?',
      faq1A: 'Un filtro de agua para toda la casa (también llamado sistema de punto de entrada o POE) trata toda el agua que entra a su hogar en la línea de agua principal. Esto asegura que cada grifo, ducha y electrodoméstico reciba agua filtrada, a diferencia de los filtros de punto de uso que solo tratan grifos específicos.',
      faq2Q: '¿Cuánto cuesta un filtro de agua para toda la casa en Florida?',
      faq2A: 'Los sistemas de filtración para toda la casa típicamente varían de $1,200 a $3,500 instalados, dependiendo del tamaño del hogar y problemas de calidad del agua. Los sistemas incluyen prefiltro de sedimentos, filtro de carbón y filtros especiales opcionales. Ofrecemos cotizaciones gratuitas y opciones de financiamiento.',
      faq3Q: '¿Un filtro para toda la casa reducirá la presión del agua?',
      faq3A: 'Cuando se dimensiona adecuadamente para su hogar, los filtros para toda la casa no deben reducir notablemente la presión del agua. Dimensionamos los sistemas según el flujo máximo de su hogar (típicamente 10-15 GPM) para mantener una presión adecuada en toda su casa.',
      faq4Q: '¿Con qué frecuencia necesitan reemplazo los filtros para toda la casa?',
      faq4A: 'Prefiltros de sedimentos: cada 3-6 meses. Filtro principal de carbón: cada 6-12 meses. La vida del filtro depende de la calidad del agua y el uso. Proporcionamos recordatorios de mantenimiento y podemos manejar todos los cambios de filtro por usted.',

      // CTA Section
      ctaTitle: '¿Listo Para Agua Limpia en Cada Grifo?',
      ctaSubtitle: 'Transforme todo su hogar en el sur de Florida con filtración profesional para toda la casa',
      ctaButton: 'Obtenga Su Cotización Gratuita Hoy',
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: locale === 'en' ? 'Whole House Water Filtration Systems' : 'Sistemas de Filtración de Agua para Toda la Casa',
            description: t.subtitle,
            provider: {
              '@type': 'Organization',
              name: 'Aquaionic',
              url: 'https://aquaionic.us',
              telephone: '+1-305-467-1525',
            },
            areaServed: [
              { '@type': 'City', name: 'Miami' },
              { '@type': 'City', name: 'Boca Raton' },
              { '@type': 'City', name: 'Fort Lauderdale' },
              { '@type': 'City', name: 'West Palm Beach' },
            ],
            serviceType: 'Whole House Water Filtration',
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                      <div className="text-8xl mb-4 animate-float">🏠</div>
                      <div className="text-6xl font-jakarta font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-cyan mb-2">
                        100%
                      </div>
                      <div className="text-xl font-semibold text-ocean">
                        {locale === 'en' ? 'Home Coverage' : 'Cobertura Hogar'}
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
