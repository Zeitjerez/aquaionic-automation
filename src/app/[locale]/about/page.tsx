import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Droplets, ShieldCheck, Users, Star, MapPin, Award, Wrench, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const title = locale === 'en'
    ? 'About Aquaionic | Water Purification Experts in South Florida'
    : 'Sobre Aquaionic | Expertos en Purificación de Agua en el Sur de Florida';
  const description = locale === 'en'
    ? 'Family-owned water purification company serving South Florida since 2010. 500+ systems installed. NSF & FDA certified. Serving Miami-Dade, Broward, and Palm Beach County. Licensed & insured.'
    : 'Empresa familiar de purificación de agua sirviendo el sur de Florida desde 2010. Más de 500 sistemas instalados. Certificados NSF y FDA. Sirviendo Miami-Dade, Broward y el condado de Palm Beach. Con licencia y asegurados.';

  return {
    title,
    description,
    keywords: locale === 'en'
      ? 'Aquaionic water purification, about Aquaionic, water treatment company South Florida, NSF certified water treatment, family owned water purification Florida'
      : 'Aquaionic purificación agua, sobre Aquaionic, empresa tratamiento agua sur de Florida, certificado NSF tratamiento agua, empresa familiar purificación agua Florida',
    alternates: {
      canonical: `https://aquaionic.us/${locale}/about/`,
      languages: {
        'en': 'https://aquaionic.us/en/about/',
        'es': 'https://aquaionic.us/es/about/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/about/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function AboutPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const en = locale === 'en';

  const content = {
    en: {
      heroBadge: 'South Florida\'s Water Purification Experts',
      heroTitle: 'Pure Water,',
      heroHighlight: 'Real Results',
      heroSubtitle: 'Since 2010, Aquaionic has helped South Florida families enjoy clean, safe, great-tasting water. We are a family-owned business built on honesty, expertise, and a genuine commitment to your health and home.',
      heroCtaPrimary: 'Get Free Water Test',
      heroCtaSecondary: 'Call (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Years in Business' },
        { end: 500, suffix: '+', label: 'Systems Installed' },
        { end: 3, suffix: '', label: 'Counties Served' },
        { end: 100, suffix: '%', label: 'Satisfaction Guaranteed' },
      ],
      storyTitle: 'Our',
      storyHighlight: 'Story',
      story: [
        'Aquaionic was founded in 2010 with a simple mission: give South Florida families access to clean, healthy water they can trust. Growing up in Miami, our founders saw firsthand the water quality challenges that local families face — hard water staining sinks, sulfur odors from well water, and city tap water that never quite tasted right.',
        'We started small, serving our own neighborhood, and grew through word of mouth because we deliver results. Today, we\'ve installed over 500 water treatment systems across Miami-Dade, Broward, and Palm Beach County, and we\'re still the same family-owned business that answers your call personally and stands behind every installation.',
        'What sets us apart is not just our NSF-certified systems or our licensed technicians — it\'s the fact that we treat every home like our own. We start with a free, comprehensive water test, explain exactly what we find, and recommend only what your water actually needs.',
      ],
      valuesTitle: 'What We',
      valuesHighlight: 'Stand For',
      values: [
        { icon: ShieldCheck, title: 'Honesty First', desc: 'We test your water, tell you the truth about what\'s in it, and recommend only what you actually need. No upselling, no scare tactics.' },
        { icon: Award, title: 'Certified Excellence', desc: 'All our systems carry NSF and FDA certifications. Our technicians are Florida-licensed and stay current on the latest water treatment technology.' },
        { icon: Users, title: 'Community Focused', desc: 'We are proud members of the South Florida community. We hire locally, support local causes, and take our environmental responsibility seriously.' },
        { icon: Wrench, title: 'Lasting Solutions', desc: 'We install systems built to last, with professional setup and lifetime support. We\'re not done until your water is perfect — and we back that up.' },
        { icon: Droplets, title: 'Water Knowledge', desc: 'South Florida has unique water challenges: Biscayne Aquifer hardness, Everglades-influenced well water, and chloramine-treated city water. We know every one of them.' },
        { icon: Star, title: 'Your Satisfaction', desc: '100% satisfaction guaranteed on every installation. If something is not right, we come back and make it right — simple as that.' },
      ],
      servingTitle: 'Serving',
      servingHighlight: 'South Florida',
      servingSubtitle: 'Three counties, hundreds of communities, one mission: clean water for every family',
      areas: [
        { county: 'Miami-Dade County', cities: 'Miami, Coral Gables, Kendall, Doral, Homestead, Hialeah, Miami Beach, South Miami, Pinecrest, Key Biscayne' },
        { county: 'Broward County', cities: 'Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, Plantation, Davie, Sunrise, Miramar, Coconut Creek, Hallandale Beach' },
        { county: 'Palm Beach County', cities: 'Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Palm Beach Gardens, Jupiter, Wellington, Lake Worth, Loxahatchee' },
      ],
      certTitle: 'Our',
      certHighlight: 'Certifications',
      certs: [
        'NSF/ANSI 58 — Reverse Osmosis Systems',
        'NSF/ANSI 44 — Water Softeners',
        'NSF/ANSI 42 — Aesthetic Effects Filtration',
        'Florida Licensed Water Treatment Contractor',
        'FDA Compliant Materials & Components',
        'Fully Licensed & Insured — State of Florida',
      ],
      ctaTitle: 'Ready to Experience',
      ctaHighlight: 'Better Water?',
      ctaSubtitle: 'Join 500+ South Florida families who trust Aquaionic for clean, safe, great-tasting water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      heroBadge: 'Expertos en Purificación de Agua en el Sur de Florida',
      heroTitle: 'Agua Pura,',
      heroHighlight: 'Resultados Reales',
      heroSubtitle: 'Desde 2010, Aquaionic ha ayudado a familias del sur de Florida a disfrutar de agua limpia, segura y con buen sabor. Somos una empresa familiar construida sobre la honestidad, la experiencia y un compromiso genuino con su salud y su hogar.',
      heroCtaPrimary: 'Análisis de Agua Gratis',
      heroCtaSecondary: 'Llamar (305) 467-1525',
      stats: [
        { end: 10, suffix: '+', label: 'Años en el Negocio' },
        { end: 500, suffix: '+', label: 'Sistemas Instalados' },
        { end: 3, suffix: '', label: 'Condados Servidos' },
        { end: 100, suffix: '%', label: 'Satisfacción Garantizada' },
      ],
      storyTitle: 'Nuestra',
      storyHighlight: 'Historia',
      story: [
        'Aquaionic fue fundado en 2010 con una misión simple: dar a las familias del sur de Florida acceso a agua limpia y saludable en la que puedan confiar. Al crecer en Miami, nuestros fundadores vieron de primera mano los desafíos de calidad del agua que enfrentan las familias locales: manchas de agua dura en lavabos, olores a azufre del agua de pozo, y agua del grifo que nunca sabía del todo bien.',
        'Empezamos de manera pequeña, sirviendo a nuestro propio vecindario, y crecimos gracias al boca a boca porque entregamos resultados. Hoy hemos instalado más de 500 sistemas de tratamiento de agua en Miami-Dade, Broward y el condado de Palm Beach, y seguimos siendo la misma empresa familiar que responde su llamada personalmente y respalda cada instalación.',
        'Lo que nos distingue no son solo nuestros sistemas certificados NSF o nuestros técnicos con licencia — es el hecho de que tratamos cada hogar como el nuestro. Comenzamos con un análisis de agua gratuito y completo, explicamos exactamente lo que encontramos, y recomendamos solo lo que su agua realmente necesita.',
      ],
      valuesTitle: 'Lo Que',
      valuesHighlight: 'Defendemos',
      values: [
        { icon: ShieldCheck, title: 'Honestidad Primero', desc: 'Analizamos su agua, le decimos la verdad sobre lo que contiene, y recomendamos solo lo que realmente necesita. Sin ventas agresivas, sin tácticas de miedo.' },
        { icon: Award, title: 'Excelencia Certificada', desc: 'Todos nuestros sistemas llevan certificaciones NSF y FDA. Nuestros técnicos tienen licencia de Florida y se mantienen actualizados sobre la última tecnología de tratamiento de agua.' },
        { icon: Users, title: 'Enfocados en la Comunidad', desc: 'Somos miembros orgullosos de la comunidad del sur de Florida. Contratamos localmente, apoyamos causas locales y nos tomamos en serio nuestra responsabilidad ambiental.' },
        { icon: Wrench, title: 'Soluciones Duraderas', desc: 'Instalamos sistemas diseñados para durar, con instalación profesional y soporte de por vida. No terminamos hasta que su agua sea perfecta — y lo respaldamos.' },
        { icon: Droplets, title: 'Conocimiento del Agua', desc: 'El sur de Florida tiene desafíos únicos: dureza del Acuífero Biscayne, agua de pozo influenciada por los Everglades y agua de ciudad tratada con cloraminas. Conocemos cada uno de ellos.' },
        { icon: Star, title: 'Su Satisfacción', desc: 'Garantía de satisfacción del 100% en cada instalación. Si algo no está bien, regresamos y lo arreglamos — así de simple.' },
      ],
      servingTitle: 'Sirviendo',
      servingHighlight: 'el Sur de Florida',
      servingSubtitle: 'Tres condados, cientos de comunidades, una misión: agua limpia para cada familia',
      areas: [
        { county: 'Condado de Miami-Dade', cities: 'Miami, Coral Gables, Kendall, Doral, Homestead, Hialeah, Miami Beach, South Miami, Pinecrest, Key Biscayne' },
        { county: 'Condado de Broward', cities: 'Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, Plantation, Davie, Sunrise, Miramar, Coconut Creek, Hallandale Beach' },
        { county: 'Condado de Palm Beach', cities: 'Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Palm Beach Gardens, Jupiter, Wellington, Lake Worth, Loxahatchee' },
      ],
      certTitle: 'Nuestras',
      certHighlight: 'Certificaciones',
      certs: [
        'NSF/ANSI 58 — Sistemas de Ósmosis Inversa',
        'NSF/ANSI 44 — Ablandadores de Agua',
        'NSF/ANSI 42 — Filtración de Efectos Estéticos',
        'Contratista de Tratamiento de Agua con Licencia de Florida',
        'Materiales y Componentes Conformes con la FDA',
        'Completamente Licenciado y Asegurado — Estado de Florida',
      ],
      ctaTitle: '¿Listo para Experimentar',
      ctaHighlight: 'Mejor Agua?',
      ctaSubtitle: 'Únase a más de 500 familias del sur de Florida que confían en Aquaionic para agua limpia, segura y con buen sabor',
      ctaButton: 'Programar Análisis Gratuito',
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Aquaionic Water Purification',
            url: 'https://aquaionic.us',
            telephone: '+1-305-467-1525',
            email: 'info@aquaionic.us',
            foundingDate: '2010',
            description: t.heroSubtitle,
            areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
            sameAs: [],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-white pt-[72px]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-[13px] font-semibold text-cyan mb-8">
                {t.heroBadge}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-bold text-deep-blue mb-6 leading-tight tracking-tight">
                {t.heroTitle}
                <br />
                <span className="text-cyan">{t.heroHighlight}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">{t.heroSubtitle}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan text-white font-semibold text-[15px] rounded-xl hover:bg-cyan-soft transition-colors duration-200 animate-breathe">
                  {t.heroCtaPrimary}<ArrowRight size={18} strokeWidth={2.5} />
                </Link>
                <a href="tel:+13054671525" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border-2 border-gray-200 text-deep-blue font-semibold text-[15px] rounded-xl hover:border-cyan hover:text-cyan transition-colors duration-200">
                  {t.heroCtaSecondary}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-ghost">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
                  <div className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue tracking-tight mb-2">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-[12px] font-semibold text-text-light uppercase tracking-[0.08em]">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-8 tracking-tight">
                  {t.storyTitle}{' '}<span className="text-cyan">{t.storyHighlight}</span>
                </h2>
                <div className="space-y-5">
                  {t.story.map((para, i) => (
                    <p key={i} className="text-[16px] text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Droplets, label: en ? 'Free Water Testing' : 'Análisis Gratuito', desc: en ? 'for every customer' : 'para cada cliente' },
                  { icon: ShieldCheck, label: en ? 'NSF Certified' : 'Certificado NSF', desc: en ? 'all our systems' : 'todos nuestros sistemas' },
                  { icon: Award, label: en ? 'Licensed' : 'Licenciado', desc: en ? 'State of Florida' : 'Estado de Florida' },
                  { icon: Star, label: en ? '100% Satisfaction' : '100% Satisfacción', desc: en ? 'guaranteed' : 'garantizada' },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 mx-auto">
                      <item.icon size={22} className="text-cyan" strokeWidth={2} />
                    </div>
                    <div className="text-[14px] font-bold text-deep-blue leading-tight">{item.label}</div>
                    <div className="text-[12px] text-gray-500 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.valuesTitle}{' '}<span className="text-cyan">{t.valuesHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="h-full bg-white rounded-2xl border border-gray-100 p-7 hover:border-gray-200 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-cyan" strokeWidth={2} />
                  </div>
                  <h3 className="text-[18px] font-jakarta font-bold text-deep-blue mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.servingTitle}{' '}<span className="text-cyan">{t.servingHighlight}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[17px] text-gray-600 leading-relaxed">{t.servingSubtitle}</p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.areas.map((area, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="h-full bg-white rounded-2xl border border-gray-100 p-7 hover:border-gray-200 transition-colors duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-cyan" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[16px] font-jakarta font-bold text-deep-blue tracking-tight">{area.county}</h3>
                  </div>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed">{area.cities}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
                {t.certTitle}{' '}<span className="text-cyan">{t.certHighlight}</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {t.certs.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-cyan/30 transition-colors duration-200">
                  <CheckCircle size={20} className="text-cyan flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-[14px] font-semibold text-deep-blue leading-tight">{cert}</span>
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
