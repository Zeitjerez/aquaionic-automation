'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '../ui/ScrollReveal';
import WaterTestForm from '../forms/WaterTestForm';
import { Check } from 'lucide-react';

export default function WaterTestCTA() {
  const t = useTranslations('waterTest');

  const benefits = [
    'Professional lab-grade water analysis',
    'Detailed report of contaminants found',
    'Custom solution recommendation',
    'No obligation, no pressure',
  ];

  return (
    <section id="water-test" className="py-24 md:py-30 bg-ghost">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-[13px] font-bold text-cyan uppercase tracking-[0.08em] mb-4">
                <div className="w-5 h-[1.5px] bg-cyan rounded-full" />
                {t('label')}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display-lg text-deep-blue mb-4">
                {t('title')}<br />
                <span className="text-cyan">{t('titleLine2')}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-text-mid leading-relaxed mb-10 max-w-md">
                {t('description')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-5">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-light flex items-center justify-center flex-shrink-0">
                      <Check size={15} className="text-cyan" />
                    </div>
                    <span className="text-[15px] font-medium text-text">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-border">
              <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-7">
                {t('form.name') ? 'Request Free Test' : 'Request Free Test'}
              </h3>
              <WaterTestForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
