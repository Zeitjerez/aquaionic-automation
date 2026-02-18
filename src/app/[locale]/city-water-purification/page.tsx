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
  const slug = locale === 'en' ? 'city-water-purification' : 'purificacion-agua-ciudad';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  const defaultTitle = locale === 'en'
    ? 'City Water Purification Systems Florida | Municipal Water Filtration | Aquaionic'
    : 'Sistemas de Purificación de Agua de Ciudad Florida | Filtración de Agua Municipal | Aquaionic';

  const defaultDescription = locale === 'en'
    ? 'Advanced city water purification systems in South Florida. Remove chlorine, chloramines, lead, PFAS & disinfection byproducts. Better tasting, healthier municipal water. NSF certified. Free water testing. Serving Miami, Boca Raton, Fort Lauderdale. Call (305) 467-1525.'
    : 'Sistemas avanzados de purificación de agua de ciudad en el sur de Florida. Elimine cloro, cloraminas, plomo, PFAS y subproductos de desinfección. Agua municipal más saludable y de mejor sabor. Certificado NSF. Análisis gratuito. Llame al (305) 467-1525.';

  const keywords = locale === 'en'
    ? 'city water purification Florida, municipal water filter, chlorine removal water, city water filter Miami, tap water filter Florida, chloramine removal, lead removal city water, PFAS removal Florida, drinking water filter, municipal water treatment'
    : 'purificación agua ciudad Florida, filtro agua municipal, eliminación cloro agua, filtro agua ciudad Miami, filtro agua grifo Florida, eliminación cloraminas, eliminación plomo agua ciudad, eliminación PFAS Florida, filtro agua potable, tratamiento agua municipal';

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
        'en': 'https://aquaionic.us/en/city-water-purification/',
        'es': 'https://aquaionic.us/es/purificacion-agua-ciudad/',
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
          url: 'https://aquaionic.us/images/og-city-water-purification.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'City Water Purification Systems Florida' : 'Sistemas de Purificación de Agua de Ciudad Florida',
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

export default function CityWaterPurificationPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'Municipal Water Treatment Specialists',
      title: 'City Water',
      titleHighlight: 'Purification',
      subtitle: 'Advanced filtration for South Florida municipal water. Remove chlorine, chloramines, lead, PFAS, and disinfection byproducts for better-tasting, healthier water from every tap in your home.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',

      stats: [
        { end: 99, suffix: '%', label: 'Chlorine Removal' },
        { end: 1000, suffix: '+', label: 'Contaminants Filtered' },
        { end: 10, suffix: '+', label: 'Years Experience' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],

      benefitsTitle: 'Better Than',
      benefitsHighlight: 'City Water',
      benefitsSubtitle: 'Professional filtration systems that go beyond what your municipality provides for truly clean water',
      benefits: [
        {
          title: 'Remove Chlorine & Chemicals',
          desc: 'Eliminate chlorine and chloramines that cause bad taste, unpleasant odor, and dry skin. Enjoy fresh, chemical-free water from every tap.',
        },
        {
          title: 'Filter Hidden Contaminants',
          desc: 'Remove disinfection byproducts, lead from aging pipes, PFAS "forever chemicals", and pharmaceuticals that municipal treatment misses.',
        },
        {
          title: 'Great Tasting Water',
          desc: 'Enjoy fresh, clean-tasting water for drinking, cooking, and ice making. No more buying expensive bottled water.',
        },
      ],

      featuresTitle: 'What City Water',
      featuresHighlight: 'Purification Removes',
      features: [
        'Chlorine & chloramines (taste, odor & health concerns)',
        'Disinfection byproducts — THMs & HAAs (cancer-linked)',
        'Lead & copper from aging plumbing & service lines',
        'Sediment & rust particles from distribution pipes',
        'Bad taste & odor from municipal treatment chemicals',
        'Volatile organic compounds / VOCs (industrial pollutants)',
        'Herbicides & pesticides (agricultural runoff)',
        'PFAS "forever chemicals" — PFOA, PFOS & emerging contaminants',
      ],

      processTitle: 'Our Simple',
      processHighlight: '4-Step Process',
      process: [
        { number: '01', title: 'Free Water Quality Test', desc: 'Analyze chlorine, chloramines, TDS, lead, and contaminants in your municipal water supply' },
        { number: '02', title: 'System Selection', desc: 'Choose from whole-house carbon filters, under-sink reverse osmosis, or UV treatment systems' },
        { number: '03', title: 'Professional Installation', desc: 'Expert point-of-entry or point-of-use installation with minimal disruption to your home' },
        { number: '04', title: 'Filter Maintenance', desc: 'Scheduled filter changes every 6-12 months for continued protection and peak performance' },
      ],

      faqTitle: 'Frequently Asked',
      faqHighlight: 'Questions',
      faqs: [
        {
          q: 'Is city water in Florida safe to drink straight from the tap?',
          a: 'Miami-Dade and Broward county water meets EPA standards, but still contains chlorine, chloramines, and disinfection byproducts that affect taste and long-term health. Our filtration systems improve safety and taste significantly beyond basic municipal treatment.',
        },
        {
          q: 'Why does my city water taste or smell like chlorine?',
          a: 'Water utilities add chlorine to kill bacteria during distribution. While effective for safety, chlorine and its byproducts (chloramines, THMs) create an unpleasant taste and odor. A whole-house carbon filter removes chlorine before it reaches your tap.',
        },
        {
          q: 'Does city water contain lead?',
          a: 'City water itself is typically lead-free at the treatment plant, but lead can leach from older pipes and plumbing fixtures inside homes, especially in buildings built before 1986. A reverse osmosis system is the most effective way to remove lead from drinking water.',
        },
        {
          q: 'How does city water treatment differ from well water treatment?',
          a: 'City water is pre-treated by the municipality but still contains chlorine, disinfection byproducts, and occasional contaminants. Well water typically requires more comprehensive treatment. City water filtration focuses primarily on improving taste, odor, and removing chemical treatment residuals.',
        },
      ],

      ctaTitle: 'Ready for Better',
      ctaHighlight: 'City Water?',
      ctaSubtitle: 'Upgrade your municipal water with professional filtration for healthier, better-tasting water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Especialistas en Tratamiento de Agua Municipal',
      title: 'Purificación de',
      titleHighlight: 'Agua de Ciudad',
      subtitle: 'Filtración avanzada para agua municipal del sur de Florida. Elimine cloro, cloraminas, plomo, PFAS y subproductos de desinfección para agua de mejor sabor y más saludable en cada grifo de su hogar.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',

      stats: [
        { end: 99, suffix: '%', label: 'Eliminación de Cloro' },
        { end: 1000, suffix: '+', label: 'Contaminantes Filtrados' },
        { end: 10, suffix: '+', label: 'Años Experiencia' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],

      benefitsTitle: 'Mejor Que el',
      benefitsHighlight: 'Agua de Ciudad',
      benefitsSubtitle: 'Sistemas de filtración profesionales que van más allá de lo que proporciona su municipio para agua verdaderamente limpia',
      benefits: [
        {
          title: 'Elimine Cloro y Químicos',
          desc: 'Elimine cloro y cloraminas que causan mal sabor, olor desagradable y piel seca. Disfrute de agua fresca y libre de químicos en cada grifo.',
        },
        {
          title: 'Filtre Contaminantes Ocultos',
          desc: 'Elimine subproductos de desinfección, plomo de tuberías viejas, PFAS "químicos permanentes" y farmacéuticos que el tratamiento municipal no elimina.',
        },
        {
          title: 'Agua de Excelente Sabor',
          desc: 'Disfrute de agua fresca y de sabor limpio para beber, cocinar y hacer hielo. Sin necesidad de comprar agua embotellada costosa.',
        },
      ],

      featuresTitle: 'Lo Que Elimina la Purificación',
      featuresHighlight: 'de Agua de Ciudad',
      features: [
        'Cloro y cloraminas (sabor, olor y preocupaciones de salud)',
        'Subproductos de desinfección — THMs y HAAs (vinculados al cáncer)',
        'Plomo y cobre de tuberías y líneas de servicio antiguas',
        'Sedimentos y partículas de óxido de tuberías de distribución',
        'Mal sabor y olor de los químicos del tratamiento municipal',
        'Compuestos orgánicos volátiles / COVs (contaminantes industriales)',
        'Herbicidas y pesticidas (escorrentía agrícola)',
        'PFAS "químicos permanentes" — PFOA, PFOS y contaminantes emergentes',
      ],

      processTitle: 'Nuestro Simple',
      processHighlight: 'Proceso de 4 Pasos',
      process: [
        { number: '01', title: 'Análisis de Calidad del Agua', desc: 'Analice cloro, cloraminas, TDS, plomo y contaminantes en su suministro de agua municipal' },
        { number: '02', title: 'Selección del Sistema', desc: 'Elija entre filtros de carbón para toda la casa, ósmosis inversa bajo fregadero o sistemas UV' },
        { number: '03', title: 'Instalación Profesional', desc: 'Instalación experta en punto de entrada o punto de uso con mínima interrupción en su hogar' },
        { number: '04', title: 'Mantenimiento de Filtros', desc: 'Cambios de filtros programados cada 6-12 meses para protección continua y máximo rendimiento' },
      ],

      faqTitle: 'Preguntas',
      faqHighlight: 'Frecuentes',
      faqs: [
        {
          q: '¿Es segura el agua de ciudad en Florida para beber directamente del grifo?',
          a: 'El agua de los condados de Miami-Dade y Broward cumple con los estándares de la EPA, pero todavía contiene cloro, cloraminas y subproductos de desinfección que afectan el sabor y la salud a largo plazo. Nuestros sistemas de filtración mejoran significativamente la seguridad y el sabor más allá del tratamiento municipal básico.',
        },
        {
          q: '¿Por qué mi agua de ciudad sabe u huele a cloro?',
          a: 'Las empresas de agua agregan cloro para matar bacterias durante la distribución. Aunque es efectivo para la seguridad, el cloro y sus subproductos (cloraminas, THMs) crean un sabor y olor desagradables. Un filtro de carbón para toda la casa elimina el cloro antes de que llegue a su grifo.',
        },
        {
          q: '¿El agua de ciudad contiene plomo?',
          a: 'El agua de ciudad en sí misma generalmente está libre de plomo en la planta de tratamiento, pero el plomo puede filtrarse de tuberías y accesorios de plomería más antiguos dentro de los hogares, especialmente en edificios construidos antes de 1986. Un sistema de ósmosis inversa es la forma más efectiva de eliminar el plomo del agua potable.',
        },
        {
          q: '¿En qué se diferencia el tratamiento de agua de ciudad del tratamiento de agua de pozo?',
          a: 'El agua de ciudad es pretratada por el municipio pero todavía contiene cloro, subproductos de desinfección y contaminantes ocasionales. El agua de pozo típicamente requiere un tratamiento más integral. La filtración de agua de ciudad se centra principalmente en mejorar el sabor, el olor y eliminar los residuos de tratamiento químico.',
        },
      ],

      ctaTitle: '¿Listo Para Mejor',
      ctaHighlight: 'Agua de Ciudad?',
      ctaSubtitle: 'Mejore su agua municipal con filtración profesional para agua más saludable y de mejor sabor',
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
            name: locale === 'en' ? 'City Water Purification Systems Florida' : 'Sistemas de Purificación de Agua de Ciudad Florida',
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
            serviceType: 'Municipal Water Purification',
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
                  src="/images/services/city-water.jpg"
                  alt="City water purification system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />

                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">
                    {locale === 'en' ? '99% Chlorine Removed' : '99% Cloro Eliminado'}
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
