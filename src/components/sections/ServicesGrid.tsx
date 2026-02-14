import { useTranslations, useLocale } from 'next-intl';
import ServiceCard from '../cards/ServiceCard';

export default function ServicesGrid() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      icon: 'water-drop',
      title: t('items.wellWater.title'),
      description: t('items.wellWater.description'),
      href: locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo',
    },
    {
      icon: 'lightning',
      title: t('items.ironSulfur.title'),
      description: t('items.ironSulfur.description'),
      href: locale === 'en' ? '/iron-sulfur-removal' : '/es/eliminacion-hierro-azufre',
    },
    {
      icon: 'shield',
      title: t('items.hardWater.title'),
      description: t('items.hardWater.description'),
      href: locale === 'en' ? '/water-softener-installation' : '/es/instalacion-ablandadores',
    },
    {
      icon: 'check',
      title: t('items.reverseOsmosis.title'),
      description: t('items.reverseOsmosis.description'),
      href: locale === 'en' ? '/reverse-osmosis-system' : '/es/sistema-osmosis-inversa',
    },
    {
      icon: 'home',
      title: t('items.wholeHouse.title'),
      description: t('items.wholeHouse.description'),
      href: locale === 'en' ? '/whole-house-water-filtration' : '/es/filtracion-agua-toda-casa',
    },
    {
      icon: 'water-drop',
      title: t('items.cityWater.title'),
      description: t('items.cityWater.description'),
      href: locale === 'en' ? '/city-water-purification' : '/es/purificacion-agua-municipal',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-4">{t('label')}</div>
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
            {t('title')}
            <br />
            {t('titleLine2')}
          </h2>
          <p className="text-lg text-text-mid">
            {t('description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
