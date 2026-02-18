import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Droplets, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const title = locale === 'en'
    ? 'Water Purification Fort Lauderdale FL | Well Water & City Water Treatment | Aquaionic'
    : 'Purificación de Agua Fort Lauderdale FL | Tratamiento Agua de Pozo y Ciudad | Aquaionic';
  const description = locale === 'en'
    ? 'Professional water purification in Fort Lauderdale & Broward County. Well water treatment, iron & sulfur removal, water softeners, reverse osmosis. 10+ years serving South Florida. NSF certified. Free water test. Call (305) 467-1525.'
    : 'Purificación profesional de agua en Fort Lauderdale y el condado de Broward. Tratamiento agua de pozo, eliminación hierro y azufre, ablandadores, ósmosis inversa. 10+ años en el sur de Florida. Certificado NSF. Análisis gratis. (305) 467-1525.';
  const keywords = locale === 'en'
    ? 'water purification Fort Lauderdale, water treatment Fort Lauderdale FL, well water Fort Lauderdale, water softener Broward County, reverse osmosis Fort Lauderdale, iron removal Fort Lauderdale, hard water Hollywood FL, water filter Fort Lauderdale, Coral Springs water treatment'
    : 'purificación agua Fort Lauderdale, tratamiento agua Fort Lauderdale FL, agua de pozo Fort Lauderdale, ablandador agua Broward, ósmosis inversa Fort Lauderdale, eliminación hierro Fort Lauderdale, agua dura Hollywood FL, filtro agua Fort Lauderdale';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://aquaionic.us/${locale}/fort-lauderdale/`,
      languages: {
        'en': 'https://aquaionic.us/en/fort-lauderdale/',
        'es': 'https://aquaionic.us/es/fort-lauderdale/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/fort-lauderdale/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [{ url: 'https://aquaionic.us/images/locations/fort-lauderdale.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function FortLauderdalePage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const en = locale === 'en';

  const content = {
    en: {
      badge: 'Serving Broward County',
      title: 'Water Treatment',
      titleHighlight: 'Fort Lauderdale, FL',
      subtitle: 'Professional water purification throughout Fort Lauderdale and Broward County. We solve well water iron, sulfur, hard water, and city water quality issues. Trusted by hundreds of South Florida families.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Years Local Service' },
        { end: 450, suffix: '+', label: 'Systems Installed' },
        { end: 100, suffix: '%', label: 'Satisfaction Rate' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],
      benefitsTitle: 'Why Choose Aquaionic',
      benefitsHighlight: 'in Fort Lauderdale',
      benefitsSubtitle: 'Local expertise for the unique water quality challenges of Broward County',
      benefits: [
        { title: 'Broward County Specialists', desc: '10+ years serving Fort Lauderdale and Broward County. We understand local water: Everglades-influenced well water with high iron content, chloramines in Broward city water, and heavy rainfall that affects aquifer quality.' },
        { title: 'Same-Day Service Available', desc: 'Fast, reliable service throughout Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, and the rest of Broward County. We arrive on time with everything needed.' },
        { title: 'Licensed & Insured Contractors', desc: 'Florida-licensed water treatment professionals. All systems are NSF certified for safety and efficacy, with expert installation and ongoing support for as long as you own your system.' },
      ],
      neighborhoodsTitle: 'Areas We Serve in',
      neighborhoodsHighlight: 'Broward County',
      neighborhoods: ['Fort Lauderdale & Wilton Manors', 'Hollywood & Hallandale Beach', 'Pompano Beach & Deerfield Beach', 'Plantation & Davie', 'Coral Springs & Coconut Creek', 'Sunrise & Miramar'],
      servicesTitle: 'Our Services',
      servicesHighlight: 'in Fort Lauderdale',
      services: [
        { label: 'Well Water Treatment', href: '/en/well-water-treatment' },
        { label: 'Iron & Sulfur Removal', href: '/en/iron-sulfur-removal' },
        { label: 'Hard Water Solutions', href: '/en/hard-water-solutions' },
        { label: 'Reverse Osmosis Systems', href: '/en/reverse-osmosis-systems' },
        { label: 'Whole House Filtration', href: '/en/whole-house-filtration' },
        { label: 'City Water Purification', href: '/en/city-water-purification' },
      ],
      faqTitle: 'Fort Lauderdale Water',
      faqHighlight: 'FAQs',
      faqs: [
        { q: 'What are the main water problems in Fort Lauderdale?', a: 'Fort Lauderdale city water is treated with chloramines, which can leave an unpleasant smell and taste. Many western Broward areas rely on well water with elevated iron, sulfur, and hardness due to proximity to the Everglades and local limestone geology.' },
        { q: 'Is well water safe in Broward County?', a: 'Broward County well water can contain iron, sulfur (hydrogen sulfide), hardness, and some agricultural contaminants from surrounding land use. A comprehensive water test followed by a whole-house filtration system makes well water safe and pleasant for all uses.' },
        { q: 'How hard is the water in Fort Lauderdale?', a: 'Fort Lauderdale water is moderately to very hard, typically 150–300 mg/L. This leads to scale on faucets, water heaters, and appliances, shortening their lifespan. A water softener removes calcium and magnesium and protects your investment.' },
        { q: 'Do you serve all of Broward County?', a: 'Yes — we serve all of Broward County including Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, Sunrise, Plantation, Davie, Miramar, and every community in between. Call or book online for a free water test.' },
      ],
      ctaTitle: 'Ready for Better Water',
      ctaHighlight: 'in Fort Lauderdale?',
      ctaSubtitle: 'Get your free professional water test and discover exactly what\'s in your Fort Lauderdale water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Sirviendo el Condado de Broward',
      title: 'Tratamiento de Agua',
      titleHighlight: 'Fort Lauderdale, FL',
      subtitle: 'Purificación profesional de agua en Fort Lauderdale y el condado de Broward. Resolvemos problemas de hierro, azufre, agua dura y calidad de agua de ciudad. Con la confianza de cientos de familias en el sur de Florida.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Años Servicio Local' },
        { end: 450, suffix: '+', label: 'Sistemas Instalados' },
        { end: 100, suffix: '%', label: 'Tasa de Satisfacción' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],
      benefitsTitle: 'Por Qué Elegir Aquaionic',
      benefitsHighlight: 'en Fort Lauderdale',
      benefitsSubtitle: 'Experiencia local para los desafíos únicos de calidad del agua en el condado de Broward',
      benefits: [
        { title: 'Especialistas en el Condado de Broward', desc: '10+ años sirviendo Fort Lauderdale y el condado de Broward. Entendemos el agua local: pozos con alto contenido de hierro por influencia de los Everglades, cloraminas en el agua de ciudad, y efectos de las lluvias en la calidad del acuífero.' },
        { title: 'Servicio el Mismo Día Disponible', desc: 'Servicio rápido y confiable en Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs y todo el condado de Broward. Llegamos a tiempo con todo lo necesario.' },
        { title: 'Contratistas con Licencia y Seguro', desc: 'Profesionales con licencia de Florida en tratamiento de agua. Todos los sistemas tienen certificación NSF, con instalación experta y soporte continuo mientras tenga su sistema.' },
      ],
      neighborhoodsTitle: 'Áreas que Servimos en',
      neighborhoodsHighlight: 'el Condado de Broward',
      neighborhoods: ['Fort Lauderdale y Wilton Manors', 'Hollywood y Hallandale Beach', 'Pompano Beach y Deerfield Beach', 'Plantation y Davie', 'Coral Springs y Coconut Creek', 'Sunrise y Miramar'],
      servicesTitle: 'Nuestros Servicios',
      servicesHighlight: 'en Fort Lauderdale',
      services: [
        { label: 'Tratamiento de Agua de Pozo', href: '/es/tratamiento-agua-de-pozo' },
        { label: 'Eliminación de Hierro y Azufre', href: '/es/eliminacion-hierro-azufre' },
        { label: 'Soluciones para Agua Dura', href: '/es/soluciones-agua-dura' },
        { label: 'Sistemas de Ósmosis Inversa', href: '/es/sistemas-osmosis-inversa' },
        { label: 'Filtración para Toda la Casa', href: '/es/filtracion-toda-la-casa' },
        { label: 'Purificación de Agua de Ciudad', href: '/es/purificacion-agua-ciudad' },
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqHighlight: 'sobre el Agua de Fort Lauderdale',
      faqs: [
        { q: '¿Cuáles son los principales problemas del agua en Fort Lauderdale?', a: 'El agua de ciudad de Fort Lauderdale se trata con cloraminas, que pueden dejar un olor y sabor desagradable. Muchas áreas al oeste del condado de Broward dependen de pozos con alto contenido de hierro, azufre y dureza por la proximidad a los Everglades.' },
        { q: '¿Es segura el agua de pozo en el condado de Broward?', a: 'El agua de pozo en el condado de Broward puede contener hierro, azufre, dureza y algunos contaminantes agrícolas. Un análisis completo seguido de un sistema de filtración para toda la casa hace que el agua de pozo sea segura y agradable.' },
        { q: '¿Qué tan dura es el agua en Fort Lauderdale?', a: 'El agua en Fort Lauderdale es moderada a muy dura, típicamente 150–300 mg/L. Esto genera sarro en grifos, calentadores y electrodomésticos. Un ablandador de agua elimina el calcio y magnesio y protege su inversión.' },
        { q: '¿Sirven todo el condado de Broward?', a: 'Sí — servimos todo el condado de Broward incluyendo Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, Sunrise, Plantation, Davie, Miramar y todas las comunidades intermedias. Llame o reserve en línea para un análisis de agua gratuito.' },
      ],
      ctaTitle: '¿Listo para Mejor Agua',
      ctaHighlight: 'en Fort Lauderdale?',
      ctaSubtitle: 'Obtenga su análisis profesional de agua gratuito y descubra exactamente qué hay en su agua de Fort Lauderdale',
      ctaButton: 'Programar Análisis Gratuito',
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aquaionic Water Purification',
            description: t.subtitle,
            url: 'https://aquaionic.us',
            telephone: '+1-305-467-1525',
            email: 'info@aquaionic.us',
            address: { '@type': 'PostalAddress', addressLocality: 'Fort Lauderdale', addressRegion: 'FL', postalCode: '33301', addressCountry: 'US' },
            areaServed: [
              { '@type': 'City', name: 'Fort Lauderdale' },
              { '@type': 'City', name: 'Hollywood' },
              { '@type': 'City', name: 'Coral Springs' },
              { '@type': 'City', name: 'Pompano Beach' },
            ],
            openingHours: 'Mo-Fr 08:00-18:00',
            priceRange: '$$',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-white pt-[72px]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">{t.subtitle}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-4 mb-16">
                  <Link href="#contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan text-white font-semibold text-[15px] rounded-xl hover:bg-cyan-soft transition-colors duration-200 animate-breathe">
                    {t.ctaPrimary}<ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:+13054671525" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border-2 border-gray-200 text-deep-blue font-semibold text-[15px] rounded-xl hover:border-cyan hover:text-cyan transition-colors duration-200">
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
                      <div className="text-[11px] font-semibold text-text-light uppercase tracking-[0.08em] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image src="/images/locations/fort-lauderdale.jpg" alt="Water treatment services in Fort Lauderdale FL" fill className="object-cover" sizes="(max-width: 1024px) 0vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">Broward County</span>
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
              { icon: Droplets, label: en ? 'Free Water Analysis' : 'Análisis de Agua Gratis' },
              { icon: ShieldCheck, label: en ? 'NSF & FDA Certified' : 'Certificado NSF y FDA' },
              { icon: Wrench, label: en ? 'Professional Installation' : 'Instalación Profesional' },
              { icon: CheckCircle, label: en ? 'Lifetime Support' : 'Soporte de Por Vida' },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-gray-100 hover:border-cyan/30 hover:shadow-md transition-all duration-200">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/15 transition-colors duration-200">
                  <item.icon size={24} className="text-cyan" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-semibold text-deep-blue text-center leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.benefitsTitle}{' '}<span className="text-cyan">{t.benefitsHighlight}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[17px] text-gray-600 leading-relaxed">{t.benefitsSubtitle}</p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="h-full bg-white rounded-2xl border border-gray-100 p-7 hover:border-gray-200 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-5">
                    <CheckCircle size={22} className="text-cyan" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[19px] font-jakarta font-bold text-deep-blue mb-3 tracking-tight">{b.title}</h3>
                  <p className="text-[14.5px] text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.neighborhoodsTitle}{' '}<span className="text-cyan">{t.neighborhoodsHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {t.neighborhoods.map((area, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-cyan/30 transition-colors duration-200">
                  <MapPin size={20} className="text-cyan flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-[15px] font-semibold text-deep-blue">{area}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.servicesTitle}{' '}<span className="text-cyan">{t.servicesHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {t.services.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <Link href={svc.href} className="group flex items-center gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-cyan/40 hover:shadow-md transition-all duration-200">
                  <CheckCircle size={20} className="text-cyan flex-shrink-0 group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                  <span className="text-[15px] font-semibold text-deep-blue group-hover:text-cyan transition-colors duration-200">{svc.label}</span>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-cyan ml-auto transition-colors duration-200" strokeWidth={2.5} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.faqTitle}{' '}<span className="text-cyan">{t.faqHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {t.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-gray-200 transition-colors duration-200">
                  <h3 className="text-[17px] font-jakarta font-bold text-deep-blue mb-3">{faq.q}</h3>
                  <p className="text-[14.5px] text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-blue to-ocean text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold mb-4 tracking-tight">
              {t.ctaTitle}{' '}<span className="text-cyan-soft">{t.ctaHighlight}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link href="#contact" className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-deep-blue font-semibold text-[15px] rounded-xl hover:bg-cyan-soft hover:text-white transition-all duration-200 animate-breathe">
              {t.ctaButton}<ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
