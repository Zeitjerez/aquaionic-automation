'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[85vh] flex items-center bg-white pt-[72px]">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { end: 99, suffix: '%', label: 'Contaminant Removal' },
                  { end: 10, suffix: '+', label: 'Years in Florida' },
                  { end: 500, suffix: '+', label: 'Homes Protected' },
                  { end: 24, suffix: '/7', label: 'Customer Support' },
                ].map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-jakarta font-extrabold text-deep-blue tracking-tight">
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="text-[11px] font-semibold text-text-light uppercase tracking-[0.08em] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Image */}
          <ScrollReveal delay={0.2} className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/hero/water-hero.jpg"
                alt="Crystal clear water"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />

              {/* Simple floating badge */}
              <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-sm font-semibold text-deep-blue">NSF & FDA Certified</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
