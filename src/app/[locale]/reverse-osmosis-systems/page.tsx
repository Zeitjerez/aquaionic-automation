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
  const slug = locale === 'en' ? 'reverse-osmosis-systems' : 'sistemas-osmosis-inversa';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  const defaultTitle = locale === 'en'
    ? 'Reverse Osmosis Systems Florida | RO Water Filters | Drinking Water Purification | Aquaionic'
    : 'Sistemas de Ósmosis Inversa Florida | Filtros de Agua RO | Purificación de Agua Potable | Aquaionic';

  const defaultDescription = locale === 'en'
    ? '5-stage reverse osmosis water systems in South Florida. Remove 99% of contaminants: lead, chlorine, fluoride, PFAS. NSF certified. Free installation. Serving Miami, Boca Raton, Fort Lauderdale. Call (305) 467-1525.'
    : 'Sistemas de ósmosis inversa de 5 etapas en el sur de Florida. Elimine el 99% de contaminantes: plomo, cloro, fluoruro, PFAS. Certificado NSF. Instalación gratuita. Sirviendo Miami, Boca Ratón, Fort Lauderdale. Llame al (305) 467-1525.';

  const keywords = locale === 'en'
    ? 'reverse osmosis system Florida, RO water filter, drinking water purification, under sink water filter, lead removal, fluoride removal, PFAS removal, TDS reduction, reverse osmosis installation Miami, South Florida water purification'
    : 'sistema ósmosis inversa Florida, filtro agua RO, purificación agua potable, filtro agua bajo fregadero, eliminación plomo, eliminación fluoruro, eliminación PFAS, reducción TDS, instalación ósmosis inversa Miami, purificación agua sur Florida';

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
        'en': 'https://aquaionic.us/en/reverse-osmosis-systems/',
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
      title: 'Reverse Osmosis',
      titleHighlight: 'Water Systems',
      subtitle: 'The purest drinking water for your South Florida home. Advanced 5-stage RO technology removes 99% of contaminants including lead, chlorine, fluoride, PFAS, and pharmaceuticals. Under-sink and whole-house systems available.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',

      stats: [
        { end: 99, suffix: '%', label: 'Contaminant Removal' },
        { end: 5, suffix: '-Stage', label: 'RO Filtration' },
        { end: 1000, suffix: '+', label: 'Contaminants Removed' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],

      benefitsTitle: 'Why Choose',
      benefitsHighlight: 'Reverse Osmosis',
      benefitsSubtitle: 'NSF/FDA certified RO systems for the purest, healthiest drinking water in Florida',
      benefits: [
        {
          title: 'Purest Water Available',
          desc: 'Advanced 5-stage filtration removes up to 99% of dissolved solids, heavy metals, and over 1,000 contaminants from your drinking water.',
        },
        {
          title: 'Great Taste & Odor',
          desc: 'Remove chlorine, chemicals, and impurities that affect the taste and smell of your drinking water. Crystal-clear, refreshing water from every tap.',
        },
        {
          title: 'Cost Effective & Eco-Friendly',
          desc: 'Stop buying expensive bottled water. Save thousands annually while reducing plastic waste and protecting the environment.',
        },
      ],

      featuresTitle: 'What Reverse Osmosis',
      featuresHighlight: 'Removes',
      features: [
        'Lead, arsenic & heavy metals (up to 99% reduction)',
        'Chlorine & chloramines (taste & odor removal)',
        'Fluoride & pharmaceuticals (medication residues)',
        'Bacteria, viruses & cysts (E.coli, Giardia)',
        'Nitrates & pesticides (agricultural contaminants)',
        'Total Dissolved Solids / TDS (minerals & salts)',
        'PFAS "forever chemicals" (PFOA, PFOS)',
        'Microplastics & nanoparticles (invisible contaminants)',
      ],

      processTitle: 'Our Simple',
      processHighlight: '4-Step Process',
      process: [
        { number: '01', title: 'Free Water Testing', desc: 'Professional TDS and contaminant analysis to determine your water quality and system needs' },
        { number: '02', title: 'System Selection', desc: 'Choose between under-sink or whole-house RO based on your specific water quality and budget' },
        { number: '03', title: 'Professional Installation', desc: 'Expert setup with minimal disruption, typically completed in 2-3 hours with full training' },
        { number: '04', title: 'Filter Maintenance', desc: 'Scheduled filter changes every 6-12 months to maintain peak performance and water purity' },
      ],

      faqTitle: 'Frequently Asked',
      faqHighlight: 'Questions',
      faqs: [
        {
          q: 'How does reverse osmosis work?',
          a: 'Reverse osmosis uses a semi-permeable membrane to remove dissolved solids and contaminants from water. Water is forced through the membrane under pressure, leaving impurities behind. This process removes 95-99% of contaminants.',
        },
        {
          q: 'How much does a reverse osmosis system cost in Florida?',
          a: 'Under-sink RO systems typically cost $400-$800 installed. Whole-house systems range from $2,500-$5,000. We offer free quotes and financing options. Most systems pay for themselves within 1-2 years compared to bottled water costs.',
        },
        {
          q: 'Does reverse osmosis remove healthy minerals?',
          a: 'Yes, RO removes most minerals. However, you get minerals from food, not water. Many customers prefer to add a remineralization filter to balance pH and add beneficial minerals back to the water.',
        },
        {
          q: 'How often do RO filters need replacement?',
          a: 'Pre-filters: every 6-12 months. RO membrane: every 2-3 years. Post-filters: every 12 months. We provide full maintenance service and send reminders when filters need changing.',
        },
      ],

      ctaTitle: 'Ready for the Purest',
      ctaHighlight: 'Drinking Water?',
      ctaSubtitle: 'Get crystal-clear, great-tasting water from every tap in your South Florida home',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Certificado NSF - 99% Eliminación de Contaminantes',
      title: 'Ósmosis Inversa',
      titleHighlight: 'Sistemas de Agua',
      subtitle: 'El agua potable más pura para su hogar en el sur de Florida. Tecnología RO avanzada de 5 etapas elimina el 99% de contaminantes incluyendo plomo, cloro, fluoruro, PFAS y farmacéuticos. Sistemas bajo fregadero y para toda la casa disponibles.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',

      stats: [
        { end: 99, suffix: '%', label: 'Eliminación Contaminantes' },
        { end: 5, suffix: ' Etapas', label: 'Filtración RO' },
        { end: 1000, suffix: '+', label: 'Contaminantes Eliminados' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],

      benefitsTitle: 'Por Qué Elegir',
      benefitsHighlight: 'Ósmosis Inversa',
      benefitsSubtitle: 'Sistemas RO certificados NSF/FDA para el agua potable más pura y saludable en Florida',
      benefits: [
        {
          title: 'Agua Más Pura Disponible',
          desc: 'Filtración avanzada de 5 etapas elimina hasta el 99% de sólidos disueltos, metales pesados y más de 1,000 contaminantes de su agua potable.',
        },
        {
          title: 'Excelente Sabor y Olor',
          desc: 'Elimine cloro, químicos e impurezas que afectan el sabor y olor de su agua potable. Agua cristalina y refrescante en cada grifo.',
        },
        {
          title: 'Económico y Ecológico',
          desc: 'Deje de comprar agua embotellada costosa. Ahorre miles anualmente mientras reduce los residuos plásticos y protege el medio ambiente.',
        },
      ],

      featuresTitle: 'Lo Que Elimina la',
      featuresHighlight: 'Ósmosis Inversa',
      features: [
        'Plomo, arsénico y metales pesados (hasta 99% de reducción)',
        'Cloro y cloraminas (eliminación de sabor y olor)',
        'Fluoruro y farmacéuticos (residuos de medicamentos)',
        'Bacterias, virus y quistes (E.coli, Giardia)',
        'Nitratos y pesticidas (contaminantes agrícolas)',
        'Sólidos Disueltos Totales / TDS (minerales y sales)',
        'PFAS "químicos permanentes" (PFOA, PFOS)',
        'Microplásticos y nanopartículas (contaminantes invisibles)',
      ],

      processTitle: 'Nuestro Simple',
      processHighlight: 'Proceso de 4 Pasos',
      process: [
        { number: '01', title: 'Análisis de Agua Gratuito', desc: 'Análisis profesional de TDS y contaminantes para determinar la calidad del agua y las necesidades del sistema' },
        { number: '02', title: 'Selección del Sistema', desc: 'Elija entre RO bajo fregadero o para toda la casa según su calidad de agua y presupuesto' },
        { number: '03', title: 'Instalación Profesional', desc: 'Configuración experta con mínima interrupción, típicamente completada en 2-3 horas con capacitación completa' },
        { number: '04', title: 'Mantenimiento de Filtros', desc: 'Cambios de filtros programados cada 6-12 meses para mantener el máximo rendimiento y pureza del agua' },
      ],

      faqTitle: 'Preguntas',
      faqHighlight: 'Frecuentes',
      faqs: [
        {
          q: '¿Cómo funciona la ósmosis inversa?',
          a: 'La ósmosis inversa usa una membrana semipermeable para eliminar sólidos disueltos y contaminantes del agua. El agua se fuerza a través de la membrana bajo presión, dejando atrás las impurezas. Este proceso elimina del 95-99% de los contaminantes.',
        },
        {
          q: '¿Cuánto cuesta un sistema de ósmosis inversa en Florida?',
          a: 'Los sistemas RO bajo fregadero típicamente cuestan $400-$800 instalados. Los sistemas para toda la casa varían de $2,500 a $5,000. Ofrecemos cotizaciones gratuitas y opciones de financiamiento. La mayoría de los sistemas se pagan solos en 1-2 años comparado con el agua embotellada.',
        },
        {
          q: '¿La ósmosis inversa elimina minerales saludables?',
          a: 'Sí, la RO elimina la mayoría de los minerales. Sin embargo, obtienes minerales de los alimentos, no del agua. Muchos clientes prefieren agregar un filtro de remineralización para equilibrar el pH y añadir minerales beneficiosos al agua.',
        },
        {
          q: '¿Con qué frecuencia necesitan reemplazo los filtros RO?',
          a: 'Pre-filtros: cada 6-12 meses. Membrana RO: cada 2-3 años. Post-filtros: cada 12 meses. Proporcionamos servicio completo de mantenimiento y enviamos recordatorios cuando los filtros necesitan cambio.',
        },
      ],

      ctaTitle: '¿Listo Para el Agua Potable',
      ctaHighlight: 'Más Pura?',
      ctaSubtitle: 'Obtenga agua cristalina y de excelente sabor en cada grifo de su hogar en el sur de Florida',
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
            name: locale === 'en' ? 'Reverse Osmosis Water Systems Florida' : 'Sistemas de Ósmosis Inversa Florida',
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
            serviceType: 'Reverse Osmosis Water Filtration',
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

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aquaionic.us/en/' },
              { '@type': 'ListItem', position: 2, name: 'Reverse Osmosis Systems', item: 'https://aquaionic.us/en/reverse-osmosis-systems/' },
            ],
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
                  src="/images/services/reverse-osmosis.jpg"
                  alt="Reverse osmosis water filtration system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />

                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">
                    {locale === 'en' ? '5-Stage RO System' : 'Sistema RO de 5 Etapas'}
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
