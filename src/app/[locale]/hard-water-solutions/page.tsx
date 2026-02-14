import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'hard-water-solutions' : 'soluciones-agua-dura';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Hard Water Solutions | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/hard-water-solutions/',
        'es': 'https://aquaionic.us/es/soluciones-agua-dura/',
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

export default function HardWaterSolutionsPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const content = {
    en: {
      badge: 'Save Money & Protect Your Home',
      title: 'Hard Water Solutions',
      subtitle: 'Professional water softeners that remove calcium and magnesium, protecting your plumbing, appliances, and giving you softer skin and hair.',
      cta1: 'Free Water Test',
      cta2: 'Call (305) 467-1525',
      benefitsTitle: 'Transform Your Water Quality',
      benefitsSubtitle: 'Say goodbye to scale buildup and hello to soft, luxurious water',
      benefit1Title: 'Softer Skin & Hair',
      benefit1Text: 'No more dry, itchy skin. Soft water helps your skin retain moisture and makes your hair silky smooth.',
      benefit2Title: 'Save on Energy Bills',
      benefit2Text: 'Scale-free appliances run more efficiently. Save up to 30% on water heating costs.',
      benefit3Title: 'Extend Appliance Life',
      benefit3Text: 'Protect your water heater, dishwasher, and washing machine from damaging scale buildup.',
      featuresTitle: 'Hard Water Problems We Solve',
      featuresSubtitle: 'Professional water softening for Florida homes',
      feature1: 'White scale buildup on faucets & showerheads',
      feature2: 'Dry, itchy skin after showering',
      feature3: 'Water spots on dishes & glassware',
      feature4: 'Soap and shampoo don\'t lather well',
      feature5: 'Stiff, dingy laundry & towels',
      feature6: 'Clogged pipes & reduced water pressure',
      feature7: 'Shortened appliance lifespan',
      feature8: 'High energy bills from scale buildup',
      ctaTitle: 'Ready For Soft Water?',
      ctaSubtitle: 'Test your water hardness for free and see how much money you could save',
      ctaButton: 'Schedule Free Hardness Test',
    },
    es: {
      badge: 'Ahorre Dinero y Proteja Su Hogar',
      title: 'Soluciones para Agua Dura',
      subtitle: 'Ablandadores profesionales que eliminan calcio y magnesio, protegiendo sus tuberías, electrodomésticos y dándole piel y cabello más suaves.',
      cta1: 'Análisis Gratuito',
      cta2: 'Llamar (305) 467-1525',
      benefitsTitle: 'Transforme la Calidad de Su Agua',
      benefitsSubtitle: 'Diga adiós al sarro y hola al agua suave y lujosa',
      benefit1Title: 'Piel y Cabello Más Suaves',
      benefit1Text: 'No más piel seca y con comezón. El agua suave ayuda a su piel a retener humedad y hace su cabello sedoso.',
      benefit2Title: 'Ahorre en Facturas de Energía',
      benefit2Text: 'Los electrodomésticos sin sarro funcionan más eficientemente. Ahorre hasta 30% en costos de calentamiento.',
      benefit3Title: 'Extienda la Vida de Electrodomésticos',
      benefit3Text: 'Proteja su calentador de agua, lavavajillas y lavadora de la acumulación dañina de sarro.',
      featuresTitle: 'Problemas de Agua Dura que Resolvemos',
      featuresSubtitle: 'Ablandamiento profesional de agua para hogares de Florida',
      feature1: 'Acumulación de sarro blanco en grifos y duchas',
      feature2: 'Piel seca y con comezón después de la ducha',
      feature3: 'Manchas de agua en platos y cristalería',
      feature4: 'Jabón y champú no hacen espuma',
      feature5: 'Ropa y toallas rígidas y opacas',
      feature6: 'Tuberías obstruidas y presión de agua reducida',
      feature7: 'Vida útil reducida de electrodomésticos',
      feature8: 'Facturas de energía altas por acumulación de sarro',
      ctaTitle: '¿Listo Para Agua Suave?',
      ctaSubtitle: 'Analice la dureza de su agua gratis y vea cuánto dinero podría ahorrar',
      ctaButton: 'Programar Análisis de Dureza Gratuito',
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
            name: locale === 'en' ? 'Hard Water Solutions' : 'Soluciones para Agua Dura',
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
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-drift-reverse"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
                <span className="text-sm font-semibold">{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold mb-6 animate-fade-up">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-purple-50 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary bg-white text-purple-700 hover:bg-pink-50 hover:shadow-2xl">
                  {t.cta1}
                </a>
                <a href="tel:+13054671525" className="btn-secondary border-white text-white hover:bg-white hover:text-purple-700">
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
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit1Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit1Text}
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-cyan rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {t.benefit2Title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {t.benefit2Text}
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-ocean rounded-2xl flex items-center justify-center mb-6 shadow-cyan">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 backdrop-blur-sm border-2 border-purple-300 shadow-xl">
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="text-7xl animate-float">✨</div>
                    <div>
                      <div className="text-5xl font-jakarta font-extrabold text-purple-600 mb-2">30%</div>
                      <div className="text-sm font-semibold text-purple-800">
                        {locale === 'en' ? 'Lower Energy Costs' : 'Menos Costos de Energía'}
                      </div>
                    </div>
                    <div>
                      <div className="text-5xl font-jakarta font-extrabold text-pink-600 mb-2">2-5x</div>
                      <div className="text-sm font-semibold text-pink-800">
                        {locale === 'en' ? 'Longer Appliance Life' : 'Mayor Vida Útil'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container-custom text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-purple-50 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <a href="#contact" className="btn-primary bg-white text-purple-700 hover:bg-pink-50 hover:shadow-2xl text-lg px-8 py-4">
              {t.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
