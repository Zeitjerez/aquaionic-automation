import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'whole-house-filtration' : 'filtracion-toda-la-casa';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Whole House Filtration | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/whole-house-filtration/',
        'es': 'https://aquaionic.us/es/filtracion-toda-la-casa/',
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

export default function WholeHouseFiltrationPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'Complete Home Protection',
      title: 'Whole House Water Filtration',
      subtitle: 'Clean, filtered water from every tap in your home. Comprehensive filtration removes chlorine, sediment, chemicals, and contaminants throughout your entire house.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',
      benefitsTitle: 'Every Tap, Every Time',
      benefitsSubtitle: 'Comprehensive whole-house water filtration for Florida homes',
      benefit1Title: 'Total Home Coverage',
      benefit1Text: 'Clean water from every faucet, shower, washing machine, and appliance in your home.',
      benefit2Title: 'Healthier Living',
      benefit2Text: 'Remove chlorine, chemicals, and contaminants for healthier drinking, cooking, and bathing.',
      benefit3Title: 'Protect Your Investment',
      benefit3Text: 'Extend the life of plumbing, appliances, and water heaters by filtering out damaging sediment.',
      featuresTitle: 'Complete Home Protection',
      featuresSubtitle: 'Multi-stage filtration for your entire home',
      feature1: 'Chlorine & chemical removal',
      feature2: 'Sediment & rust filtration',
      feature3: 'Improved water taste & odor',
      feature4: 'Soft, clean water for bathing',
      feature5: 'Protects all appliances',
      feature6: 'Reduces soap & detergent use',
      feature7: 'Removes volatile organic compounds (VOCs)',
      feature8: 'Low maintenance operation',
      ctaTitle: 'Ready For Clean Water Everywhere?',
      ctaSubtitle: 'Transform your entire home with professional whole-house filtration',
      ctaButton: 'Get Your Free Quote',
    },
    es: {
      badge: 'Protección Completa del Hogar',
      title: 'Filtración de Agua para Toda la Casa',
      subtitle: 'Agua limpia y filtrada de cada grifo en su hogar. Filtración completa elimina cloro, sedimentos, químicos y contaminantes en toda su casa.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',
      benefitsTitle: 'Cada Grifo, Cada Vez',
      benefitsSubtitle: 'Filtración completa de agua para toda la casa para hogares de Florida',
      benefit1Title: 'Cobertura Total del Hogar',
      benefit1Text: 'Agua limpia de cada grifo, ducha, lavadora y electrodoméstico en su hogar.',
      benefit2Title: 'Vida Más Saludable',
      benefit2Text: 'Elimine cloro, químicos y contaminantes para beber, cocinar y bañarse más saludable.',
      benefit3Title: 'Proteja Su Inversión',
      benefit3Text: 'Extienda la vida de tuberías, electrodomésticos y calentadores filtrando sedimentos dañinos.',
      featuresTitle: 'Protección Completa del Hogar',
      featuresSubtitle: 'Filtración de múltiples etapas para toda su casa',
      feature1: 'Eliminación de cloro y químicos',
      feature2: 'Filtración de sedimentos y óxido',
      feature3: 'Mejor sabor y olor del agua',
      feature4: 'Agua suave y limpia para bañarse',
      feature5: 'Protege todos los electrodomésticos',
      feature6: 'Reduce uso de jabón y detergente',
      feature7: 'Elimina compuestos orgánicos volátiles (COVs)',
      feature8: 'Operación de bajo mantenimiento',
      ctaTitle: '¿Listo Para Agua Limpia en Todas Partes?',
      ctaSubtitle: 'Transforme toda su casa con filtración profesional para toda la casa',
      ctaButton: 'Obtenga Su Cotización Gratuita',
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
            '@type': 'Service',
            name: locale === 'en' ? 'Whole House Water Filtration' : 'Filtración de Agua para Toda la Casa',
            provider: {
              '@type': 'Organization',
              name: 'Aquaionic',
              url: 'https://aquaionic.us',
            },
            areaServed: {
              '@type': 'State',
              name: 'Florida',
            },
            description: t.subtitle,
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-emerald-900 via-teal-700 to-cyan overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-emerald-50 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary bg-white text-teal-700 hover:bg-cyan-50 hover:shadow-2xl">
                  {t.cta1}
                </a>
                <a href="tel:+13054671525" className="btn-secondary border-white text-white hover:bg-white hover:text-teal-700">
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
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                  {t.featuresTitle}
                </h2>
                <p className="text-lg text-text-mid mb-8">
                  {t.featuresSubtitle}
                </p>
                <ul className="space-y-4">
                  {[t.feature1, t.feature2, t.feature3, t.feature4, t.feature5, t.feature6, t.feature7, t.feature8].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-text-mid">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-12 backdrop-blur-sm border-2 border-teal-300 shadow-xl">
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <div className="text-8xl mb-4 animate-float">🏠</div>
                      <div className="text-5xl font-jakarta font-extrabold text-gradient mb-2">100%</div>
                      <div className="text-xl font-semibold text-ocean">
                        {locale === 'en' ? 'Home Coverage' : 'Cobertura del Hogar'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-emerald-900 via-teal-700 to-cyan text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-teal-700 hover:bg-cyan-50 hover:shadow-2xl text-lg px-8 py-4">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
