'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function AreasGrid() {
  const t = useTranslations('areas');
  const locale = useLocale();

  const areas = [
    {
      city: t('locations.miami.city'),
      county: t('locations.miami.county'),
      href: locale === 'en' ? '/miami' : '/es/miami-es',
    },
    {
      city: t('locations.bocaRaton.city'),
      county: t('locations.bocaRaton.county'),
      href: locale === 'en' ? '/boca-raton' : '/es/boca-raton-es',
    },
    {
      city: t('locations.fortLauderdale.city'),
      county: t('locations.fortLauderdale.county'),
      href: locale === 'en' ? '/fort-lauderdale' : '/es/fort-lauderdale-es',
    },
    {
      city: t('locations.palmBeach.city'),
      county: t('locations.palmBeach.county'),
      href: locale === 'en' ? '/palm-beach' : '/es/palm-beach-es',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-white via-ghost/30 to-white overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0a2540 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient orb */}
      <motion.div
        className="absolute bottom-[10%] right-[8%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,188,212,0.05) 0%, transparent 70%)' }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <h2 className="text-display-lg text-deep-blue mb-5 tracking-[-0.025em]">
              {t('title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-[17px] text-text-mid leading-[1.75] font-normal">
              {t('description')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link href={area.href} className="group block">
                <motion.div
                  className="relative text-center p-10 md:p-11 rounded-2xl border-2 border-border bg-white overflow-hidden transition-all duration-500"
                  whileHover={{
                    y: -4,
                    borderColor: 'rgba(0,188,212,0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-light/0 to-accent-green-light/0 group-hover:from-cyan-light/40 group-hover:to-accent-green-light/20 transition-all duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-light to-cyan/10 mx-auto mb-5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan/20 transition-all duration-300">
                    <MapPin
                      size={22}
                      className="text-cyan group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Text */}
                  <h3 className="relative z-10 text-[19px] font-jakarta font-bold text-deep-blue mb-2 tracking-tight group-hover:text-ocean transition-colors duration-300">
                    {area.city}
                  </h3>
                  <span className="relative z-10 text-[13px] text-text-light font-semibold uppercase tracking-wider group-hover:text-cyan transition-colors duration-300">
                    {area.county}
                  </span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                    initial={false}
                  />

                  {/* Border accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
