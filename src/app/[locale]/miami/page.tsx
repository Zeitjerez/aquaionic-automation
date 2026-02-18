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
    ? 'Water Purification Miami FL | Well Water & City Water Treatment | Aquaionic'
    : 'Purificación de Agua Miami FL | Tratamiento Agua de Pozo y Ciudad | Aquaionic';
  const description = locale === 'en'
    ? 'Professional water purification in Miami-Dade County. Well water treatment, iron & sulfur removal, water softeners, reverse osmosis. 10+ years serving Miami. NSF certified. Free water test. Call (305) 467-1525.'
    : 'Purificación profesional de agua en el condado de Miami-Dade. Tratamiento agua de pozo, eliminación hierro y azufre, ablandadores, ósmosis inversa. 10+ años sirviendo Miami. Certificado NSF. Análisis gratis. (305) 467-1525.';
  const keywords = locale === 'en'
    ? 'water purification Miami, water treatment Miami FL, well water Miami, water softener Miami, reverse osmosis Miami, iron removal Miami, hard water Miami-Dade, water filter Miami, Miami water quality'
    : 'purificación agua Miami, tratamiento agua Miami FL, agua de pozo Miami, ablandador agua Miami, ósmosis inversa Miami, eliminación hierro Miami, agua dura Miami-Dade, filtro agua Miami';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://aquaionic.us/${locale}/miami/`,
      languages: {
        'en': 'https://aquaionic.us/en/miami/',
        'es': 'https://aquaionic.us/es/miami/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/miami/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [{ url: 'https://aquaionic.us/images/locations/miami.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function MiamiPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const en = locale === 'en';

  const content = {
    en: {
      badge: 'Serving Miami-Dade County',
      title: 'Water Treatment',
      titleHighlight: 'Miami, FL',
      subtitle: 'Professional water purification throughout Miami-Dade County. We solve well water iron, sulfur, hard water, and city water quality issues. Trusted by 500+ Miami families.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Years Local Service' },
        { end: 500, suffix: '+', label: 'Systems Installed' },
        { end: 100, suffix: '%', label: 'Satisfaction Rate' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],
      benefitsTitle: 'Why Choose Aquaionic',
      benefitsHighlight: 'in Miami',
      benefitsSubtitle: 'Local expertise for the unique water quality challenges of Miami-Dade County',
      benefits: [
        { title: 'Miami-Dade Local Experts', desc: '10+ years serving Miami-Dade County. We know local water issues: Biscayne Aquifer hard water, iron in Homestead wells, chlorine in Miami city water.' },
        { title: 'Same-Day Service', desc: 'Fast response throughout Miami, Kendall, Coral Gables, Doral, and surrounding areas. We respect your time with on-time appointments.' },
        { title: 'Licensed & Insured', desc: 'Fully licensed Florida water treatment contractors. Professional installation, NSF certified systems, and lifetime support included.' },
      ],
      neighborhoodsTitle: 'Areas We Serve in',
      neighborhoodsHighlight: 'Miami-Dade County',
      neighborhoods: ['Miami & Miami Beach', 'Coral Gables & South Miami', 'Kendall & Pinecrest', 'Doral & Hialeah', 'Homestead & Florida City', 'Key Biscayne & Coconut Grove'],
      servicesTitle: 'Our Services',
      servicesHighlight: 'in Miami',
      services: [
        { label: 'Well Water Treatment', href: '/en/well-water-treatment' },
        { label: 'Iron & Sulfur Removal', href: '/en/iron-sulfur-removal' },
        { label: 'Hard Water Solutions', href: '/en/hard-water-solutions' },
        { label: 'Reverse Osmosis Systems', href: '/en/reverse-osmosis-systems' },
        { label: 'Whole House Filtration', href: '/en/whole-house-filtration' },
        { label: 'City Water Purification', href: '/en/city-water-purification' },
      ],
      faqTitle: 'Miami Water',
      faqHighlight: 'FAQs',
      faqs: [
        { q: 'Is Miami tap water safe to drink?', a: 'Miami-Dade tap water meets EPA standards but contains chlorine, chloramines, and disinfection byproducts that affect taste and health. Our filtration systems significantly improve the quality beyond what the city provides.' },
        { q: 'Why does my Miami well water smell like rotten eggs?', a: 'The rotten egg smell in Miami-Dade well water is caused by hydrogen sulfide gas, common in South Florida\'s geology. Our iron and sulfur removal systems eliminate this odor completely at the source.' },
        { q: 'Do I have hard water in Miami?', a: 'Yes — Miami-Dade water typically measures 150-300 mg/L hardness (very hard). This causes scale on appliances, dry skin, and cloudy dishes. A water softener removes calcium and magnesium for noticeably better water.' },
        { q: 'How quickly can you install a system in Miami?', a: 'We offer same-day service throughout Miami-Dade. Most installations are completed in 2-4 hours. We start with a free water test so you know exactly what you need before any commitment.' },
      ],
      ctaTitle: 'Ready for Better Water',
      ctaHighlight: 'in Miami?',
      ctaSubtitle: 'Get your free professional water test and discover exactly what\'s in your Miami water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Sirviendo el Condado de Miami-Dade',
      title: 'Tratamiento de Agua',
      titleHighlight: 'Miami, FL',
      subtitle: 'Purificación profesional de agua en todo el condado de Miami-Dade. Resolvemos problemas de hierro, azufre, agua dura y calidad de agua de ciudad. Con la confianza de más de 500 familias en Miami.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Años Servicio Local' },
        { end: 500, suffix: '+', label: 'Sistemas Instalados' },
        { end: 100, suffix: '%', label: 'Tasa de Satisfacción' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],
      benefitsTitle: 'Por Qué Elegir Aquaionic',
      benefitsHighlight: 'en Miami',
      benefitsSubtitle: 'Experiencia local para los desafíos únicos de calidad del agua del condado de Miami-Dade',
      benefits: [
        { title: 'Expertos Locales de Miami-Dade', desc: '10+ años sirviendo el condado de Miami-Dade. Conocemos los problemas locales: agua dura del Acuífero Biscayne, hierro en pozos de Homestead, cloro en el agua de ciudad de Miami.' },
        { title: 'Servicio el Mismo Día', desc: 'Respuesta rápida en Miami, Kendall, Coral Gables, Doral y áreas circundantes. Respetamos su tiempo con citas puntuales.' },
        { title: 'Licenciado y Asegurado', desc: 'Contratistas de tratamiento de agua con licencia completa de Florida. Instalación profesional, sistemas certificados NSF y soporte de por vida incluido.' },
      ],
      neighborhoodsTitle: 'Áreas que Servimos en',
      neighborhoodsHighlight: 'el Condado de Miami-Dade',
      neighborhoods: ['Miami y Miami Beach', 'Coral Gables y South Miami', 'Kendall y Pinecrest', 'Doral e Hialeah', 'Homestead y Florida City', 'Key Biscayne y Coconut Grove'],
      servicesTitle: 'Nuestros Servicios',
      servicesHighlight: 'en Miami',
      services: [
        { label: 'Tratamiento de Agua de Pozo', href: '/es/tratamiento-agua-de-pozo' },
        { label: 'Eliminación de Hierro y Azufre', href: '/es/eliminacion-hierro-azufre' },
        { label: 'Soluciones para Agua Dura', href: '/es/soluciones-agua-dura' },
        { label: 'Sistemas de Ósmosis Inversa', href: '/es/sistemas-osmosis-inversa' },
        { label: 'Filtración para Toda la Casa', href: '/es/filtracion-toda-la-casa' },
        { label: 'Purificación de Agua de Ciudad', href: '/es/purificacion-agua-ciudad' },
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqHighlight: 'sobre el Agua de Miami',
      faqs: [
        { q: '¿Es segura el agua del grifo en Miami para beber?', a: 'El agua de Miami-Dade cumple los estándares de la EPA pero contiene cloro, cloraminas y subproductos de desinfección que afectan el sabor y la salud. Nuestros sistemas de filtración mejoran significativamente la calidad más allá de lo que provee la ciudad.' },
        { q: '¿Por qué el agua de mi pozo en Miami huele a huevo podrido?', a: 'El olor a huevo podrido en el agua de pozo de Miami-Dade es causado por el gas sulfuro de hidrógeno, común en la geología del sur de Florida. Nuestros sistemas de eliminación de hierro y azufre eliminan este olor completamente en la fuente.' },
        { q: '¿Tengo agua dura en Miami?', a: 'Sí — el agua de Miami-Dade típicamente mide 150-300 mg/L de dureza (muy dura). Esto causa sarro en electrodomésticos, piel seca y platos nublados. Un ablandador de agua elimina el calcio y el magnesio para agua notablemente mejor.' },
        { q: '¿Qué tan rápido pueden instalar un sistema en Miami?', a: 'Ofrecemos servicio el mismo día en todo Miami-Dade. La mayoría de las instalaciones se completan en 2-4 horas. Comenzamos con un análisis de agua gratuito para que sepa exactamente lo que necesita antes de comprometerse.' },
      ],
      ctaTitle: '¿Listo para Mejor Agua',
      ctaHighlight: 'en Miami?',
      ctaSubtitle: 'Obtenga su análisis profesional de agua gratuito y descubra exactamente qué hay en su agua de Miami',
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
            address: { '@type': 'PostalAddress', addressLocality: 'Miami', addressRegion: 'FL', postalCode: '33101', addressCountry: 'US' },
            areaServed: [
              { '@type': 'City', name: 'Miami' },
              { '@type': 'City', name: 'Coral Gables' },
              { '@type': 'City', name: 'Kendall' },
              { '@type': 'City', name: 'Homestead' },
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
                <Image src="/images/locations/miami.jpg" alt="Water treatment services in Miami FL" fill className="object-cover" sizes="(max-width: 1024px) 0vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm font-semibold text-deep-blue">Miami-Dade County</span>
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
