import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Droplets, Calendar } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const title = locale === 'en'
    ? 'Water Quality Blog | Florida Water Treatment Tips | Aquaionic'
    : 'Blog de Calidad del Agua | Consejos de Tratamiento en Florida | Aquaionic';
  const description = locale === 'en'
    ? 'Expert articles on Florida water quality, well water treatment, hard water solutions, reverse osmosis, and water purification. Tips for Miami-Dade, Broward, and Palm Beach homeowners.'
    : 'Artículos expertos sobre calidad del agua en Florida, tratamiento de agua de pozo, soluciones para agua dura, ósmosis inversa y purificación de agua. Consejos para propietarios en Miami-Dade, Broward y Palm Beach.';

  return {
    title,
    description,
    keywords: locale === 'en'
      ? 'Florida water quality blog, well water treatment tips, hard water solutions Florida, reverse osmosis guide, water purification South Florida, water softener tips, iron removal Florida'
      : 'blog calidad agua Florida, consejos tratamiento agua pozo, soluciones agua dura Florida, guía ósmosis inversa, purificación agua sur Florida, consejos ablandador agua',
    alternates: {
      canonical: `https://aquaionic.us/${locale}/blog/`,
      languages: {
        'en': 'https://aquaionic.us/en/blog/',
        'es': 'https://aquaionic.us/es/blog/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/blog/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function BlogPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const en = locale === 'en';

  const content = {
    en: {
      badge: 'Water Quality Resources',
      title: 'Florida Water',
      titleHighlight: 'Quality Blog',
      subtitle: 'Expert guides and tips on water quality, treatment systems, and what South Florida homeowners need to know about their water.',
      articles: [
        {
          category: 'Well Water',
          date: 'January 2025',
          title: 'Understanding Well Water Quality in South Florida',
          excerpt: 'South Florida\'s geology creates unique challenges for well water users. The Floridan Aquifer — the primary groundwater source for millions of Floridians — passes through limestone bedrock, picking up calcium, magnesium, iron, and hydrogen sulfide along the way. In Miami-Dade, Broward, and Palm Beach counties, homeowners with private wells commonly encounter orange staining on fixtures and laundry (iron), a rotten egg odor (hydrogen sulfide), and rock-hard scale on appliances (hardness). These issues aren\'t just cosmetic — high iron can damage water heaters and dishwashers, while untreated hard water shortens the lifespan of all water-using appliances by up to 50%. A comprehensive water test is the first step: it tells you exactly what\'s present and at what concentrations, so treatment can be precisely matched to your water.',
          readMoreLabel: 'Learn about Well Water Treatment',
          href: '/en/well-water-treatment',
        },
        {
          category: 'Hard Water',
          date: 'December 2024',
          title: 'Hard Water in Florida: What It Is and How to Fix It',
          excerpt: 'If you\'ve noticed white crusty buildup on your showerheads, water spots on dishes that won\'t wash off, or soap that refuses to lather properly, you\'re dealing with hard water. Florida ranks among the states with the hardest water in the US — Miami-Dade and Palm Beach County regularly measure 200–350 mg/L of hardness, far above the 60 mg/L threshold for "soft" water. Hard water is caused by dissolved calcium and magnesium minerals and while it\'s not a health risk, the household damage is real. Scale deposits inside water heaters can reduce efficiency by 20–30% and cut their lifespan in half. The solution is a salt-based water softener, which uses ion exchange to replace calcium and magnesium with sodium ions. The result is noticeably softer water that\'s gentler on pipes, appliances, skin, and hair.',
          readMoreLabel: 'Learn about Hard Water Solutions',
          href: '/en/hard-water-solutions',
        },
        {
          category: 'City Water',
          date: 'November 2024',
          title: 'What\'s Really in Your Miami City Water',
          excerpt: 'Miami-Dade Water and Sewer treats over 300 million gallons of water per day and delivers water that meets all federal Safe Drinking Water Act standards. But "meets standards" doesn\'t mean "perfectly pure." Miami city water is treated with chloramines (chlorine + ammonia) to control bacteria — a disinfectant that leaves a noticeable taste and odor and forms disinfection byproducts (DBPs) like trihalomethanes (THMs) and haloacetic acids (HAAs) during treatment. Long-term exposure to DBPs is associated with increased health risks according to EPA data. Additionally, water travels through miles of aging pipes before reaching your tap, potentially picking up lead, copper, and other contaminants along the way. A quality activated carbon filter or whole-house system removes chloramines, DBPs, and pipe contaminants — giving you water that\'s genuinely clean, not just legally compliant.',
          readMoreLabel: 'Learn about City Water Purification',
          href: '/en/city-water-purification',
        },
        {
          category: 'Reverse Osmosis',
          date: 'October 2024',
          title: 'Reverse Osmosis: The Gold Standard for Drinking Water',
          excerpt: 'Reverse osmosis (RO) is widely considered the most effective residential water purification technology available. An RO system forces water through a semi-permeable membrane with pores so small (0.0001 microns) that only water molecules pass through — removing up to 99% of dissolved contaminants including lead, arsenic, nitrates, fluoride, PFAS ("forever chemicals"), chlorine, chloramines, and hundreds more. A standard 5-stage RO system includes a sediment pre-filter, activated carbon pre-filter, the RO membrane, a post-carbon filter, and a storage tank. Modern systems also include remineralization filters to add back beneficial calcium and magnesium for better taste. Under-sink RO systems in South Florida homes are especially popular because they solve both the hard water taste issue and the chloramine problem at the point of use, while a whole-house softener handles scale protection for appliances.',
          readMoreLabel: 'Learn about Reverse Osmosis Systems',
          href: '/en/reverse-osmosis-systems',
        },
        {
          category: 'Iron Removal',
          date: 'September 2024',
          title: 'How to Eliminate Iron and Sulfur from Your Well Water',
          excerpt: 'Iron and hydrogen sulfide are the two most common — and most disruptive — well water problems in South Florida. Iron comes in two forms: ferrous (dissolved, "clear water iron") and ferric (particulate, "red water iron"). Both leave orange-brown stains on sinks, tubs, toilets, and laundry. Hydrogen sulfide is responsible for the unmistakable rotten egg odor that makes well water unpleasant to use. The most effective treatment depends on concentrations determined by your water test. Low iron levels (under 3 ppm) can often be addressed with a quality backwashing filter using birm or manganese greensand media. Higher levels require air injection or chemical oxidation followed by filtration. For hydrogen sulfide, air injection (aeration) is the most reliable odor-free solution — it oxidizes the gas out of the water before filtration. The result is odor-free, stain-free water throughout your home.',
          readMoreLabel: 'Learn about Iron & Sulfur Removal',
          href: '/en/iron-sulfur-removal',
        },
        {
          category: 'Whole House',
          date: 'August 2024',
          title: 'Do You Need a Whole House Water Filtration System?',
          excerpt: 'Point-of-use filters (like under-sink RO or faucet filters) purify water at a single tap — great for drinking, but they don\'t protect the rest of your home. Every shower, bath, load of laundry, and dishwasher cycle runs on unfiltered water. Chloramines in city water can create disinfection byproducts in your shower steam that you inhale. Hard water damages your water heater and appliances. Iron stains every fixture and white surface in your home. A whole-house filtration system installs on the main water line — before water reaches any fixture — and treats every drop that enters your home. For South Florida homes, a typical system combines a sediment pre-filter, activated carbon filter (for chloramines and DBPs), and a water softener or iron filter matched to your specific water test results. It\'s a one-investment solution that protects your health, your appliances, and your home\'s plumbing.',
          readMoreLabel: 'Learn about Whole House Filtration',
          href: '/en/whole-house-filtration',
        },
      ],
      ctaTitle: 'Have a Water',
      ctaHighlight: 'Question?',
      ctaSubtitle: 'Start with a free professional water test — we\'ll tell you exactly what\'s in your water and what to do about it',
      ctaButton: 'Get Free Water Test',
    },
    es: {
      badge: 'Recursos de Calidad del Agua',
      title: 'Blog de Calidad',
      titleHighlight: 'del Agua en Florida',
      subtitle: 'Guías expertas y consejos sobre calidad del agua, sistemas de tratamiento y lo que los propietarios del sur de Florida necesitan saber sobre su agua.',
      articles: [
        {
          category: 'Agua de Pozo',
          date: 'Enero 2025',
          title: 'Comprendiendo la Calidad del Agua de Pozo en el Sur de Florida',
          excerpt: 'La geología del sur de Florida crea desafíos únicos para los usuarios de agua de pozo. El Acuífero Floridan — la fuente principal de agua subterránea para millones de floridanos — pasa por roca caliza, acumulando calcio, magnesio, hierro y sulfuro de hidrógeno. En los condados de Miami-Dade, Broward y Palm Beach, los propietarios con pozos privados comúnmente encuentran manchas anaranjadas en grifos y ropa (hierro), olor a huevo podrido (sulfuro de hidrógeno), y sarro en electrodomésticos (dureza). Un análisis completo del agua es el primer paso: le dice exactamente qué está presente y en qué concentraciones, para que el tratamiento pueda adaptarse con precisión a su agua.',
          readMoreLabel: 'Aprenda sobre Tratamiento de Agua de Pozo',
          href: '/es/tratamiento-agua-de-pozo',
        },
        {
          category: 'Agua Dura',
          date: 'Diciembre 2024',
          title: 'Agua Dura en Florida: Qué Es y Cómo Solucionarla',
          excerpt: 'Si ha notado depósitos blancos en sus alcachofas de ducha, manchas de agua en platos o jabón que no hace espuma, está lidiando con agua dura. Florida está entre los estados con el agua más dura de EE. UU. — Miami-Dade y Palm Beach frecuentemente miden 200–350 mg/L de dureza, muy por encima del umbral de 60 mg/L para agua "blanda". El agua dura es causada por minerales disueltos de calcio y magnesio. Los depósitos de sarro dentro de los calentadores de agua pueden reducir la eficiencia en un 20–30% y reducir a la mitad su vida útil. La solución es un ablandador de agua con sal, que usa intercambio de iones para reemplazar calcio y magnesio con iones de sodio.',
          readMoreLabel: 'Aprenda sobre Soluciones para Agua Dura',
          href: '/es/soluciones-agua-dura',
        },
        {
          category: 'Agua de Ciudad',
          date: 'Noviembre 2024',
          title: 'Qué Hay Realmente en el Agua de Ciudad de Miami',
          excerpt: 'El agua de Miami-Dade cumple todos los estándares federales de la Ley de Agua Potable Segura. Pero "cumple estándares" no significa "perfectamente pura". El agua de Miami se trata con cloraminas para controlar bacterias, dejando un sabor y olor notables y formando subproductos de desinfección (DBPs) como trihalometanos (THMs) durante el tratamiento. La exposición a largo plazo a los DBPs se asocia con mayores riesgos de salud según datos de la EPA. Además, el agua viaja por kilómetros de tuberías viejas antes de llegar a su grifo, pudiendo recoger plomo, cobre y otros contaminantes. Un filtro de carbón activado o sistema para toda la casa elimina cloraminas, DBPs y contaminantes de tuberías.',
          readMoreLabel: 'Aprenda sobre Purificación de Agua de Ciudad',
          href: '/es/purificacion-agua-ciudad',
        },
        {
          category: 'Ósmosis Inversa',
          date: 'Octubre 2024',
          title: 'Ósmosis Inversa: El Estándar de Oro para el Agua Potable',
          excerpt: 'La ósmosis inversa (RO) es ampliamente considerada la tecnología de purificación de agua residencial más eficaz disponible. Un sistema RO fuerza el agua a través de una membrana semipermeable con poros tan pequeños (0,0001 micrones) que solo las moléculas de agua pasan — eliminando hasta el 99% de los contaminantes disueltos incluyendo plomo, arsénico, nitratos, flúor, PFAS, cloro, cloraminas y cientos más. Un sistema RO estándar de 5 etapas incluye un prefiltro de sedimentos, filtro de carbón activado, la membrana RO, un filtro de carbón de postratamiento y un depósito de almacenamiento. Los sistemas modernos también incluyen filtros de remineralización para agregar de vuelta calcio y magnesio beneficiosos para mejor sabor.',
          readMoreLabel: 'Aprenda sobre Sistemas de Ósmosis Inversa',
          href: '/es/sistemas-osmosis-inversa',
        },
        {
          category: 'Eliminación de Hierro',
          date: 'Septiembre 2024',
          title: 'Cómo Eliminar el Hierro y el Azufre de su Agua de Pozo',
          excerpt: 'El hierro y el sulfuro de hidrógeno son los dos problemas de agua de pozo más comunes y disruptivos en el sur de Florida. El hierro deja manchas marrones en lavabos, bañeras, inodoros y ropa. El sulfuro de hidrógeno es responsable del inconfundible olor a huevo podrido. El tratamiento más efectivo depende de las concentraciones determinadas por su análisis de agua. Para el sulfuro de hidrógeno, la inyección de aire (aireación) es la solución sin olor más confiable — oxida el gas del agua antes de la filtración. El resultado es agua sin olor y sin manchas en todo su hogar.',
          readMoreLabel: 'Aprenda sobre Eliminación de Hierro y Azufre',
          href: '/es/eliminacion-hierro-azufre',
        },
        {
          category: 'Toda la Casa',
          date: 'Agosto 2024',
          title: '¿Necesita un Sistema de Filtración para Toda la Casa?',
          excerpt: 'Los filtros de punto de uso (como ósmosis inversa bajo el fregadero) purifican el agua en un solo grifo — excelente para beber, pero no protegen el resto de su hogar. Cada ducha, baño, lavado de ropa y ciclo de lavavajillas usa agua sin filtrar. Un sistema de filtración para toda la casa se instala en la línea principal de agua — antes de que llegue a cualquier grifo — y trata cada gota que entra a su hogar. Para hogares del sur de Florida, un sistema típico combina un prefiltro de sedimentos, filtro de carbón activado y un ablandador de agua o filtro de hierro adaptado a los resultados de su análisis de agua específico.',
          readMoreLabel: 'Aprenda sobre Filtración para Toda la Casa',
          href: '/es/filtracion-toda-la-casa',
        },
      ],
      ctaTitle: '¿Tiene una Pregunta',
      ctaHighlight: 'sobre el Agua?',
      ctaSubtitle: 'Empiece con un análisis de agua profesional gratuito — le diremos exactamente qué hay en su agua y qué hacer al respecto',
      ctaButton: 'Obtener Análisis Gratuito',
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
            '@type': 'Blog',
            name: en ? 'Aquaionic Water Quality Blog' : 'Blog de Calidad del Agua Aquaionic',
            description: t.subtitle,
            url: `https://aquaionic.us/${locale}/blog/`,
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-white pt-[72px] pb-12 md:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-[13px] font-semibold text-cyan mb-8">
                <Droplets size={14} strokeWidth={2.5} />
                {t.badge}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-jakarta font-bold text-deep-blue mb-6 leading-tight tracking-tight">
                {t.title}
                <br />
                <span className="text-cyan">{t.titleHighlight}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">{t.subtitle}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {t.articles.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <article className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan/10 text-cyan text-[12px] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
                      <Calendar size={12} strokeWidth={2} />
                      {article.date}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-[26px] font-jakarta font-bold text-deep-blue mb-4 tracking-tight leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{article.excerpt}</p>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-cyan font-semibold text-[14px] hover:gap-3 transition-all duration-200"
                  >
                    {article.readMoreLabel}
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </article>
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
