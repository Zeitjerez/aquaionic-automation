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
  const slug = locale === 'en' ? 'hard-water-solutions' : 'soluciones-agua-dura';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  const defaultTitle = locale === 'en'
    ? 'Hard Water Solutions Florida | Water Softeners | Scale & Mineral Removal | Aquaionic'
    : 'Soluciones para Agua Dura Florida | Ablandadores de Agua | Eliminación de Sarro | Aquaionic';

  const defaultDescription = locale === 'en'
    ? 'Professional water softeners and hard water solutions in South Florida. Remove calcium, magnesium & scale. Softer skin, cleaner dishes, longer appliance life. NSF certified. Free water hardness testing. Serving Miami, Boca Raton, Fort Lauderdale. Call (305) 467-1525.'
    : 'Ablandadores de agua profesionales y soluciones para agua dura en el sur de Florida. Elimine calcio, magnesio y sarro. Piel más suave, platos más limpios, mayor vida útil de electrodomésticos. Certificado NSF. Análisis de dureza gratuito. Llame al (305) 467-1525.';

  const keywords = locale === 'en'
    ? 'hard water solutions Florida, water softener Florida, scale removal water, calcium removal water, magnesium water treatment, water softener installation Miami, hard water skin problems, water softener cost Florida, salt free water softener, scale buildup pipes'
    : 'soluciones agua dura Florida, ablandador agua Florida, eliminación sarro agua, eliminación calcio agua, tratamiento magnesio agua, instalación ablandador Miami, problemas piel agua dura, costo ablandador Florida, ablandador agua sin sal, acumulación sarro tuberías';

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
        'en': 'https://aquaionic.us/en/hard-water-solutions/',
        'es': 'https://aquaionic.us/es/soluciones-agua-dura/',
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
          url: 'https://aquaionic.us/images/og-hard-water-solutions.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'Hard Water Solutions Florida' : 'Soluciones para Agua Dura Florida',
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

export default function HardWaterSolutionsPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'Save Money & Protect Your Home',
      title: 'Hard Water',
      titleHighlight: 'Solutions',
      subtitle: 'Professional water softeners that remove calcium and magnesium, protecting your plumbing, appliances, and family. Enjoy softer skin, cleaner dishes, and extend the life of everything water touches in your home.',
      ctaPrimary: 'Get Free Hardness Test',
      ctaSecondary: 'Call (305) 467-1525',

      stats: [
        { end: 30, suffix: '%', label: 'Energy Bill Savings' },
        { end: 3, suffix: 'x', label: 'Longer Appliance Life' },
        { end: 10, suffix: '+', label: 'Years Experience' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],

      benefitsTitle: 'Transform Your',
      benefitsHighlight: 'Water Quality',
      benefitsSubtitle: 'Say goodbye to scale buildup and hello to soft, luxurious water throughout your South Florida home',
      benefits: [
        {
          title: 'Softer Skin & Hair',
          desc: 'No more dry, itchy skin or brittle hair. Soft water helps your skin retain moisture and makes your hair silky smooth after every shower.',
        },
        {
          title: 'Save on Energy Bills',
          desc: 'Scale-free appliances and water heaters run up to 30% more efficiently. Save significantly on energy costs every month.',
        },
        {
          title: 'Extend Appliance Life',
          desc: 'Protect your water heater, dishwasher, and washing machine from damaging scale buildup and extend their lifespan by 2-3 times.',
        },
      ],

      featuresTitle: 'Hard Water Problems',
      featuresHighlight: 'We Solve',
      features: [
        'White scale buildup on faucets, showerheads & fixtures',
        'Dry, itchy skin and brittle hair after showering',
        'Water spots and film on dishes, glassware & surfaces',
        'Soap and shampoo don\'t lather well (soap scum)',
        'Stiff, dingy laundry & towels that wear out faster',
        'Clogged pipes & reduced water flow from scale buildup',
        'Shortened appliance lifespan (water heaters, dishwashers)',
        'High energy bills from scale-coated water heaters',
      ],

      processTitle: 'Our Simple',
      processHighlight: '4-Step Process',
      process: [
        { number: '01', title: 'Free Hardness Test', desc: 'Measure calcium, magnesium, and mineral content in your water supply to determine exact hardness level' },
        { number: '02', title: 'Softener Selection', desc: 'Choose the right size salt-based or salt-free water softener for your home size and water usage' },
        { number: '03', title: 'Professional Installation', desc: 'Expert installation at your main water line with minimal disruption, typically completed same day' },
        { number: '04', title: 'Salt & Maintenance', desc: 'Regular salt refills and system check-ups to maintain peak softening performance year-round' },
      ],

      faqTitle: 'Frequently Asked',
      faqHighlight: 'Questions',
      faqs: [
        {
          q: 'What is water hardness and how is it measured?',
          a: 'Water hardness refers to dissolved calcium and magnesium content, measured in grains per gallon (GPG) or mg/L. Florida water is typically hard (7-25 GPG). Soft water is less than 1 GPG. We offer free hardness testing to determine your exact level.',
        },
        {
          q: 'What\'s the difference between salt-based and salt-free water softeners?',
          a: 'Salt-based softeners remove minerals through ion exchange, producing truly soft water. Salt-free conditioners alter mineral structure to prevent scale but don\'t technically soften water. Salt-based systems are more effective for very hard Florida water.',
        },
        {
          q: 'How much salt does a water softener use?',
          a: 'Average water softeners use 6-8 lbs of salt per regeneration cycle. Most homes regenerate 1-3 times per week. We program your softener for optimal efficiency based on your water hardness and household size.',
        },
        {
          q: 'Do water softeners affect drinking water quality?',
          a: 'Softened water contains slightly more sodium. For drinking, we recommend a reverse osmosis system under your kitchen sink to remove sodium and provide the purest drinking water. Many customers pair a softener with RO for complete home water treatment.',
        },
      ],

      ctaTitle: 'Ready for Soft,',
      ctaHighlight: 'Luxurious Water?',
      ctaSubtitle: 'Test your water hardness for free and see how much money you could save every month',
      ctaButton: 'Schedule Free Hardness Test',
    },
    es: {
      badge: 'Ahorre Dinero y Proteja Su Hogar',
      title: 'Soluciones para',
      titleHighlight: 'Agua Dura',
      subtitle: 'Ablandadores de agua profesionales que eliminan calcio y magnesio, protegiendo sus tuberías, electrodomésticos y familia. Disfrute de piel más suave, platos más limpios y extienda la vida de todo lo que el agua toca en su hogar.',
      ctaPrimary: 'Análisis de Dureza Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',

      stats: [
        { end: 30, suffix: '%', label: 'Ahorro Facturas Energía' },
        { end: 3, suffix: 'x', label: 'Mayor Vida Electrodomésticos' },
        { end: 10, suffix: '+', label: 'Años Experiencia' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],

      benefitsTitle: 'Transforme la',
      benefitsHighlight: 'Calidad del Agua',
      benefitsSubtitle: 'Diga adiós al sarro y hola al agua suave y lujosa en todo su hogar en el sur de Florida',
      benefits: [
        {
          title: 'Piel y Cabello Más Suaves',
          desc: 'No más piel seca y con comezón ni cabello quebradizo. El agua suave ayuda a su piel a retener humedad y hace su cabello sedoso y brillante.',
        },
        {
          title: 'Ahorre en Facturas de Energía',
          desc: 'Los electrodomésticos y calentadores de agua sin sarro funcionan hasta un 30% más eficientemente. Ahorre significativamente en costos de energía cada mes.',
        },
        {
          title: 'Extienda la Vida de Electrodomésticos',
          desc: 'Proteja su calentador de agua, lavavajillas y lavadora de la acumulación dañina de sarro y extienda su vida útil de 2 a 3 veces más.',
        },
      ],

      featuresTitle: 'Problemas de Agua Dura',
      featuresHighlight: 'Que Resolvemos',
      features: [
        'Acumulación de sarro blanco en grifos, duchas y accesorios',
        'Piel seca, con comezón y cabello quebradizo después de la ducha',
        'Manchas y película de agua en platos, cristalería y superficies',
        'Jabón y champú no hacen espuma (residuos de jabón)',
        'Ropa y toallas rígidas y opacas que se desgastan más rápido',
        'Tuberías obstruidas y flujo de agua reducido por el sarro',
        'Vida útil reducida de electrodomésticos (calentadores, lavavajillas)',
        'Facturas de energía altas por calentadores cubiertos de sarro',
      ],

      processTitle: 'Nuestro Simple',
      processHighlight: 'Proceso de 4 Pasos',
      process: [
        { number: '01', title: 'Análisis de Dureza Gratuito', desc: 'Mida el contenido de calcio, magnesio y minerales en su agua para determinar el nivel exacto de dureza' },
        { number: '02', title: 'Selección del Ablandador', desc: 'Elija el ablandador con sal o sin sal del tamaño correcto para el tamaño de su hogar y uso del agua' },
        { number: '03', title: 'Instalación Profesional', desc: 'Instalación experta en su línea principal de agua con mínima interrupción, típicamente completada el mismo día' },
        { number: '04', title: 'Sal y Mantenimiento', desc: 'Recargas regulares de sal y revisiones del sistema para mantener el máximo rendimiento de ablandamiento todo el año' },
      ],

      faqTitle: 'Preguntas',
      faqHighlight: 'Frecuentes',
      faqs: [
        {
          q: '¿Qué es la dureza del agua y cómo se mide?',
          a: 'La dureza del agua se refiere al contenido disuelto de calcio y magnesio, medido en granos por galón (GPG) o mg/L. El agua de Florida es típicamente dura (7-25 GPG). El agua suave es menos de 1 GPG. Ofrecemos análisis de dureza gratuitos para determinar su nivel exacto.',
        },
        {
          q: '¿Cuál es la diferencia entre ablandadores con sal y sin sal?',
          a: 'Los ablandadores con sal eliminan minerales a través del intercambio de iones, produciendo agua verdaderamente suave. Los acondicionadores sin sal alteran la estructura mineral para prevenir el sarro pero técnicamente no suavizan el agua. Los sistemas con sal son más efectivos para el agua muy dura de Florida.',
        },
        {
          q: '¿Cuánta sal usa un ablandador de agua?',
          a: 'Los ablandadores promedio usan 6-8 libras de sal por ciclo de regeneración. La mayoría de los hogares se regeneran 1-3 veces por semana. Programamos su ablandador para eficiencia óptima según la dureza del agua y el tamaño del hogar.',
        },
        {
          q: '¿Los ablandadores de agua afectan la calidad del agua potable?',
          a: 'El agua ablandada contiene un poco más de sodio. Para beber, recomendamos un sistema de ósmosis inversa bajo su fregadero de cocina para eliminar el sodio y proporcionar el agua potable más pura. Muchos clientes combinan un ablandador con RO para tratamiento completo del agua del hogar.',
        },
      ],

      ctaTitle: '¿Listo Para Agua',
      ctaHighlight: 'Suave y Lujosa?',
      ctaSubtitle: 'Analice la dureza de su agua gratis y vea cuánto dinero podría ahorrar cada mes',
      ctaButton: 'Programar Análisis de Dureza Gratuito',
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
            name: locale === 'en' ? 'Hard Water Solutions Florida' : 'Soluciones para Agua Dura Florida',
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
            serviceType: 'Water Softening & Hard Water Treatment',
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
                  src="/images/services/hard-water.jpg"
                  alt="Hard water softening system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />

                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">
                    {locale === 'en' ? '30% Energy Savings' : '30% Ahorro de Energía'}
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
