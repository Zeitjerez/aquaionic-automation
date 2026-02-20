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
    ? 'Water Purification Palm Beach FL | Well Water & City Water Treatment | Aquaionic'
    : 'Purificación de Agua Palm Beach FL | Tratamiento Agua de Pozo y Ciudad | Aquaionic';
  const description = locale === 'en'
    ? 'Professional water purification in Palm Beach & northern Palm Beach County. Well water treatment, reverse osmosis, water softeners, iron removal. 10+ years serving South Florida. NSF certified. Free water test. Call (305) 467-1525.'
    : 'Purificación profesional de agua en Palm Beach y el norte del condado de Palm Beach. Tratamiento agua de pozo, ósmosis inversa, ablandadores, eliminación de hierro. 10+ años en el sur de Florida. Certificado NSF. Análisis gratis. (305) 467-1525.';
  const keywords = locale === 'en'
    ? 'water purification Palm Beach, water treatment Palm Beach FL, well water Palm Beach, water softener West Palm Beach, reverse osmosis Palm Beach Gardens, iron removal Jupiter FL, hard water Palm Beach County, water filter Wellington FL'
    : 'purificación agua Palm Beach, tratamiento agua Palm Beach FL, agua de pozo Palm Beach, ablandador agua West Palm Beach, ósmosis inversa Palm Beach Gardens, eliminación hierro Jupiter FL, agua dura Palm Beach, filtro agua Wellington FL';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://aquaionic.us/${locale}/palm-beach/`,
      languages: {
        'en': 'https://aquaionic.us/en/palm-beach/',
        'es': 'https://aquaionic.us/es/palm-beach/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/palm-beach/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [{ url: 'https://aquaionic.us/images/locations/palm-beach.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function PalmBeachPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const en = locale === 'en';

  const content = {
    en: {
      badge: 'Serving Northern Palm Beach County',
      title: 'Water Treatment',
      titleHighlight: 'Palm Beach, FL',
      subtitle: 'Professional water purification throughout Palm Beach and northern Palm Beach County. We solve well water iron, sulfur, hard water, and city water quality issues for Jupiter, Palm Beach Gardens, and surrounding areas.',
      ctaPrimary: 'Get Free Water Test',
      ctaSecondary: 'Call (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Years Local Service' },
        { end: 350, suffix: '+', label: 'Systems Installed' },
        { end: 100, suffix: '%', label: 'Satisfaction Rate' },
        { end: 24, suffix: '/7', label: 'Support Available' },
      ],
      benefitsTitle: 'Why Choose Aquaionic',
      benefitsHighlight: 'in Palm Beach',
      benefitsSubtitle: 'Local expertise for the unique water quality challenges of northern Palm Beach County',
      benefits: [
        { title: 'Northern Palm Beach County Experts', desc: '10+ years serving Palm Beach, Jupiter, Palm Beach Gardens, and the northern county communities. We know the area\'s limestone-rich water, private well challenges in acreage communities, and the unique needs of the Treasure Coast.' },
        { title: 'Responsive Local Service', desc: 'Quick response times throughout Palm Beach, West Palm Beach, Jupiter, Palm Beach Gardens, Lake Worth Beach, and Wellington. We keep your schedule and get the job done right the first time.' },
        { title: 'Certified & Guaranteed Work', desc: 'Florida-licensed and insured water treatment specialists. NSF-certified systems with manufacturer warranties, professional installation, and a commitment to your long-term satisfaction.' },
      ],
      neighborhoodsTitle: 'Areas We Serve in',
      neighborhoodsHighlight: 'Palm Beach County',
      neighborhoods: ['Palm Beach & West Palm Beach', 'Jupiter & Jupiter Farms', 'Palm Beach Gardens & North Palm Beach', 'Lake Worth Beach & Lantana', 'Wellington & Loxahatchee', 'Delray Beach & Boynton Beach'],
      servicesTitle: 'Our Services',
      servicesHighlight: 'in Palm Beach',
      services: [
        { label: 'Well Water Treatment', href: '/en/well-water-treatment' },
        { label: 'Iron & Sulfur Removal', href: '/en/iron-sulfur-removal' },
        { label: 'Hard Water Solutions', href: '/en/hard-water-solutions' },
        { label: 'Reverse Osmosis Systems', href: '/en/reverse-osmosis-systems' },
        { label: 'Whole House Filtration', href: '/en/whole-house-filtration' },
        { label: 'City Water Purification', href: '/en/city-water-purification' },
      ],
      faqTitle: 'Palm Beach Water',
      faqHighlight: 'FAQs',
      faqs: [
        { q: 'What water quality problems are common in Palm Beach County?', a: 'Northern Palm Beach County has two distinct water challenges: city water users deal with chloramines and disinfection byproducts, while well water users in Jupiter Farms, Loxahatchee, and acreage communities often encounter high iron, sulfur, and hardness that require whole-house treatment.' },
        { q: 'Is well water in Jupiter and Jupiter Farms safe to use?', a: 'Well water in Jupiter and rural Palm Beach County areas can be safe with proper treatment. Common issues include iron staining, sulfur odors, high hardness, and occasional bacterial contamination. We recommend a comprehensive water test and a matched filtration solution.' },
        { q: 'How hard is the water in West Palm Beach?', a: 'West Palm Beach municipal water typically measures 180–320 mg/L of hardness — classified as very hard. This significantly affects appliance longevity, soap efficiency, and the feel of water on skin and hair. A water softener resolves all these issues.' },
        { q: 'Do you install reverse osmosis systems in Palm Beach County?', a: 'Yes — we install reverse osmosis systems throughout Palm Beach County for drinking water purification. RO systems remove up to 99% of contaminants including chlorine, lead, nitrates, PFAS, and more. Installation is typically completed in 1–2 hours.' },
      ],
      ctaTitle: 'Ready for Better Water',
      ctaHighlight: 'in Palm Beach?',
      ctaSubtitle: 'Get your free professional water test and discover exactly what\'s in your Palm Beach County water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Sirviendo el Norte del Condado de Palm Beach',
      title: 'Tratamiento de Agua',
      titleHighlight: 'Palm Beach, FL',
      subtitle: 'Purificación profesional de agua en Palm Beach y el norte del condado de Palm Beach. Resolvemos problemas de hierro, azufre, agua dura y calidad del agua de ciudad en Jupiter, Palm Beach Gardens y áreas cercanas.',
      ctaPrimary: 'Análisis de Agua Gratis',
      ctaSecondary: 'Llamar (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Años Servicio Local' },
        { end: 350, suffix: '+', label: 'Sistemas Instalados' },
        { end: 100, suffix: '%', label: 'Tasa de Satisfacción' },
        { end: 24, suffix: '/7', label: 'Soporte Disponible' },
      ],
      benefitsTitle: 'Por Qué Elegir Aquaionic',
      benefitsHighlight: 'en Palm Beach',
      benefitsSubtitle: 'Experiencia local para los desafíos únicos de calidad del agua en el norte del condado de Palm Beach',
      benefits: [
        { title: 'Expertos en el Norte del Condado', desc: '10+ años sirviendo Palm Beach, Jupiter, Palm Beach Gardens y las comunidades del norte del condado. Conocemos el agua rica en caliza del área, los desafíos de pozos en comunidades rurales, y las necesidades únicas de la Treasure Coast.' },
        { title: 'Servicio Local Ágil', desc: 'Tiempos de respuesta rápidos en Palm Beach, West Palm Beach, Jupiter, Palm Beach Gardens, Lake Worth Beach y Wellington. Cumplimos su horario y hacemos el trabajo bien desde la primera vez.' },
        { title: 'Trabajo Certificado y Garantizado', desc: 'Especialistas en tratamiento de agua con licencia y seguro de Florida. Sistemas con certificación NSF y garantía del fabricante, instalación profesional y compromiso con su satisfacción a largo plazo.' },
      ],
      neighborhoodsTitle: 'Áreas que Servimos en',
      neighborhoodsHighlight: 'el Condado de Palm Beach',
      neighborhoods: ['Palm Beach y West Palm Beach', 'Jupiter y Jupiter Farms', 'Palm Beach Gardens y North Palm Beach', 'Lake Worth Beach y Lantana', 'Wellington y Loxahatchee', 'Delray Beach y Boynton Beach'],
      servicesTitle: 'Nuestros Servicios',
      servicesHighlight: 'en Palm Beach',
      services: [
        { label: 'Tratamiento de Agua de Pozo', href: '/es/tratamiento-agua-de-pozo' },
        { label: 'Eliminación de Hierro y Azufre', href: '/es/eliminacion-hierro-azufre' },
        { label: 'Soluciones para Agua Dura', href: '/es/soluciones-agua-dura' },
        { label: 'Sistemas de Ósmosis Inversa', href: '/es/sistemas-osmosis-inversa' },
        { label: 'Filtración para Toda la Casa', href: '/es/filtracion-toda-la-casa' },
        { label: 'Purificación de Agua de Ciudad', href: '/es/purificacion-agua-ciudad' },
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqHighlight: 'sobre el Agua de Palm Beach',
      faqs: [
        { q: '¿Qué problemas de calidad del agua son comunes en el condado de Palm Beach?', a: 'El norte del condado de Palm Beach tiene dos desafíos distintos: los usuarios de agua municipal enfrentan cloraminas y subproductos de desinfección, mientras que los usuarios de pozos en Jupiter Farms, Loxahatchee y zonas rurales suelen encontrar alto contenido de hierro, azufre y dureza.' },
        { q: '¿Es segura el agua de pozo en Jupiter y Jupiter Farms?', a: 'El agua de pozo en Jupiter y las áreas rurales del condado de Palm Beach puede ser segura con el tratamiento adecuado. Los problemas comunes incluyen manchas de hierro, olores a azufre, alta dureza y contaminación bacteriana ocasional. Recomendamos un análisis completo del agua.' },
        { q: '¿Qué tan dura es el agua en West Palm Beach?', a: 'El agua municipal de West Palm Beach mide típicamente 180–320 mg/L de dureza — clasificada como muy dura. Esto afecta significativamente la vida útil de los electrodomésticos, la eficiencia del jabón y la sensación del agua en piel y cabello. Un ablandador de agua resuelve todos estos problemas.' },
        { q: '¿Instalan sistemas de ósmosis inversa en el condado de Palm Beach?', a: 'Sí — instalamos sistemas de ósmosis inversa en todo el condado de Palm Beach para purificación del agua potable. Los sistemas RO eliminan hasta el 99% de los contaminantes incluyendo cloro, plomo, nitratos, PFAS y más. La instalación se completa típicamente en 1-2 horas.' },
      ],
      ctaTitle: '¿Listo para Mejor Agua',
      ctaHighlight: 'en Palm Beach?',
      ctaSubtitle: 'Obtenga su análisis profesional de agua gratuito y descubra exactamente qué hay en su agua en el condado de Palm Beach',
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
            address: { '@type': 'PostalAddress', addressLocality: 'Palm Beach', addressRegion: 'FL', postalCode: '33480', addressCountry: 'US' },
            areaServed: [
              { '@type': 'City', name: 'Palm Beach' },
              { '@type': 'City', name: 'West Palm Beach' },
              { '@type': 'City', name: 'Jupiter' },
              { '@type': 'City', name: 'Palm Beach Gardens' },
            ],
            openingHours: 'Mo-Fr 08:00-18:00',
            priceRange: '$$',
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
              { '@type': 'ListItem', position: 2, name: 'Palm Beach', item: 'https://aquaionic.us/en/palm-beach/' },
            ],
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
                <Image src="/images/locations/palm-beach.jpg" alt="Water treatment services in Palm Beach FL" fill className="object-cover" sizes="(max-width: 1024px) 0vw, 50vw" />
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
