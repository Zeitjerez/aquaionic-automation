'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
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
    <section id="water-test" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-ghost/40 to-white overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0a2540 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 right-[10%] w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,188,212,0.06) 0%, transparent 70%)' }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
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
                <br />
                <span className="bg-gradient-to-r from-cyan to-accent-green bg-clip-text text-transparent">
                  {t('titleLine2')}
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-text-mid leading-[1.75] mb-12 max-w-md font-normal">
                {t('description')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                {benefits.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="group flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-light to-accent-green-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check size={16} className="text-cyan" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-medium text-text pt-1 group-hover:text-deep-blue transition-colors duration-200">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form Card */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="relative bg-white rounded-[28px] p-10 md:p-12 shadow-xl shadow-ocean/5 border border-border/50"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan/10 via-transparent to-accent-green/10 pointer-events-none -z-10" />

              {/* Form header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-light to-accent-green-light border border-cyan/10 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan to-accent-green animate-pulse" />
                  <span className="text-[11px] font-bold text-ocean uppercase tracking-wider">
                    Free Water Test
                  </span>
                </div>
                <h3 className="text-[22px] font-jakarta font-bold text-deep-blue tracking-tight">
                  Request Your Free Analysis
                </h3>
                <p className="text-[13px] text-text-light font-medium mt-2">
                  Takes less than 2 minutes • No credit card required
                </p>
              </div>

              {/* Form */}
              <WaterTestForm />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
