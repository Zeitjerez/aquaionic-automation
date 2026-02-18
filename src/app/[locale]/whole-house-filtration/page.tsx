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
    return { title: defaultTitle, description: defaultDescription, keywords };
  }

  return {
    title: metadata.title || defaultTitle,
    description: metadata.description || defaultDescription,
    keywords: metadata.keywords || keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/en/whole-house-filtration/',
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
      title: 'Whole House',
      titleHighlight: 'Water Filtration',
      subtitle: 'Clean, filtered water from every tap, shower, and appliance in your South Florida home. Comprehensive point-of-entry filtration removes chlorine, sediment, chemicals, and contaminants throughout your entire house.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',

      stats: [
        { end: 100, suffix: '%', label: 'Home Coverage' },
        { end: 10, suffix: '+', label: 'Years Experience' },
        { end: 500, suffix: '+', label: 'Homes Protected' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],

      benefitsTitle: 'Why Choose',
      benefitsHighlight: 'Whole House Filtration',
      benefitsSubtitle: 'Professional whole-house water treatment systems for total home coverage in South Florida',
      benefits: [
        {
          title: 'Total Home Coverage',
          desc: 'Clean, filtered water from every faucet, shower, washing machine, dishwasher, and appliance throughout your entire home.',
        },
        {
          title: 'Healthier Living',
          desc: 'Remove chlorine, chemicals, sediment, and contaminants for healthier drinking, cooking, and bathing water throughout your home.',
        },
        {
          title: 'Protect Your Investment',
          desc: 'Extend the life of plumbing, appliances, and water heaters by filtering out damaging sediment and mineral deposits.',
        },
      ],

      featuresTitle: 'What Whole House Filtration',
      featuresHighlight: 'Removes',
      features: [
        'Chlorine & chloramines (taste, odor & health concerns)',
        'Sediment, sand & rust (protects plumbing & appliances)',
        'VOCs & chemicals (volatile organic compounds)',
        'Bad taste & odors (municipal water treatment byproducts)',
        'Scale & mineral deposits (extends appliance life)',
        'Iron & manganese (stops staining on fixtures)',
        'Turbidity & cloudiness (clear, clean water at every tap)',
        'Disinfection byproducts (THMs & HAAs)',
      ],

      processTitle: 'Our Simple',
      processHighlight: '4-Step Process',
      process: [
        { number: '01', title: 'Home Water Assessment', desc: 'Professional evaluation of your home\'s water quality and plumbing configuration' },
        { number: '02', title: 'System Design', desc: 'Custom filtration system sized for your home\'s flow rate and specific water issues' },
        { number: '03', title: 'Main Line Installation', desc: 'Expert installation at point-of-entry for complete whole-home coverage' },
        { number: '04', title: 'Filter Maintenance', desc: 'Simple filter changes every 6-12 months to maintain peak performance' },
      ],

      faqTitle: 'Frequently Asked',
      faqHighlight: 'Questions',
      faqs: [
        {
          q: 'What is whole house water filtration?',
          a: 'A whole house water filter (also called point-of-entry or POE system) treats all water entering your home at the main water line. This ensures every tap, shower, and appliance receives filtered water, unlike point-of-use filters that only treat specific faucets.',
        },
        {
          q: 'How much does a whole house water filter cost in Florida?',
          a: 'Whole house filtration systems typically range from $1,200-$3,500 installed, depending on home size and water quality issues. Systems include sediment pre-filter, carbon filter, and optional specialty filters. We offer free quotes and financing options.',
        },
        {
          q: 'Will a whole house filter reduce water pressure?',
          a: 'When properly sized for your home, whole house filters should not noticeably reduce water pressure. We size systems based on your home\'s peak flow rate (typically 10-15 GPM) to maintain adequate pressure throughout your home.',
        },
        {
          q: 'How often do whole house filters need replacement?',
          a: 'Sediment pre-filters: every 3-6 months. Main carbon filter: every 6-12 months. Filter life depends on water quality and usage. We provide maintenance reminders and can handle all filter changes for you.',
        },
      ],

      ctaTitle: 'Ready for Clean Water',
      ctaHighlight: 'From Every Tap?',
      ctaSubtitle: 'Transform your entire South Florida home with professional whole-house water filtration',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Protección Completa del Hogar',
      title: 'Filtración para',
      titleHighlight: 'Toda la Casa',
      subtitle: 'Agua limpia y filtrada en cada grifo, ducha y electrodoméstico de su hogar en el sur de Florida. Filtración integral en el punto de entrada elimina cloro, sedimentos, químicos y contaminantes en toda su casa.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',

      stats: [
        { end: 100, suffix: '%', label: 'Cobertura del Hogar' },
        { end: 10, suffix: '+', label: 'Años Experiencia' },
        { end: 500, suffix: '+', label: 'Hogares Protegidos' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],

      benefitsTitle: 'Por Qué Elegir',
      benefitsHighlight: 'Filtración para Toda la Casa',
      benefitsSubtitle: 'Sistemas profesionales de tratamiento de agua para cobertura total del hogar en el sur de Florida',
      benefits: [
        {
          title: 'Cobertura Total del Hogar',
          desc: 'Agua limpia y filtrada en cada grifo, ducha, lavadora, lavavajillas y electrodoméstico en toda su casa.',
        },
        {
          title: 'Vida Más Saludable',
          desc: 'Elimine cloro, químicos, sedimentos y contaminantes para agua más saludable para beber, cocinar y bañarse en toda su casa.',
        },
        {
          title: 'Proteja Su Inversión',
          desc: 'Extienda la vida de tuberías, electrodomésticos y calentadores de agua filtrando sedimentos dañinos y depósitos minerales.',
        },
      ],

      featuresTitle: 'Lo Que Elimina la Filtración',
      featuresHighlight: 'para Toda la Casa',
      features: [
        'Cloro y cloraminas (sabor, olor y preocupaciones de salud)',
        'Sedimentos, arena y óxido (protege tuberías y electrodomésticos)',
        'COVs y químicos (compuestos orgánicos volátiles)',
        'Mal sabor y olores (subproductos del tratamiento municipal)',
        'Depósitos de sarro y minerales (extiende vida de electrodomésticos)',
        'Hierro y manganeso (detiene manchas en accesorios)',
        'Turbidez y nubosidad (agua clara y limpia en cada grifo)',
        'Subproductos de desinfección (THMs y HAAs)',
      ],

      processTitle: 'Nuestro Simple',
      processHighlight: 'Proceso de 4 Pasos',
      process: [
        { number: '01', title: 'Evaluación del Agua del Hogar', desc: 'Evaluación profesional de la calidad del agua y configuración de tuberías de su hogar' },
        { number: '02', title: 'Diseño del Sistema', desc: 'Sistema de filtración personalizado dimensionado para el flujo y problemas de agua de su hogar' },
        { number: '03', title: 'Instalación en Línea Principal', desc: 'Instalación experta en el punto de entrada para cobertura completa del hogar' },
        { number: '04', title: 'Mantenimiento de Filtros', desc: 'Cambios simples de filtros cada 6-12 meses para mantener el máximo rendimiento' },
      ],

      faqTitle: 'Preguntas',
      faqHighlight: 'Frecuentes',
      faqs: [
        {
          q: '¿Qué es la filtración de agua para toda la casa?',
          a: 'Un filtro de agua para toda la casa (también llamado sistema de punto de entrada o POE) trata toda el agua que entra a su hogar en la línea principal. Esto asegura que cada grifo, ducha y electrodoméstico reciba agua filtrada, a diferencia de los filtros de punto de uso que solo tratan grifos específicos.',
        },
        {
          q: '¿Cuánto cuesta un filtro de agua para toda la casa en Florida?',
          a: 'Los sistemas de filtración para toda la casa típicamente varían de $1,200 a $3,500 instalados, dependiendo del tamaño del hogar y problemas de calidad del agua. Los sistemas incluyen prefiltro de sedimentos, filtro de carbón y filtros especiales opcionales. Ofrecemos cotizaciones gratuitas y opciones de financiamiento.',
        },
        {
          q: '¿Un filtro para toda la casa reducirá la presión del agua?',
          a: 'Cuando se dimensiona adecuadamente para su hogar, los filtros para toda la casa no deben reducir notablemente la presión del agua. Dimensionamos los sistemas según el flujo máximo de su hogar (típicamente 10-15 GPM) para mantener una presión adecuada en toda su casa.',
        },
        {
          q: '¿Con qué frecuencia necesitan reemplazo los filtros para toda la casa?',
          a: 'Prefiltros de sedimentos: cada 3-6 meses. Filtro principal de carbón: cada 6-12 meses. La vida del filtro depende de la calidad del agua y el uso. Proporcionamos recordatorios de mantenimiento y podemos manejar todos los cambios de filtro por usted.',
        },
      ],

      ctaTitle: '¿Listo Para Agua Limpia',
      ctaHighlight: 'en Cada Grifo?',
      ctaSubtitle: 'Transforme todo su hogar en el sur de Florida con filtración profesional para toda la casa',
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
            name: locale === 'en' ? 'Whole House Water Filtration Systems Florida' : 'Sistemas de Filtración de Agua para Toda la Casa Florida',
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

      {/* Hero Section */}
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
                  src="/images/services/water-testing.jpg"
                  alt="Whole house water filtration system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />

                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">
                    {locale === 'en' ? '100% Home Coverage' : 'Cobertura Total'}
                  </span>
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
              { icon: Droplets, label: locale === 'en' ? 'Free Water Analysis' : 'Análisis de Agua Gratis' },
              { icon: ShieldCheck, label: locale === 'en' ? 'NSF & FDA Certified' : 'Certificado NSF y FDA' },
              { icon: Wrench, label: locale === 'en' ? 'Professional Installation' : 'Instalación Profesional' },
              { icon: CheckCircle, label: locale === 'en' ? 'Lifetime Support' : 'Soporte de Por Vida' },
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
