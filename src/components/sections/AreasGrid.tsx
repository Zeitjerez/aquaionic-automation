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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
                <div className="text-center p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-cyan/15 transition-colors duration-200">
                    <MapPin size={20} className="text-cyan" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-jakarta font-bold text-deep-blue mb-1">{area.city}</h3>
                  <span className="text-[13px] text-gray-500 font-medium">{area.county}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
