import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Droplets, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

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
        'en': 'https://aquaionic.us/en/well-water-treatment/',
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
      // Hero
      badge: 'NSF & FDA Certified',
      title: 'Well Water Treatment',
      titleHighlight: 'Florida',
      subtitle: 'Professional well water treatment solutions for South Florida homes. Remove iron, sulfur, bacteria, and hard minerals with industry-leading filtration systems.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',

      // Stats
      stats: [
        { end: 99, suffix: '.9%', label: 'Contaminant Removal' },
        { end: 10, suffix: '+', label: 'Years Experience' },
        { end: 500, suffix: '+', label: 'Wells Treated' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],

      // Benefits
      benefitsTitle: 'Why Choose Our',
      benefitsHighlight: 'Well Water Systems',
      benefitsSubtitle: 'Professional-grade water treatment designed specifically for Florida well water problems',
      benefits: [
        {
          title: '99.9% Contaminant Removal',
          desc: 'Advanced multi-stage filtration removes iron, sulfur, bacteria, sediments, and harmful contaminants from your well water supply.',
        },
        {
          title: 'NSF/FDA Certified Systems',
          desc: 'All our well water treatment systems meet the highest industry standards for safety and performance in residential water treatment.',
        },
        {
          title: 'Lifetime Support & Warranty',
          desc: 'Free professional installation, maintenance training, and ongoing technical support for the life of your system.',
        },
      ],

      // Features
      featuresTitle: 'Common Well Water',
      featuresHighlight: 'Problems We Solve',
      features: [
        'Iron & rust removal (stops orange/red staining on fixtures)',
        'Hydrogen sulfide removal (eliminates rotten egg smell)',
        'Bacteria, E.coli & coliform elimination',
        'Hard water minerals (calcium & magnesium softening)',
        'Sediment, sand & turbidity filtration',
        'Low pH correction (acidic water neutralization)',
        'Manganese removal (stops black staining)',
        'Tannins removal (yellow/brown water discoloration)',
      ],

      // Process
      processTitle: 'Our Simple',
      processHighlight: '4-Step Process',
      process: [
        { number: '01', title: 'Free Water Analysis', desc: 'Professional well water testing to identify contaminants, minerals, and pH levels' },
        { number: '02', title: 'Custom System Design', desc: 'Engineering a treatment solution specific to your well water chemistry' },
        { number: '03', title: 'Professional Installation', desc: 'Expert setup of your filtration system with full training' },
        { number: '04', title: 'Ongoing Maintenance', desc: 'Regular filter changes and system monitoring for optimal performance' },
      ],

      // FAQ
      faqTitle: 'Frequently Asked',
      faqHighlight: 'Questions',
      faqs: [
        {
          q: 'How do I know if my well water needs treatment?',
          a: 'Common signs include rust stains, sulfur smell (rotten eggs), cloudy water, scale buildup, or metallic taste. We offer free water testing to analyze exactly what\'s in your well water.',
        },
        {
          q: 'How much does a well water treatment system cost in Florida?',
          a: 'Systems typically range from $1,500-$5,000 depending on your water quality issues and home size. We provide free quotes after testing your water.',
        },
        {
          q: 'How often do filters need replacement?',
          a: 'Most filters last 6-12 months depending on water usage and quality. We provide maintenance schedules and can handle all filter changes.',
        },
        {
          q: 'Will a treatment system remove bacteria from well water?',
          a: 'Yes, our systems include UV sterilization and filtration stages that eliminate 99.9% of bacteria, E.coli, and coliform from well water.',
        },
      ],

      // CTA
      ctaTitle: 'Ready for Clean, Safe',
      ctaHighlight: 'Well Water?',
      ctaSubtitle: 'Get your free professional water analysis today',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Certificado NSF y FDA',
      title: 'Tratamiento de Agua de Pozo',
      titleHighlight: 'Florida',
      subtitle: 'Soluciones profesionales de tratamiento de agua de pozo para hogares del sur de Florida. Elimine hierro, azufre, bacterias y minerales duros con sistemas de filtración líderes en la industria.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',

      stats: [
        { end: 99, suffix: '.9%', label: 'Eliminación Contaminantes' },
        { end: 10, suffix: '+', label: 'Años Experiencia' },
        { end: 500, suffix: '+', label: 'Pozos Tratados' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],

      benefitsTitle: 'Por Qué Elegir Nuestros',
      benefitsHighlight: 'Sistemas de Agua de Pozo',
      benefitsSubtitle: 'Tratamiento de agua de grado profesional diseñado específicamente para problemas de agua de pozo en Florida',
      benefits: [
        {
          title: '99.9% Eliminación de Contaminantes',
          desc: 'Filtración avanzada de múltiples etapas elimina hierro, azufre, bacterias, sedimentos y contaminantes dañinos de su suministro de agua de pozo.',
        },
        {
          title: 'Sistemas Certificados NSF/FDA',
          desc: 'Todos nuestros sistemas de tratamiento de agua de pozo cumplen con los más altos estándares de la industria para seguridad y rendimiento.',
        },
        {
          title: 'Soporte y Garantía de Por Vida',
          desc: 'Instalación profesional gratuita, capacitación de mantenimiento y soporte técnico continuo durante la vida de su sistema.',
        },
      ],

      featuresTitle: 'Problemas Comunes de Agua de Pozo',
      featuresHighlight: 'Que Resolvemos',
      features: [
        'Eliminación de hierro y óxido (detiene manchas naranjas/rojas en accesorios)',
        'Eliminación de sulfuro de hidrógeno (elimina olor a huevo podrido)',
        'Eliminación de bacterias, E.coli y coliformes',
        'Minerales de agua dura (ablandamiento de calcio y magnesio)',
        'Filtración de sedimentos, arena y turbidez',
        'Corrección de pH bajo (neutralización de agua ácida)',
        'Eliminación de manganeso (detiene manchas negras)',
        'Eliminación de taninos (decoloración amarilla/marrón del agua)',
      ],

      processTitle: 'Nuestro Simple',
      processHighlight: 'Proceso de 4 Pasos',
      process: [
        { number: '01', title: 'Análisis de Agua Gratuito', desc: 'Prueba profesional de agua de pozo para identificar contaminantes, minerales y niveles de pH' },
        { number: '02', title: 'Diseño de Sistema Personalizado', desc: 'Ingeniería de una solución de tratamiento específica para la química de su agua de pozo' },
        { number: '03', title: 'Instalación Profesional', desc: 'Configuración experta de su sistema de filtración con capacitación completa' },
        { number: '04', title: 'Mantenimiento Continuo', desc: 'Cambios regulares de filtros y monitoreo del sistema para un rendimiento óptimo' },
      ],

      faqTitle: 'Preguntas',
      faqHighlight: 'Frecuentes',
      faqs: [
        {
          q: '¿Cómo sé si mi agua de pozo necesita tratamiento?',
          a: 'Señales comunes incluyen manchas de óxido, olor a azufre (huevos podridos), agua turbia, acumulación de sarro o sabor metálico. Ofrecemos análisis de agua gratuitos para analizar exactamente qué hay en su agua de pozo.',
        },
        {
          q: '¿Cuánto cuesta un sistema de tratamiento de agua de pozo en Florida?',
          a: 'Los sistemas típicamente varían de $1,500 a $5,000 dependiendo de los problemas de calidad del agua y el tamaño de su hogar. Proporcionamos cotizaciones gratuitas después de analizar su agua.',
        },
        {
          q: '¿Con qué frecuencia necesitan reemplazo los filtros?',
          a: 'La mayoría de los filtros duran de 6 a 12 meses dependiendo del uso y calidad del agua. Proporcionamos programas de mantenimiento y podemos manejar todos los cambios de filtro.',
        },
        {
          q: '¿Un sistema de tratamiento eliminará bacterias del agua de pozo?',
          a: 'Sí, nuestros sistemas incluyen esterilización UV y etapas de filtración que eliminan el 99.9% de bacterias, E.coli y coliformes del agua de pozo.',
        },
      ],

      ctaTitle: '¿Listo Para Agua de Pozo',
      ctaHighlight: 'Limpia y Segura?',
      ctaSubtitle: 'Obtenga su análisis profesional de agua gratuito hoy',
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
            },
            areaServed: [
              { '@type': 'City', name: 'Miami' },
              { '@type': 'City', name: 'Boca Raton' },
              { '@type': 'City', name: 'Fort Lauderdale' },
              { '@type': 'City', name: 'West Palm Beach' },
            ],
            description: t.subtitle,
            serviceType: 'Well Water Treatment',
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
            mainEntity: t.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Hero Section - Style matching home */}
      <section className="relative min-h-[85vh] flex items-center bg-white pt-[72px]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-[13px] font-semibold text-cyan mb-8">
                  {t.badge}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-bold text-deep-blue mb-6 leading-tight tracking-tight">
                  {t.title}
                  <br />
                  <span className="text-cyan">{t.titleHighlight}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
                  {t.subtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-4 mb-16">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan text-white font-semibold text-[15px] rounded-xl hover:bg-cyan-soft transition-colors duration-200 animate-breathe"
                  >
                    {t.ctaPrimary}
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>

                  <a
                    href="tel:+13054671525"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border-2 border-gray-200 text-deep-blue font-semibold text-[15px] rounded-xl hover:border-cyan hover:text-cyan transition-colors duration-200"
                  >
                    {t.ctaSecondary}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {t.stats.map((stat, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <div className="text-3xl md:text-4xl font-jakarta font-extrabold text-deep-blue tracking-tight">
                        <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                      </div>
                      <div className="text-[11px] font-semibold text-text-light uppercase tracking-[0.08em] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Image */}
            <ScrollReveal delay={0.2} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/services/well-water.jpg"
                  alt="Well water treatment system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />

                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">99.9% Effective</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 md:py-10 bg-ghost">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Droplets, label: 'Free Water Analysis' },
              { icon: ShieldCheck, label: 'NSF & FDA Certified' },
              { icon: Wrench, label: 'Professional Installation' },
              { icon: CheckCircle, label: 'Lifetime Support' },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-gray-100 hover:border-cyan/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/15 transition-colors duration-200">
                  <item.icon size={24} className="text-cyan" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-semibold text-deep-blue text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.benefitsTitle}{' '}
                <span className="text-cyan">{t.benefitsHighlight}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[17px] text-gray-600 leading-relaxed">
                {t.benefitsSubtitle}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors duration-200 p-7">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-5">
                    <CheckCircle size={22} className="text-cyan" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-[19px] font-jakarta font-bold text-deep-blue mb-3 tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-[14.5px] text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.featuresTitle}{' '}
                <span className="text-cyan">{t.featuresHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {t.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-5 bg-white rounded-xl border border-gray-100">
                  <CheckCircle size={20} className="text-cyan flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[14.5px] text-gray-600 leading-relaxed">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.processTitle}{' '}
                <span className="text-cyan">{t.processHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-gray-200 transition-colors duration-200">
                  <div className="text-5xl font-jakarta font-extrabold text-cyan/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-[17px] font-jakarta font-bold text-deep-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.faqTitle}{' '}
                <span className="text-cyan">{t.faqHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {t.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-gray-200 transition-colors duration-200">
                  <h3 className="text-[17px] font-jakarta font-bold text-deep-blue mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-[14.5px] text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-blue to-ocean text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold mb-4 tracking-tight">
              {t.ctaTitle}{' '}
              <span className="text-cyan-soft">{t.ctaHighlight}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-deep-blue font-semibold text-[15px] rounded-xl hover:bg-cyan-soft hover:text-white transition-all duration-200 animate-breathe"
            >
              {t.ctaButton}
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
