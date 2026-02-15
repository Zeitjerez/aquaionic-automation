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
    { city: t('locations.miami.city'), county: t('locations.miami.county'), href: locale === 'en' ? '/miami' : '/es/miami-es' },
    { city: t('locations.bocaRaton.city'), county: t('locations.bocaRaton.county'), href: locale === 'en' ? '/boca-raton' : '/es/boca-raton-es' },
    { city: t('locations.fortLauderdale.city'), county: t('locations.fortLauderdale.county'), href: locale === 'en' ? '/fort-lauderdale' : '/es/fort-lauderdale-es' },
    { city: t('locations.palmBeach.city'), county: t('locations.palmBeach.county'), href: locale === 'en' ? '/palm-beach' : '/es/palm-beach-es' },
  ];

  return (
    <section className="py-24 md:py-30 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-cyan uppercase tracking-[0.08em] mb-4">
              <div className="w-5 h-[1.5px] bg-cyan rounded-full" />
              {t('label')}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-display-lg text-deep-blue mb-4">
              {t('title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-[17px] text-text-mid leading-relaxed">{t('description')}</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={area.href} className="group block">
                <div className="text-center p-8 md:p-9 rounded-2xl border border-ghost bg-white hover:bg-cyan-light hover:border-cyan/20 hover:-translate-y-1 transition-all duration-400">
                  <div className="w-11 h-11 rounded-xl bg-cyan-light mx-auto mb-4 flex items-center justify-center group-hover:bg-cyan/15 transition-colors">
                    <MapPin size={20} className="text-cyan" />
                  </div>
                  <h3 className="text-lg font-jakarta font-bold text-deep-blue mb-1">{area.city}</h3>
                  <span className="text-[13px] text-text-light font-medium">{area.county}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
