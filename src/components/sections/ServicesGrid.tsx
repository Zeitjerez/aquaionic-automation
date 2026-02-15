'use client';

import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '../ui/ScrollReveal';
import ServiceCard from '../cards/ServiceCard';

export default function ServicesGrid() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      icon: 'Droplets',
      title: t('items.wellWater.title'),
      desc: t('items.wellWater.description'),
      href: locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo',
      image: '/images/services/well-water.jpg',
    },
    {
      icon: 'FlaskConical',
      title: t('items.ironSulfur.title'),
      desc: t('items.ironSulfur.description'),
      href: locale === 'en' ? '/iron-sulfur-removal' : '/es/eliminacion-hierro-azufre',
      image: '/images/services/filtration.jpg',
    },
    {
      icon: 'Zap',
      title: t('items.hardWater.title'),
      desc: t('items.hardWater.description'),
      href: locale === 'en' ? '/hard-water-solutions' : '/es/soluciones-agua-dura',
      image: '/images/services/hard-water.jpg',
    },
    {
      icon: 'Filter',
      title: t('items.reverseOsmosis.title'),
      desc: t('items.reverseOsmosis.description'),
      href: locale === 'en' ? '/reverse-osmosis-systems' : '/es/sistemas-osmosis-inversa',
      image: '/images/services/reverse-osmosis.jpg',
    },
    {
      icon: 'Home',
      title: t('items.wholeHouse.title'),
      desc: t('items.wholeHouse.description'),
      href: locale === 'en' ? '/whole-house-filtration' : '/es/filtracion-casa-completa',
      image: '/images/services/water-testing.jpg',
    },
    {
      icon: 'Sun',
      title: t('items.cityWater.title'),
      desc: t('items.cityWater.description'),
      href: locale === 'en' ? '/city-water-purification' : '/es/purificacion-agua-ciudad',
      image: '/images/services/city-water.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
              {t('title')}{' '}
              <span className="text-cyan">{t('titleLine2')}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              {t('description')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ServiceCard
              key={svc.href}
              title={svc.title}
              description={svc.desc}
              icon={svc.icon}
              href={svc.href}
              image={svc.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
