'use client';

import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '../ui/ScrollReveal';
import ServiceCard from '../cards/ServiceCard';

export default function ServicesGrid() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    { icon: 'Droplets', title: t('items.wellWater.title'), desc: t('items.wellWater.description'), href: locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo', image: '/images/services/well-water.jpg' },
    { icon: 'FlaskConical', title: t('items.ironSulfur.title'), desc: t('items.ironSulfur.description'), href: locale === 'en' ? '/iron-sulfur-removal' : '/es/eliminacion-hierro-azufre', image: '/images/services/filtration.jpg' },
    { icon: 'Zap', title: t('items.hardWater.title'), desc: t('items.hardWater.description'), href: locale === 'en' ? '/hard-water-solutions' : '/es/soluciones-agua-dura', image: '/images/services/hard-water.jpg' },
    { icon: 'Filter', title: t('items.reverseOsmosis.title'), desc: t('items.reverseOsmosis.description'), href: locale === 'en' ? '/reverse-osmosis-systems' : '/es/sistemas-osmosis-inversa', image: '/images/services/reverse-osmosis.jpg' },
    { icon: 'Home', title: t('items.wholeHouse.title'), desc: t('items.wholeHouse.description'), href: locale === 'en' ? '/whole-house-filtration' : '/es/filtracion-casa-completa', image: '/images/services/water-testing.jpg' },
    { icon: 'Sun', title: t('items.cityWater.title'), desc: t('items.cityWater.description'), href: locale === 'en' ? '/city-water-purification' : '/es/purificacion-agua-ciudad', image: '/images/services/city-water.jpg' },
  ];

  return (
    <section className="py-24 md:py-30 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-cyan uppercase tracking-[0.08em] mb-4">
              <div className="w-5 h-[1.5px] bg-cyan rounded-full" />
              {t('label')}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-display-lg text-deep-blue mb-4">
              {t('title')}{' '}
              <span className="text-cyan">{t('titleLine2')}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-[17px] text-text-mid leading-relaxed">
              {t('description')}
            </p>
          </ScrollReveal>
        </div>

        {/* Grid: 1 col mobile, 2 tablet, 3 desktop */}
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
