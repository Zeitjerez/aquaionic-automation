'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-[72px]">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-[13px] font-semibold text-cyan mb-8">
              {t('badge')}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-bold text-deep-blue mb-6 leading-tight tracking-tight">
              {t('title')}
              <br />
              <span className="text-cyan">{t('titleHighlight')}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
              {t('description')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href={locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo'}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan text-white font-semibold text-[15px] rounded-xl hover:bg-cyan-soft transition-colors duration-200"
              >
                {t('ctaPrimary')}
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>

              <Link
                href={locale === 'en' ? '/about' : '/es/nosotros'}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-gray-200 text-deep-blue font-semibold text-[15px] rounded-xl hover:border-cyan hover:text-cyan transition-colors duration-200"
              >
                {t('ctaSecondary')}
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap gap-10 md:gap-14">
              {[
                { value: '99%', label: t('stats.removal') },
                { value: '10+', label: t('stats.experience') },
                {
                  value: '500+',
                  label: locale === 'en' ? 'Homes Protected' : 'Hogares Protegidos',
                },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-12 rounded-full bg-cyan" />
                  <div>
                    <div className="text-3xl md:text-4xl font-jakarta font-bold text-deep-blue">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
