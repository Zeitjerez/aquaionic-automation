'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Icon from '../ui/Icon';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/water-bg.jpg"
          alt="Pure water"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-deep-blue/70 to-deep-blue/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
      </div>

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(0,188,212,0.2) 0%, transparent 70%)' }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(0,201,167,0.12) 0%, transparent 70%)' }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold mb-8"
          >
            <Icon name="shield" size={16} className="text-cyan" />
            {t('badge')}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold text-white leading-[1.05] mb-6"
          >
            {t('title')}
            <br />
            <span className="bg-gradient-to-r from-cyan via-cyan-soft to-accent-green bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/75 leading-relaxed max-w-xl mb-10"
          >
            {t('description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href={locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo'}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-soft text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan/25 hover:shadow-cyan/40 hover:-translate-y-0.5"
            >
              {t('ctaPrimary')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href={locale === 'en' ? '/about' : '/es/nosotros'}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              {t('ctaSecondary')}
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            {[
              { value: '99%', label: t('stats.removal') },
              { value: '10+', label: t('stats.experience') },
              { value: '500+', label: locale === 'en' ? 'Homes Protected' : 'Hogares Protegidos' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-px h-10 bg-gradient-to-b from-cyan to-transparent" />
                <div>
                  <div className="text-2xl md:text-3xl font-jakarta font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
