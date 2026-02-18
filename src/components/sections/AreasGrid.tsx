'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function AreasGrid() {
  const t = useTranslations('areas');
  const locale = useLocale();

  const areas = [
    {
      city: t('locations.miami.city'),
      county: t('locations.miami.county'),
      href: locale === 'en' ? '/en/miami' : '/es/miami',
    },
    {
      city: t('locations.bocaRaton.city'),
      county: t('locations.bocaRaton.county'),
      href: locale === 'en' ? '/en/boca-raton' : '/es/boca-raton',
    },
    {
      city: t('locations.fortLauderdale.city'),
      county: t('locations.fortLauderdale.county'),
      href: locale === 'en' ? '/en/fort-lauderdale' : '/es/fort-lauderdale',
    },
    {
      city: t('locations.palmBeach.city'),
      county: t('locations.palmBeach.county'),
      href: locale === 'en' ? '/en/palm-beach' : '/es/palm-beach',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-ghost">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
              {t('title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[17px] text-gray-600 leading-relaxed">{t('description')}</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
              }}
            >
              <Link href={area.href} className="group block">
                <motion.div
                  className="relative text-center p-8 rounded-2xl border border-gray-100 bg-white hover:border-cyan/20 transition-all duration-200 overflow-hidden"
                  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,188,212,0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/0 to-ocean/0 group-hover:from-cyan/5 group-hover:to-ocean/5 transition-all duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-ocean/10 mx-auto mb-4 flex items-center justify-center group-hover:from-cyan/30 group-hover:to-ocean/20 transition-all duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin size={22} className="text-cyan group-hover:animate-icon-float" strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="text-lg font-jakarta font-bold text-deep-blue mb-1 group-hover:text-cyan transition-colors duration-200">{area.city}</h3>
                    <span className="text-[13px] text-gray-500 font-medium">{area.county}</span>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
