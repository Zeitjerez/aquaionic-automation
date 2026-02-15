'use client';

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import WaterTestForm from '../forms/WaterTestForm';

export default function WaterTestCTA() {
  const t = useTranslations('waterTest');

  const benefits = [
    'Professional lab-grade water analysis',
    'Detailed report of contaminants found',
    'Custom solution recommendation',
    'No obligation, no pressure',
  ];

  return (
    <section id="water-test" className="relative py-16 md:py-20 bg-gradient-to-br from-deep-blue via-ocean to-deep-blue overflow-hidden">
      {/* Cyan orb decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-4 tracking-tight">
                {t('title')}
                <br />
                <span className="text-cyan-soft">{t('titleLine2')}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-[17px] text-white/80 leading-relaxed mb-10 max-w-md">
                {t('description')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-cyan-soft" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-medium text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form Card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-6">
                Request Your Free Test
              </h3>
              <WaterTestForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
