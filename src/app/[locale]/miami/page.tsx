import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'miami' : 'miami-es';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Water Purification Miami | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/miami/',
        'es': 'https://aquaionic.us/es/miami-es/',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonical,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default function MiamiPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'Serving Miami-Dade County',
      title: 'Water Purification Miami FL',
      subtitle: 'Professional water treatment services throughout Miami-Dade County. Well water treatment, reverse osmosis, whole house filtration, and water softeners. 10+ years of local service.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',
      benefitsTitle: 'Why Choose Aquaionic in Miami',
      benefitsSubtitle: 'Local expertise for Miami water quality challenges',
      benefit1Title: 'Local Experts',
      benefit1Text: '10+ years serving Miami-Dade County. We understand local water issues including hard water, iron, sulfur, and city water quality.',
      benefit2Title: 'Fast Service',
      benefit2Text: 'Same-day service available. Quick response times throughout Miami, Kendall, Coral Gables, and surrounding areas.',
      benefit3Title: 'Licensed & Insured',
      benefit3Text: 'Fully licensed Florida contractors. Professional installation with lifetime support and maintenance.',
      areasTitle: 'Service Areas in Miami-Dade',
      areasSubtitle: 'Professional water treatment throughout the county',
      area1: 'Miami & Miami Beach',
      area2: 'Coral Gables & South Miami',
      area3: 'Kendall & Pinecrest',
      area4: 'Homestead & Florida City',
      area5: 'Doral & Hialeah',
      area6: 'Key Biscayne & Coconut Grove',
      servicesTitle: 'Our Services in Miami',
      service1: 'Well Water Treatment Systems',
      service2: 'Iron & Sulfur Removal',
      service3: 'Water Softeners',
      service4: 'Reverse Osmosis Systems',
      service5: 'Whole House Filtration',
      service6: 'City Water Purification',
      ctaTitle: 'Ready for Better Water in Miami?',
      ctaSubtitle: 'Get your free water test and discover what\'s in your Miami water',
      ctaButton: 'Schedule Free Water Test',
    },
    es: {
      badge: 'Sirviendo el Condado de Miami-Dade',
      title: 'Purificación de Agua Miami FL',
      subtitle: 'Servicios profesionales de tratamiento de agua en todo el condado de Miami-Dade. Tratamiento de agua de pozo, ósmosis inversa, filtración de toda la casa y ablandadores. 10+ años de servicio local.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',
      benefitsTitle: 'Por Qué Elegir Aquaionic en Miami',
      benefitsSubtitle: 'Experiencia local para los desafíos de calidad del agua de Miami',
      benefit1Title: 'Expertos Locales',
      benefit1Text: '10+ años sirviendo el condado de Miami-Dade. Entendemos los problemas locales del agua incluyendo agua dura, hierro, azufre y calidad del agua de ciudad.',
      benefit2Title: 'Servicio Rápido',
      benefit2Text: 'Servicio el mismo día disponible. Tiempos de respuesta rápidos en Miami, Kendall, Coral Gables y áreas circundantes.',
      benefit3Title: 'Licenciado y Asegurado',
      benefit3Text: 'Contratistas con licencia completa de Florida. Instalación profesional con soporte y mantenimiento de por vida.',
      areasTitle: 'Áreas de Servicio en Miami-Dade',
      areasSubtitle: 'Tratamiento profesional de agua en todo el condado',
      area1: 'Miami y Miami Beach',
      area2: 'Coral Gables y South Miami',
      area3: 'Kendall y Pinecrest',
      area4: 'Homestead y Florida City',
      area5: 'Doral e Hialeah',
      area6: 'Key Biscayne y Coconut Grove',
      servicesTitle: 'Nuestros Servicios en Miami',
      service1: 'Sistemas de Tratamiento de Agua de Pozo',
      service2: 'Eliminación de Hierro y Azufre',
      service3: 'Ablandadores de Agua',
      service4: 'Sistemas de Ósmosis Inversa',
      service5: 'Filtración de Toda la Casa',
      service6: 'Purificación de Agua de Ciudad',
      ctaTitle: '¿Listo para Mejor Agua en Miami?',
      ctaSubtitle: 'Obtenga su análisis de agua gratuito y descubra qué hay en su agua de Miami',
      ctaButton: 'Programar Análisis Gratuito',
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aquaionic Water Purification - Miami',
            description: t.subtitle,
            areaServed: {
              '@type': 'City',
              name: 'Miami',
              containedIn: {
                '@type': 'AdministrativeArea',
                name: 'Florida',
              },
            },
            url: 'https://aquaionic.us/miami/',
            telephone: '+1-305-467-1525',
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-pink-600 via-orange-500 to-yellow-400 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up drop-shadow-lg">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed animate-fade-up drop-shadow" style={{ animationDelay: '0.1s' }}>
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary bg-white text-orange-600 hover:bg-yellow-50 hover:shadow-2xl">
                  {t.cta1}
                </a>
                <a href="tel:+13054671525" className="btn-secondary border-white text-white hover:bg-white hover:text-orange-600">
                  {t.cta2}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-ghost">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                {t.benefitsTitle}
              </h2>
              <p className="text-lg md:text-xl text-text-mid">
                {t.benefitsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit1Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit1Text}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-cyan rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit2Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit2Text}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-ocean rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit3Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit3Text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                {t.areasTitle}
              </h2>
              <p className="text-lg md:text-xl text-text-mid">
                {t.areasSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[t.area1, t.area2, t.area3, t.area4, t.area5, t.area6].map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-ghost to-white p-6 rounded-xl border-2 border-cyan/20 hover:border-cyan/40 transition-all hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-lg font-semibold text-deep-blue">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-ghost">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                {t.servicesTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[t.service1, t.service2, t.service3, t.service4, t.service5, t.service6].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-semibold text-deep-blue">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-pink-600 via-orange-500 to-yellow-400 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6 drop-shadow-lg">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-orange-600 hover:bg-yellow-50 hover:shadow-2xl text-lg px-8 py-4">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
