// ============================================================
// 🔧 AQUAIONIC PAGE TEMPLATES - Copy & Paste Ready
// ============================================================

// ============================================================
// SERVICE PAGE TEMPLATE
// File: src/app/[locale]/[service-slug]/page.tsx
// ============================================================

import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/content/pages';

interface ServicePageProps {
  params: { locale: string };
}

// 📝 CONTENIDO - Reemplazar con datos del servicio
const content = {
  en: {
    // Hero
    badge: 'Professional Solutions',
    heroTitle: 'Your Service Title',
    heroHighlight: 'Highlighted',
    heroSubtitle: 'Description of the service and its main benefit for the customer.',
    heroCta: 'Get Free Water Test',

    // Features Section
    featuresLabel: 'Why Choose Us',
    featuresTitle: 'Key Benefits',
    featuresSubtitle: 'What makes our service stand out.',
    features: [
      'Feature 1: Description here',
      'Feature 2: Description here',
      'Feature 3: Description here',
      'Feature 4: Description here',
      'Feature 5: Description here',
      'Feature 6: Description here',
    ],

    // Stats
    statValue: '99%',
    statLabel: 'Customer Satisfaction',
    statEmoji: '💧',

    // Process Section (optional)
    processLabel: 'How It Works',
    processTitle: 'Our Simple Process',
    processSteps: [
      { number: '01', title: 'Free Consultation', desc: 'We test your water' },
      { number: '02', title: 'Custom Solution', desc: 'We design your system' },
      { number: '03', title: 'Installation', desc: 'Professional setup' },
      { number: '04', title: 'Support', desc: 'Ongoing maintenance' },
    ],

    // CTA
    ctaTitle: 'Ready to Improve Your Water?',
    ctaSubtitle: 'Contact us today for a free consultation and water test.',
    ctaButton: 'Schedule Free Test',
  },
  es: {
    badge: 'Soluciones Profesionales',
    heroTitle: 'Título del Servicio',
    heroHighlight: 'Destacado',
    heroSubtitle: 'Descripción del servicio y su beneficio principal para el cliente.',
    heroCta: 'Prueba de Agua Gratis',

    featuresLabel: 'Por Qué Elegirnos',
    featuresTitle: 'Beneficios Clave',
    featuresSubtitle: 'Lo que hace especial nuestro servicio.',
    features: [
      'Característica 1: Descripción aquí',
      'Característica 2: Descripción aquí',
      'Característica 3: Descripción aquí',
      'Característica 4: Descripción aquí',
      'Característica 5: Descripción aquí',
      'Característica 6: Descripción aquí',
    ],

    statValue: '99%',
    statLabel: 'Satisfacción del Cliente',
    statEmoji: '💧',

    processLabel: 'Cómo Funciona',
    processTitle: 'Nuestro Proceso Simple',
    processSteps: [
      { number: '01', title: 'Consulta Gratis', desc: 'Analizamos tu agua' },
      { number: '02', title: 'Solución Personalizada', desc: 'Diseñamos tu sistema' },
      { number: '03', title: 'Instalación', desc: 'Configuración profesional' },
      { number: '04', title: 'Soporte', desc: 'Mantenimiento continuo' },
    ],

    ctaTitle: '¿Listo para Mejorar tu Agua?',
    ctaSubtitle: 'Contáctanos hoy para una consulta gratuita y prueba de agua.',
    ctaButton: 'Programar Prueba Gratis',
  }
};

// 📝 Cambiar 'service-slug' por el slug real (well-water-treatment, etc.)
export async function generateMetadata({ params: { locale } }: ServicePageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'service-slug' : 'servicio-slug';
  const meta = getPageMetadata(slug, locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.canonical,
      languages: {
        'en': '/service-slug',
        'es': '/es/servicio-slug',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
  };
}

export default function ServicePage({ params: { locale } }: ServicePageProps) {
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-deep-blue via-ocean to-cyan flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-green/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t.badge}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold text-white mb-6 leading-tight">
              {t.heroTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-accent-green">
                {t.heroHighlight}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                {t.heroCta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="tel:+13054671525" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                (305) 467-1525
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="section-padding bg-ghost">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Column */}
            <div>
              <span className="section-label">{t.featuresLabel}</span>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                {t.featuresTitle}
              </h2>
              <p className="text-lg text-text-mid mb-8">
                {t.featuresSubtitle}
              </p>

              <ul className="space-y-4">
                {t.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-text-mid">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Column - Stats Box */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-100 to-white rounded-3xl p-12 backdrop-blur-sm border-2 border-cyan/30 shadow-xl">
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-8xl mb-4 animate-float">{t.statEmoji}</div>
                    <div className="text-6xl font-jakarta font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-cyan mb-2">
                      {t.statValue}
                    </div>
                    <div className="text-xl font-semibold text-ocean">
                      {t.statLabel}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-green/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">{t.processLabel}</span>
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue">
              {t.processTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line (not on last item) */}
                {index < t.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan to-transparent" />
                )}

                <div className="bg-ghost rounded-2xl p-8 h-full border border-border hover:border-cyan hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-jakarta font-extrabold text-cyan/30 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-mid">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="section-padding bg-gradient-to-br from-deep-blue via-ocean to-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl" />

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <a href="#contact" className="btn-primary bg-white text-ocean hover:bg-cyan-light hover:shadow-2xl text-lg px-10 py-5 inline-flex items-center gap-2">
            {t.ctaButton}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}


// ============================================================
// LOCATION PAGE TEMPLATE
// File: src/app/[locale]/[city-slug]/page.tsx
// ============================================================

import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/content/pages';

interface LocationPageProps {
  params: { locale: string };
}

const content = {
  en: {
    // Hero
    badge: 'Local Service',
    heroTitle: 'Water Treatment in',
    heroCity: 'Miami',  // 📝 Change per location
    heroSubtitle: 'Professional water treatment solutions for Miami and surrounding areas.',
    heroCta: 'Get Free Water Test',

    // Services in City
    servicesLabel: 'Our Services',
    servicesTitle: 'Water Treatment Solutions in Miami',
    services: [
      { icon: '🚰', title: 'Well Water Treatment', desc: 'Remove contaminants from well water' },
      { icon: '⚗️', title: 'Iron & Sulfur Removal', desc: 'Eliminate metallic taste and odors' },
      { icon: '💎', title: 'Hard Water Solutions', desc: 'Protect pipes and appliances' },
      { icon: '💧', title: 'Reverse Osmosis', desc: 'Pure drinking water' },
      { icon: '🏠', title: 'Whole House Filtration', desc: 'Complete home coverage' },
      { icon: '🌊', title: 'City Water Purification', desc: 'Remove chlorine and chemicals' },
    ],

    // Why Local
    whyLabel: 'Why Choose Local',
    whyTitle: 'Your Trusted Miami Water Experts',
    whySubtitle: 'We understand Miami\'s unique water challenges.',
    whyPoints: [
      'Local team that understands Florida water issues',
      'Fast response times throughout Miami-Dade',
      'Knowledge of local water regulations',
      'Relationships with local suppliers',
      'Community-focused service',
    ],

    // CTA
    ctaTitle: 'Get Clean Water in Miami Today',
    ctaSubtitle: 'Contact us for a free water test and consultation.',
    ctaButton: 'Schedule Free Test',
  },
  es: {
    badge: 'Servicio Local',
    heroTitle: 'Tratamiento de Agua en',
    heroCity: 'Miami',
    heroSubtitle: 'Soluciones profesionales de tratamiento de agua para Miami y áreas circundantes.',
    heroCta: 'Prueba de Agua Gratis',

    servicesLabel: 'Nuestros Servicios',
    servicesTitle: 'Soluciones de Tratamiento de Agua en Miami',
    services: [
      { icon: '🚰', title: 'Tratamiento de Agua de Pozo', desc: 'Eliminar contaminantes del agua de pozo' },
      { icon: '⚗️', title: 'Eliminación de Hierro y Azufre', desc: 'Eliminar sabor metálico y olores' },
      { icon: '💎', title: 'Soluciones para Agua Dura', desc: 'Proteger tuberías y electrodomésticos' },
      { icon: '💧', title: 'Ósmosis Inversa', desc: 'Agua potable pura' },
      { icon: '🏠', title: 'Filtración de Casa Completa', desc: 'Cobertura total del hogar' },
      { icon: '🌊', title: 'Purificación de Agua Municipal', desc: 'Eliminar cloro y químicos' },
    ],

    whyLabel: 'Por Qué Elegirnos',
    whyTitle: 'Tus Expertos de Agua de Confianza en Miami',
    whySubtitle: 'Entendemos los desafíos únicos del agua en Miami.',
    whyPoints: [
      'Equipo local que entiende los problemas de agua de Florida',
      'Tiempos de respuesta rápidos en todo Miami-Dade',
      'Conocimiento de regulaciones locales de agua',
      'Relaciones con proveedores locales',
      'Servicio enfocado en la comunidad',
    ],

    ctaTitle: 'Obtén Agua Limpia en Miami Hoy',
    ctaSubtitle: 'Contáctanos para una prueba de agua y consulta gratuita.',
    ctaButton: 'Programar Prueba Gratis',
  }
};

export async function generateMetadata({ params: { locale } }: LocationPageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'miami' : 'miami-es';
  const meta = getPageMetadata(slug, locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.canonical,
      languages: {
        'en': '/miami',
        'es': '/es/miami-es',
      },
    },
  };
}

export default function LocationPage({ params: { locale } }: LocationPageProps) {
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-ocean via-deep-blue to-cyan flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {t.badge}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold text-white mb-6 leading-tight">
              {t.heroTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-accent-green">
                {t.heroCity}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              {t.heroSubtitle}
            </p>

            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              {t.heroCta}
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES IN CITY ==================== */}
      <section className="section-padding bg-ghost">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">{t.servicesLabel}</span>
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue">
              {t.servicesTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border hover:border-cyan hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-accent-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-text-mid">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY LOCAL SECTION ==================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">{t.whyLabel}</span>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-4">
                {t.whyTitle}
              </h2>
              <p className="text-lg text-text-mid mb-8">{t.whySubtitle}</p>

              <ul className="space-y-4">
                {t.whyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-text-mid">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder or visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-ocean/10 to-cyan/10 rounded-3xl p-12 border-2 border-ocean/20 shadow-lg">
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-8xl mb-4">📍</div>
                    <div className="text-4xl font-jakarta font-extrabold text-deep-blue mb-2">
                      {t.heroCity}
                    </div>
                    <div className="text-lg text-ocean">
                      South Florida
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="section-padding bg-gradient-to-br from-deep-blue via-ocean to-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <a href="#contact" className="btn-primary bg-white text-ocean hover:bg-cyan-light text-lg px-10 py-5">
            {t.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}


// ============================================================
// 📋 CHECKLIST DE PÁGINAS A CREAR
// ============================================================
/*
SERVICE PAGES (6):
□ well-water-treatment / tratamiento-agua-de-pozo
□ iron-sulfur-removal / eliminacion-hierro-azufre
□ hard-water-solutions / soluciones-agua-dura
□ reverse-osmosis-systems / sistemas-osmosis-inversa
□ whole-house-filtration / filtracion-casa-completa
□ city-water-purification / purificacion-agua-municipal

LOCATION PAGES (4):
□ miami / miami-es
□ boca-raton / boca-raton-es
□ fort-lauderdale / fort-lauderdale-es
□ west-palm-beach / west-palm-beach-es

OTHER PAGES:
□ about / nosotros
□ contact / contacto
□ shop / tienda
□ cart / carrito
□ checkout / finalizar-compra
□ blog / blog
□ privacy-policy / politica-privacidad
□ refund-policy / politica-reembolso
*/
