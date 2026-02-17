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

  const defaultTitle = locale === 'en'
    ? 'Well Water Treatment Systems Florida | Iron & Sulfur Removal | Aquaionic'
    : 'Sistemas de Tratamiento de Agua de Pozo Florida | Eliminación de Hierro y Azufre | Aquaionic';

  const defaultDescription = locale === 'en'
    ? 'Professional well water treatment systems in South Florida. Remove iron, sulfur, bacteria & hard minerals. NSF/FDA certified. Free water testing. Serving Miami, Boca Raton, Fort Lauderdale & Palm Beach. Call (305) 467-1525.'
    : 'Sistemas profesionales de tratamiento de agua de pozo en el sur de Florida. Elimine hierro, azufre, bacterias y minerales duros. Certificado NSF/FDA. Análisis de agua gratuito. Sirviendo Miami, Boca Ratón, Fort Lauderdale y Palm Beach. Llame al (305) 467-1525.';

  const keywords = locale === 'en'
    ? 'well water treatment Florida, well water filtration system, iron removal well water, sulfur removal well water, well water purification, bacteria removal well water, hard water treatment, well water testing Florida, Miami well water treatment, South Florida water treatment'
    : 'tratamiento agua de pozo Florida, sistema filtración agua de pozo, eliminación hierro agua de pozo, eliminación azufre agua de pozo, purificación agua de pozo, eliminación bacterias agua de pozo, tratamiento agua dura, análisis agua de pozo Florida, tratamiento agua de pozo Miami, tratamiento agua sur Florida';

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
        'en': 'https://aquaionic.us/well-water-treatment/',
        'es': 'https://aquaionic.us/es/tratamiento-agua-de-pozo/',
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
          url: 'https://aquaionic.us/images/og-well-water-treatment.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'Well Water Treatment Systems Florida' : 'Sistemas de Tratamiento de Agua de Pozo Florida',
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

export default function WellWaterTreatmentPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'NSF & FDA Certified Solutions',
      title: 'Well Water Treatment Systems Florida',
      highlight: 'Clean & Safe',
      subtitle: 'Professional well water treatment solutions for South Florida homes. Remove iron, sulfur, bacteria, and hard minerals with industry-leading filtration systems. Serving Miami, Boca Raton, Fort Lauderdale & Palm Beach.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',

      // Benefits Section
      benefitsLabel: 'Why Choose Aquaionic',
      benefitsTitle: 'Florida Well Water Treatment Experts',
      benefitsSubtitle: 'Professional-grade water treatment solutions designed specifically for Florida well water problems',
      benefit1Title: '99.9% Contaminant Removal',
      benefit1Text: 'Advanced multi-stage filtration removes iron, sulfur, bacteria, sediments, and harmful contaminants from your well water supply.',
      benefit2Title: 'NSF/FDA Certified Systems',
      benefit2Text: 'All our well water treatment systems meet the highest industry standards for safety and performance in residential water treatment.',
      benefit3Title: 'Lifetime Support & Warranty',
      benefit3Text: 'Free professional installation, maintenance training, and ongoing technical support for the life of your system.',

      // Process Section
      processLabel: 'Our Process',
      processTitle: 'How Our Well Water Treatment Works',
      processStep1: 'Free Water Analysis',
      processDesc1: 'Professional well water testing to identify contaminants, minerals, and pH levels',
      processStep2: 'Custom System Design',
      processDesc2: 'Engineering a treatment solution specific to your well water chemistry',
      processStep3: 'Professional Installation',
      processDesc3: 'Expert setup of your filtration system with full training',
      processStep4: 'Ongoing Maintenance',
      processDesc4: 'Regular filter changes and system monitoring for optimal performance',

      // Features Section
      featuresTitle: 'Common Well Water Problems We Solve',
      featuresSubtitle: 'Comprehensive treatment for all Florida well water issues',
      feature1: 'Iron & rust removal (stops orange/red staining on fixtures)',
      feature2: 'Hydrogen sulfide removal (eliminates rotten egg smell)',
      feature3: 'Bacteria, E.coli & coliform elimination',
      feature4: 'Hard water minerals (calcium & magnesium softening)',
      feature5: 'Sediment, sand & turbidity filtration',
      feature6: 'Low pH correction (acidic water neutralization)',
      feature7: 'Manganese removal (stops black staining)',
      feature8: 'Tannins removal (yellow/brown water discoloration)',

      // FAQ Section
      faqLabel: 'Common Questions',
      faqTitle: 'Well Water Treatment FAQs',
      faq1Q: 'How do I know if my well water needs treatment?',
      faq1A: 'Common signs include rust stains, sulfur smell (rotten eggs), cloudy water, scale buildup, or metallic taste. We offer free water testing to analyze exactly what\'s in your well water.',
      faq2Q: 'How much does a well water treatment system cost in Florida?',
      faq2A: 'Systems typically range from $1,500-$5,000 depending on your water quality issues and home size. We provide free quotes after testing your water.',
      faq3Q: 'How often do filters need replacement?',
      faq3A: 'Most filters last 6-12 months depending on water usage and quality. We provide maintenance schedules and can handle all filter changes.',
      faq4Q: 'Will a treatment system remove bacteria from well water?',
      faq4A: 'Yes, our systems include UV sterilization and filtration stages that eliminate 99.9% of bacteria, E.coli, and coliform from well water.',

      // CTA Section
      ctaTitle: 'Ready for Clean, Safe Well Water?',
      ctaSubtitle: 'Get your free professional water analysis today and discover exactly what\'s in your South Florida well water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Soluciones Certificadas NSF y FDA',
      title: 'Sistemas de Tratamiento de Agua de Pozo Florida',
      highlight: 'Limpia y Segura',
      subtitle: 'Soluciones profesionales de tratamiento de agua de pozo para hogares del sur de Florida. Elimine hierro, azufre, bacterias y minerales duros con sistemas de filtración líderes. Sirviendo Miami, Boca Ratón, Fort Lauderdale y Palm Beach.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',

      // Benefits Section
      benefitsLabel: 'Por Qué Elegir Aquaionic',
      benefitsTitle: 'Expertos en Tratamiento de Agua de Pozo en Florida',
      benefitsSubtitle: 'Soluciones de tratamiento de agua de grado profesional diseñadas específicamente para problemas de agua de pozo en Florida',
      benefit1Title: '99.9% Eliminación de Contaminantes',
      benefit1Text: 'Filtración avanzada de múltiples etapas elimina hierro, azufre, bacterias, sedimentos y contaminantes dañinos de su suministro de agua de pozo.',
      benefit2Title: 'Sistemas Certificados NSF/FDA',
      benefit2Text: 'Todos nuestros sistemas de tratamiento de agua de pozo cumplen con los más altos estándares de la industria para seguridad y rendimiento.',
      benefit3Title: 'Soporte y Garantía de Por Vida',
      benefit3Text: 'Instalación profesional gratuita, capacitación de mantenimiento y soporte técnico continuo durante la vida de su sistema.',

      // Process Section
      processLabel: 'Nuestro Proceso',
      processTitle: 'Cómo Funciona Nuestro Tratamiento de Agua de Pozo',
      processStep1: 'Análisis de Agua Gratuito',
      processDesc1: 'Prueba profesional de agua de pozo para identificar contaminantes, minerales y niveles de pH',
      processStep2: 'Diseño de Sistema Personalizado',
      processDesc2: 'Ingeniería de una solución de tratamiento específica para la química de su agua de pozo',
      processStep3: 'Instalación Profesional',
      processDesc3: 'Configuración experta de su sistema de filtración con capacitación completa',
      processStep4: 'Mantenimiento Continuo',
      processDesc4: 'Cambios regulares de filtros y monitoreo del sistema para un rendimiento óptimo',

      // Features Section
      featuresTitle: 'Problemas Comunes de Agua de Pozo Que Resolvemos',
      featuresSubtitle: 'Tratamiento integral para todos los problemas de agua de pozo en Florida',
      feature1: 'Eliminación de hierro y óxido (detiene manchas naranjas/rojas en accesorios)',
      feature2: 'Eliminación de sulfuro de hidrógeno (elimina olor a huevo podrido)',
      feature3: 'Eliminación de bacterias, E.coli y coliformes',
      feature4: 'Minerales de agua dura (ablandamiento de calcio y magnesio)',
      feature5: 'Filtración de sedimentos, arena y turbidez',
      feature6: 'Corrección de pH bajo (neutralización de agua ácida)',
      feature7: 'Eliminación de manganeso (detiene manchas negras)',
      feature8: 'Eliminación de taninos (decoloración amarilla/marrón del agua)',

      // FAQ Section
      faqLabel: 'Preguntas Frecuentes',
      faqTitle: 'Preguntas Sobre Tratamiento de Agua de Pozo',
      faq1Q: '¿Cómo sé si mi agua de pozo necesita tratamiento?',
      faq1A: 'Señales comunes incluyen manchas de óxido, olor a azufre (huevos podridos), agua turbia, acumulación de sarro o sabor metálico. Ofrecemos análisis de agua gratuitos para analizar exactamente qué hay en su agua de pozo.',
      faq2Q: '¿Cuánto cuesta un sistema de tratamiento de agua de pozo en Florida?',
      faq2A: 'Los sistemas típicamente varían de $1,500 a $5,000 dependiendo de los problemas de calidad del agua y el tamaño de su hogar. Proporcionamos cotizaciones gratuitas después de analizar su agua.',
      faq3Q: '¿Con qué frecuencia necesitan reemplazo los filtros?',
      faq3A: 'La mayoría de los filtros duran de 6 a 12 meses dependiendo del uso y calidad del agua. Proporcionamos programas de mantenimiento y podemos manejar todos los cambios de filtro.',
      faq4Q: '¿Un sistema de tratamiento eliminará bacterias del agua de pozo?',
      faq4A: 'Sí, nuestros sistemas incluyen esterilización UV y etapas de filtración que eliminan el 99.9% de bacterias, E.coli y coliformes del agua de pozo.',

      // CTA Section
      ctaTitle: '¿Listo Para Agua de Pozo Limpia y Segura?',
      ctaSubtitle: 'Obtenga su análisis profesional de agua gratuito hoy y descubra exactamente qué hay en su agua de pozo del sur de Florida',
      ctaButton: 'Programar Análisis Gratuito',
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
            name: locale === 'en' ? 'Well Water Treatment Systems Florida' : 'Sistemas de Tratamiento de Agua de Pozo Florida',
            provider: {
              '@type': 'Organization',
              name: 'Aquaionic',
              url: 'https://aquaionic.us',
              telephone: '+1-305-467-1525',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'FL',
                addressCountry: 'US',
              },
            },
            areaServed: [
              {
                '@type': 'City',
                name: 'Miami',
              },
              {
                '@type': 'City',
                name: 'Boca Raton',
              },
              {
                '@type': 'City',
                name: 'Fort Lauderdale',
              },
              {
                '@type': 'City',
                name: 'West Palm Beach',
              },
            ],
            description: t.subtitle,
            serviceType: 'Well Water Treatment',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Well Water Treatment Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Iron Removal',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Sulfur Removal',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Bacteria Treatment',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema - For Featured Snippets */}
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
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title.split(t.highlight)[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-accent-green">
                  {t.highlight}
                </span>
                {t.title.includes(t.highlight) ? '' : ''}
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
              {/* Step 1 */}
              <div className="relative group">
                {/* Connector line */}
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan to-transparent" />
                <div className="bg-ghost rounded-2xl p-8 h-full border border-border hover:border-cyan hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-jakarta font-extrabold text-cyan/30 mb-4">01</div>
                  <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-2">
                    {t.processStep1}
                  </h3>
                  <p className="text-text-mid">{t.processDesc1}</p>
                </div>
              </div>

              {/* Step 2 */}
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

              {/* Step 3 */}
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

              {/* Step 4 */}
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

        {/* FAQ Section - Optimized for Featured Snippets & AI */}
        <section className="section-padding bg-ghost">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">{t.faqLabel}</span>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue">
                {t.faqTitle}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-2xl p-8 border border-border hover:border-cyan transition-all duration-300">
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.faq1Q}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.faq1A}
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-2xl p-8 border border-border hover:border-cyan transition-all duration-300">
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.faq2Q}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.faq2A}
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-2xl p-8 border border-border hover:border-cyan transition-all duration-300">
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.faq3Q}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.faq3A}
                </p>
              </div>

              {/* FAQ 4 */}
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
