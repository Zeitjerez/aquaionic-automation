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
    ? 'Water Purification Boca Raton FL | Well Water & City Water Treatment | Aquaionic'
    : 'Purificación de Agua Boca Raton FL | Tratamiento Agua de Pozo y Ciudad | Aquaionic';
  const description = locale === 'en'
    ? 'Professional water purification in Boca Raton & Palm Beach County. Well water treatment, iron & sulfur removal, water softeners, reverse osmosis. 10+ years serving South Florida. NSF certified. Free water test. Call (305) 467-1525.'
    : 'Purificación profesional de agua en Boca Raton y el condado de Palm Beach. Tratamiento agua de pozo, eliminación hierro y azufre, ablandadores, ósmosis inversa. 10+ años en el sur de Florida. Certificado NSF. Análisis gratis. (305) 467-1525.';
  const keywords = locale === 'en'
    ? 'water purification Boca Raton, water treatment Boca Raton FL, well water Boca Raton, water softener Boca Raton, reverse osmosis Boca Raton, iron removal Palm Beach County, hard water Boca Raton, water filter Boca Raton, Delray Beach water treatment'
    : 'purificación agua Boca Raton, tratamiento agua Boca Raton FL, agua de pozo Boca Raton, ablandador agua Boca Raton, ósmosis inversa Boca Raton, eliminación hierro Palm Beach, agua dura Boca Raton, filtro agua Boca Raton';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://aquaionic.us/${locale}/boca-raton/`,
      languages: {
        'en': 'https://aquaionic.us/en/boca-raton/',
        'es': 'https://aquaionic.us/es/boca-raton/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/boca-raton/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [{ url: 'https://aquaionic.us/images/locations/boca-raton.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function BocaRatonPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const en = locale === 'en';

  const content = {
    en: {
      badge: 'Serving Palm Beach County',
      title: 'Water Treatment',
      titleHighlight: 'Boca Raton, FL',
      subtitle: 'Professional water purification throughout Boca Raton and Palm Beach County. We solve well water iron, sulfur, hard water, and city water quality issues. Trusted by hundreds of South Florida families.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Years Local Service' },
        { end: 400, suffix: '+', label: 'Systems Installed' },
        { end: 100, suffix: '%', label: 'Satisfaction Rate' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],
      benefitsTitle: 'Why Choose Aquaionic',
      benefitsHighlight: 'in Boca Raton',
      benefitsSubtitle: 'Local expertise for the unique water quality challenges of Palm Beach County',
      benefits: [
        { title: 'Palm Beach County Experts', desc: '10+ years serving Boca Raton and Palm Beach County. We know local water: high limestone hardness, well water iron in western communities, and chloramine issues in city water.' },
        { title: 'Fast, Reliable Service', desc: 'Prompt response throughout Boca Raton, Delray Beach, Boynton Beach, and surrounding areas. Licensed technicians arrive on time with all needed equipment.' },
        { title: 'Licensed & NSF Certified', desc: 'Fully licensed Florida water treatment contractors. Every system is NSF certified for safety and performance, with professional installation and lifetime support.' },
      ],
      neighborhoodsTitle: 'Areas We Serve in',
      neighborhoodsHighlight: 'Palm Beach County',
      neighborhoods: ['Boca Raton & Deerfield Beach', 'Delray Beach & Boynton Beach', 'Wellington & Loxahatchee', 'West Palm Beach & Lake Worth', 'Greenacres & Royal Palm Beach', 'Coconut Creek & Pompano Beach'],
      servicesTitle: 'Our Services',
      servicesHighlight: 'in Boca Raton',
      services: [
        { label: 'Well Water Treatment', href: '/en/well-water-treatment' },
        { label: 'Iron & Sulfur Removal', href: '/en/iron-sulfur-removal' },
        { label: 'Hard Water Solutions', href: '/en/hard-water-solutions' },
        { label: 'Reverse Osmosis Systems', href: '/en/reverse-osmosis-systems' },
        { label: 'Whole House Filtration', href: '/en/whole-house-filtration' },
        { label: 'City Water Purification', href: '/en/city-water-purification' },
      ],
      faqTitle: 'Boca Raton Water',
      faqHighlight: 'FAQs',
      faqs: [
        { q: 'Is Boca Raton tap water safe to drink?', a: 'Boca Raton city water meets EPA standards, but contains chloramines, disinfection byproducts, and residual contaminants from aging pipes. Our filtration systems go well beyond city treatment to deliver clean, great-tasting water at your tap.' },
        { q: 'Why is my water in Boca Raton so hard?', a: 'Boca Raton draws water from the Floridan Aquifer, which passes through limestone and naturally picks up high levels of calcium and magnesium. Hardness levels of 200–350 mg/L are common — a water softener eliminates scale buildup and improves skin and hair.' },
        { q: 'Do I need a water filter for my well in western Boca Raton?', a: 'Yes. Wells in western Palm Beach County communities like Loxahatchee and Wellington often have elevated iron, sulfur, and hardness. A whole-house filtration system addresses all these issues before water enters your home.' },
        { q: 'How soon can you install a system in Boca Raton?', a: 'We offer same-day and next-day service throughout Boca Raton and Palm Beach County. Most installations are completed in 2–4 hours. We start with a free water test so you know exactly what you need.' },
      ],
      ctaTitle: 'Ready for Better Water',
      ctaHighlight: 'in Boca Raton?',
      ctaSubtitle: 'Get your free professional water test and discover exactly what\'s in your Boca Raton water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Sirviendo el Condado de Palm Beach',
      title: 'Tratamiento de Agua',
      titleHighlight: 'Boca Raton, FL',
      subtitle: 'Purificación profesional de agua en Boca Raton y el condado de Palm Beach. Resolvemos problemas de hierro, azufre, agua dura y calidad de agua de ciudad. Con la confianza de cientos de familias en el sur de Florida.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Años Servicio Local' },
        { end: 400, suffix: '+', label: 'Sistemas Instalados' },
        { end: 100, suffix: '%', label: 'Tasa de Satisfacción' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],
      benefitsTitle: 'Por Qué Elegir Aquaionic',
      benefitsHighlight: 'en Boca Raton',
      benefitsSubtitle: 'Experiencia local para los desafíos únicos de calidad del agua en el condado de Palm Beach',
      benefits: [
        { title: 'Expertos en el Condado de Palm Beach', desc: '10+ años sirviendo Boca Raton y el condado de Palm Beach. Conocemos el agua local: alta dureza por caliza, hierro en pozos de comunidades del oeste, y cloraminas en el agua de ciudad.' },
        { title: 'Servicio Rápido y Confiable', desc: 'Respuesta rápida en Boca Raton, Delray Beach, Boynton Beach y áreas cercanas. Técnicos con licencia llegan a tiempo con todo el equipo necesario.' },
        { title: 'Licenciado y Certificado NSF', desc: 'Contratistas de tratamiento de agua con licencia completa de Florida. Cada sistema tiene certificación NSF, con instalación profesional y soporte de por vida.' },
      ],
      neighborhoodsTitle: 'Áreas que Servimos en',
      neighborhoodsHighlight: 'el Condado de Palm Beach',
      neighborhoods: ['Boca Raton y Deerfield Beach', 'Delray Beach y Boynton Beach', 'Wellington y Loxahatchee', 'West Palm Beach y Lake Worth', 'Greenacres y Royal Palm Beach', 'Coconut Creek y Pompano Beach'],
      servicesTitle: 'Nuestros Servicios',
      servicesHighlight: 'en Boca Raton',
      services: [
        { label: 'Tratamiento de Agua de Pozo', href: '/es/tratamiento-agua-de-pozo' },
        { label: 'Eliminación de Hierro y Azufre', href: '/es/eliminacion-hierro-azufre' },
        { label: 'Soluciones para Agua Dura', href: '/es/soluciones-agua-dura' },
        { label: 'Sistemas de Ósmosis Inversa', href: '/es/sistemas-osmosis-inversa' },
        { label: 'Filtración para Toda la Casa', href: '/es/filtracion-toda-la-casa' },
        { label: 'Purificación de Agua de Ciudad', href: '/es/purificacion-agua-ciudad' },
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqHighlight: 'sobre el Agua de Boca Raton',
      faqs: [
        { q: '¿Es segura el agua del grifo en Boca Raton para beber?', a: 'El agua de ciudad de Boca Raton cumple los estándares de la EPA, pero contiene cloraminas, subproductos de desinfección y contaminantes residuales. Nuestros sistemas van mucho más allá del tratamiento municipal para entregar agua limpia y con buen sabor.' },
        { q: '¿Por qué el agua en Boca Raton es tan dura?', a: 'Boca Raton obtiene agua del Acuífero Floridan, que pasa por piedra caliza y acumula altos niveles de calcio y magnesio. La dureza de 200–350 mg/L es común. Un ablandador de agua elimina el sarro y mejora la piel y el cabello.' },
        { q: '¿Necesito un filtro de agua para mi pozo al oeste de Boca Raton?', a: 'Sí. Los pozos en comunidades del oeste del condado de Palm Beach como Loxahatchee y Wellington suelen tener alto contenido de hierro, azufre y dureza. Un sistema de filtración para toda la casa soluciona todos estos problemas.' },
        { q: '¿Cuánto tardan en instalar un sistema en Boca Raton?', a: 'Ofrecemos servicio el mismo día y al día siguiente en Boca Raton y el condado de Palm Beach. La mayoría de instalaciones se completan en 2-4 horas. Empezamos con un análisis de agua gratuito.' },
      ],
      ctaTitle: '¿Listo para Mejor Agua',
      ctaHighlight: 'en Boca Raton?',
      ctaSubtitle: 'Obtenga su análisis profesional de agua gratuito y descubra exactamente qué hay en su agua de Boca Raton',
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
            address: { '@type': 'PostalAddress', addressLocality: 'Boca Raton', addressRegion: 'FL', postalCode: '33432', addressCountry: 'US' },
            areaServed: [
              { '@type': 'City', name: 'Boca Raton' },
              { '@type': 'City', name: 'Delray Beach' },
              { '@type': 'City', name: 'Boynton Beach' },
              { '@type': 'City', name: 'Wellington' },
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
                <Image src="/images/locations/boca-raton.jpg" alt="Water treatment services in Boca Raton FL" fill className="object-cover" sizes="(max-width: 1024px) 0vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">Palm Beach County</span>
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
