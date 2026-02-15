'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
    <section className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0a2540 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient orb */}
      <motion.div
        className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,201,167,0.04) 0%, transparent 70%)' }}
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <ScrollReveal>
            <motion.div
              className="inline-flex items-center gap-2.5 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan to-accent-green" />
              <span className="text-[12px] font-bold text-cyan uppercase tracking-[0.1em]">
                {t('label')}
              </span>
              <Sparkles size={14} className="text-accent-green" />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-display-lg text-deep-blue mb-5 tracking-[-0.025em] leading-[1.12]">
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-cyan via-ocean to-accent-green bg-clip-text text-transparent">
                {t('titleLine2')}
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-[17px] text-text-mid leading-[1.75] font-normal">
              {t('description')}
            </p>
          </ScrollReveal>
        </div>

        {/* Grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-8">
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
