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
  const slug = locale === 'en' ? 'iron-sulfur-removal' : 'eliminacion-hierro-azufre';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  const defaultTitle = locale === 'en'
    ? 'Iron & Sulfur Removal Systems Florida | Stop Rust Stains & Rotten Egg Smell | Aquaionic'
    : 'Sistemas de Eliminación de Hierro y Azufre Florida | Detener Manchas de Óxido | Aquaionic';

  const defaultDescription = locale === 'en'
    ? 'Professional iron and sulfur removal systems in South Florida. Eliminate rust stains, rotten egg smell, and metallic taste from your well water. NSF certified. Free water testing. Serving Miami, Boca Raton, Fort Lauderdale. Call (305) 467-1525.'
    : 'Sistemas profesionales de eliminación de hierro y azufre en el sur de Florida. Elimine manchas de óxido, olor a huevo podrido y sabor metálico de su agua de pozo. Certificado NSF. Análisis de agua gratuito. Llame al (305) 467-1525.';

  const keywords = locale === 'en'
    ? 'iron removal Florida, sulfur removal well water, rust stains water filter, rotten egg smell water, hydrogen sulfide removal, iron filter Florida, well water iron treatment, metallic taste water, iron bacteria Florida, orange water stains'
    : 'eliminación hierro Florida, eliminación azufre agua pozo, filtro manchas óxido, olor huevo podrido agua, eliminación sulfuro hidrógeno, filtro hierro Florida, tratamiento hierro agua pozo, sabor metálico agua, bacterias hierro Florida';

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
        'en': 'https://aquaionic.us/en/iron-sulfur-removal/',
        'es': 'https://aquaionic.us/es/eliminacion-hierro-azufre/',
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
          url: 'https://aquaionic.us/images/og-iron-sulfur-removal.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'Iron & Sulfur Removal Systems Florida' : 'Sistemas de Eliminación de Hierro y Azufre Florida',
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

export default function IronSulfurRemovalPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'Proven Technology - Florida Well Water Specialists',
      title: 'Iron & Sulfur',
      titleHighlight: 'Removal Systems',
      subtitle: 'Eliminate rust stains, rotten egg smell, and metallic taste from your well water. Advanced oxidation filtration removes iron, manganese, and hydrogen sulfide for crystal-clear, odor-free water throughout your home.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',

      stats: [
        { end: 99, suffix: '.9%', label: 'Iron Removal Rate' },
        { end: 0, suffix: '', label: 'Rotten Egg Smell' },
        { end: 500, suffix: '+', label: 'Systems Installed' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],

      benefitsTitle: 'Say Goodbye to',
      benefitsHighlight: 'Water Problems',
      benefitsSubtitle: 'Advanced filtration technology designed specifically for Florida well water iron and sulfur issues',
      benefits: [
        {
          title: 'No More Rust Staining',
          desc: 'Eliminate rust-colored water and orange stains on fixtures, clothing, toilets, and appliances caused by excess iron in your well water.',
        },
        {
          title: 'Fresh, Clean Smell',
          desc: 'Remove hydrogen sulfide gas that causes the unpleasant rotten egg odor. Enjoy fresh, odor-free water from every tap in your home.',
        },
        {
          title: 'Better Taste & Clarity',
          desc: 'Get rid of metallic taste and murky water. Enjoy crystal-clear, fresh-tasting water that\'s safe for drinking, cooking, and bathing.',
        },
      ],

      featuresTitle: 'Iron & Sulfur Problems',
      featuresHighlight: 'We Solve',
      features: [
        'Rust-colored water & orange staining on fixtures',
        'Rotten egg smell (hydrogen sulfide elimination)',
        'Metallic or bitter taste in drinking water',
        'Orange/red stains on toilets, sinks & showers',
        'Damaged plumbing pipes & shortened appliance life',
        'Discolored laundry, dishes & glassware',
        'High iron levels (over 0.3 ppm in water)',
        'Manganese removal (stops black staining)',
      ],

      processTitle: 'Our Simple',
      processHighlight: '4-Step Process',
      process: [
        { number: '01', title: 'Free Water Analysis', desc: 'Test iron, sulfur, manganese, and pH levels to identify exact contaminants in your well water' },
        { number: '02', title: 'Treatment System Design', desc: 'Select from air injection, oxidizing filter, or chemical feed systems based on your water chemistry' },
        { number: '03', title: 'Professional Installation', desc: 'Expert setup of iron/sulfur removal system at your point of entry with full testing' },
        { number: '04', title: 'Ongoing Maintenance', desc: 'Regular media replacement and system inspection to maintain optimal iron and sulfur removal' },
      ],

      faqTitle: 'Frequently Asked',
      faqHighlight: 'Questions',
      faqs: [
        {
          q: 'How do I know if I have iron in my well water?',
          a: 'Common signs include orange/rust stains on fixtures, toilets, and laundry; metallic taste; and orange-colored water. Water testing is the only way to determine exact iron levels. We offer free water testing to analyze your well water.',
        },
        {
          q: 'What causes the rotten egg smell in my water?',
          a: 'The rotten egg smell is caused by hydrogen sulfide gas, which occurs naturally in Florida well water as bacteria break down organic matter. Our filtration systems remove hydrogen sulfide at the source, eliminating the odor completely.',
        },
        {
          q: 'How much does iron removal cost in Florida?',
          a: 'Iron and sulfur removal systems typically range from $800-$2,500 depending on iron levels and home size. We offer free water testing and detailed quotes so you know exactly what you need before committing.',
        },
        {
          q: 'Will iron removal damage my water softener?',
          a: 'High iron levels can damage water softeners and reduce their effectiveness. We recommend installing an iron removal filter before your water softener to protect it and extend its life significantly.',
        },
      ],

      ctaTitle: 'Ready to Stop',
      ctaHighlight: 'Rust Stains for Good?',
      ctaSubtitle: 'Get a free water test and find out exactly how much iron and sulfur is in your well water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Tecnología Probada - Especialistas en Agua de Pozo de Florida',
      title: 'Eliminación de',
      titleHighlight: 'Hierro y Azufre',
      subtitle: 'Elimine manchas de óxido, olor a huevo podrido y sabor metálico de su agua de pozo. La filtración avanzada de oxidación elimina hierro, manganeso y sulfuro de hidrógeno para agua cristalina y sin olores en toda su casa.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',

      stats: [
        { end: 99, suffix: '.9%', label: 'Tasa de Eliminación de Hierro' },
        { end: 0, suffix: '', label: 'Olor a Huevo Podrido' },
        { end: 500, suffix: '+', label: 'Sistemas Instalados' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],

      benefitsTitle: 'Diga Adiós a los',
      benefitsHighlight: 'Problemas de Agua',
      benefitsSubtitle: 'Tecnología de filtración avanzada diseñada específicamente para problemas de hierro y azufre en agua de pozo de Florida',
      benefits: [
        {
          title: 'No Más Manchas de Óxido',
          desc: 'Elimine el agua color óxido y las manchas naranjas en sanitarios, ropa, grifos y electrodomésticos causadas por el exceso de hierro en su agua de pozo.',
        },
        {
          title: 'Olor Fresco y Limpio',
          desc: 'Elimine el gas de sulfuro de hidrógeno que causa el desagradable olor a huevo podrido. Disfrute de agua fresca y sin olores en cada grifo de su hogar.',
        },
        {
          title: 'Mejor Sabor y Claridad',
          desc: 'Elimine el sabor metálico y el agua turbia. Disfrute de agua cristalina y de sabor fresco, segura para beber, cocinar y bañarse.',
        },
      ],

      featuresTitle: 'Problemas de Hierro y Azufre',
      featuresHighlight: 'Que Resolvemos',
      features: [
        'Agua color óxido y manchas naranjas en accesorios',
        'Olor a huevo podrido (eliminación de sulfuro de hidrógeno)',
        'Sabor metálico o amargo en el agua potable',
        'Manchas naranjas/rojas en sanitarios, lavabos y duchas',
        'Tuberías dañadas y vida útil reducida de electrodomésticos',
        'Ropa, platos y cristalería decolorados',
        'Niveles altos de hierro (más de 0.3 ppm en el agua)',
        'Eliminación de manganeso (detiene manchas negras)',
      ],

      processTitle: 'Nuestro Simple',
      processHighlight: 'Proceso de 4 Pasos',
      process: [
        { number: '01', title: 'Análisis de Agua Gratuito', desc: 'Prueba de hierro, azufre, manganeso y pH para identificar contaminantes exactos en su agua de pozo' },
        { number: '02', title: 'Diseño del Sistema', desc: 'Selección entre inyección de aire, filtro oxidante o sistemas de alimentación química según la química de su agua' },
        { number: '03', title: 'Instalación Profesional', desc: 'Configuración experta del sistema de eliminación de hierro/azufre en el punto de entrada con pruebas completas' },
        { number: '04', title: 'Mantenimiento Continuo', desc: 'Reemplazo regular de medios e inspección del sistema para mantener la eliminación óptima de hierro y azufre' },
      ],

      faqTitle: 'Preguntas',
      faqHighlight: 'Frecuentes',
      faqs: [
        {
          q: '¿Cómo sé si tengo hierro en mi agua de pozo?',
          a: 'Las señales comunes incluyen manchas naranjas/óxido en sanitarios y ropa, sabor metálico y agua de color naranja. Solo las pruebas de agua pueden determinar los niveles exactos de hierro. Ofrecemos análisis de agua gratuitos para analizar su agua de pozo.',
        },
        {
          q: '¿Qué causa el olor a huevo podrido en mi agua?',
          a: 'El olor a huevo podrido es causado por el gas sulfuro de hidrógeno, que ocurre naturalmente en el agua de pozo de Florida cuando las bacterias descomponen la materia orgánica. Nuestros sistemas eliminan el sulfuro de hidrógeno en la fuente, eliminando completamente el olor.',
        },
        {
          q: '¿Cuánto cuesta la eliminación de hierro en Florida?',
          a: 'Los sistemas de eliminación de hierro y azufre típicamente varían de $800 a $2,500 dependiendo de los niveles de hierro y el tamaño del hogar. Ofrecemos análisis de agua y cotizaciones detalladas gratuitas para que sepa exactamente lo que necesita.',
        },
        {
          q: '¿La eliminación de hierro dañará mi ablandador de agua?',
          a: 'Los altos niveles de hierro pueden dañar los ablandadores de agua y reducir su efectividad. Recomendamos instalar un filtro de eliminación de hierro antes de su ablandador para protegerlo y extender significativamente su vida útil.',
        },
      ],

      ctaTitle: '¿Listo Para Detener',
      ctaHighlight: 'las Manchas de Óxido?',
      ctaSubtitle: 'Obtenga un análisis de agua gratuito y descubra exactamente cuánto hierro y azufre hay en su agua',
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
            name: locale === 'en' ? 'Iron & Sulfur Removal Systems Florida' : 'Sistemas de Eliminación de Hierro y Azufre Florida',
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
            serviceType: 'Iron & Sulfur Water Treatment',
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
                  src="/images/services/filtration.jpg"
                  alt="Iron and sulfur removal filtration system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />

                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">
                    {locale === 'en' ? 'Iron-Free Guarantee' : 'Garantía Sin Hierro'}
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
