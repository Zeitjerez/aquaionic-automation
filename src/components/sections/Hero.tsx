'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[72px]">
      {/* Ultra-subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0a2540 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Animated gradient orbs - more subtle */}
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,188,212,0.06) 0%, rgba(0,201,167,0.03) 50%, transparent 70%)',
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,201,167,0.04) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── LEFT: Content ── */}
          <div>
            <ScrollReveal>
              <motion.div
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-light to-accent-green-light border border-cyan/15 mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan to-accent-green animate-pulse" />
                <Shield size={14} className="text-cyan" strokeWidth={2.5} />
                <span className="text-[12.5px] font-bold text-ocean tracking-wide">
                  {t('badge')}
                </span>
                <Sparkles size={12} className="text-accent-green" />
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-display-xl text-deep-blue mb-6 leading-[1.08] tracking-[-0.03em]">
                {t('title')}
                <br />
                <span className="bg-gradient-to-r from-cyan via-ocean to-accent-green bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  {t('titleHighlight')}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[17px] md:text-[18px] text-text-mid leading-[1.75] max-w-xl mb-12 font-normal">
                {t('description')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href={locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo'}
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-deep-blue to-ocean text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ocean/25 hover:-translate-y-1"
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'easeInOut',
                    }}
                  />
                  <span className="relative z-10">{t('ctaPrimary')}</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                    strokeWidth={2.5}
                  />
                </Link>

                <Link
                  href={locale === 'en' ? '/about' : '/es/nosotros'}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-ghost text-deep-blue font-semibold rounded-xl border-2 border-border hover:border-cyan/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  {t('ctaSecondary')}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-10 md:gap-14">
                {[
                  { value: '99%', label: t('stats.removal'), color: 'from-cyan to-ocean' },
                  { value: '10+', label: t('stats.experience'), color: 'from-ocean to-deep-blue' },
                  {
                    value: '500+',
                    label: locale === 'en' ? 'Homes Protected' : 'Hogares Protegidos',
                    color: 'from-accent-green to-cyan',
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 group cursor-default"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-1 h-14 rounded-full bg-gradient-to-b ${stat.color} group-hover:h-16 transition-all duration-300`} />
                    <div>
                      <div className="text-[32px] md:text-[36px] font-jakarta font-extrabold text-deep-blue tracking-[-0.025em] leading-none mb-1.5">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-bold text-text-light uppercase tracking-[0.08em]">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ── RIGHT: Visual Card ── */}
          <ScrollReveal delay={0.2} className="hidden lg:block">
            <div className="relative">
              {/* Main visual card with better shadows */}
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-deep-blue via-ocean to-cyan/60 p-14 min-h-[560px] flex flex-col justify-end shadow-2xl shadow-ocean/20">
                {/* Animated water ripples - more subtle */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-[220px] h-[220px] rounded-full border-2 border-cyan/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 2.8],
                        opacity: [0.3, 0],
                      }}
                      transition={{
                        duration: 3.5 + i * 0.8,
                        repeat: Infinity,
                        delay: i * 0.9,
                        ease: 'easeOut',
                      }}
                    />
                  ))}

                  {/* Center icon with glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan to-accent-green flex items-center justify-center shadow-[0_0_80px_rgba(0,188,212,0.4)]">
                    <motion.svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </motion.svg>
                  </div>
                </div>

                {/* Bottom label with blur */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 mb-5">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">
                      Certified Systems
                    </span>
                  </div>
                  <h3 className="text-[26px] font-jakarta font-bold text-white mb-2.5 tracking-tight">
                    Advanced Filtration
                  </h3>
                  <p className="text-[14px] text-white/60 font-medium leading-relaxed">
                    NSF & FDA certified technology for Florida water.
                  </p>
                </div>
              </div>

              {/* Floating NSF badge - improved shadow */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl shadow-ocean/10 flex items-center gap-3 border border-border/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-light to-cyan/20 flex items-center justify-center text-cyan">
                  <Shield size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-[13px] font-jakarta font-bold text-deep-blue tracking-tight">
                    NSF Certified
                  </div>
                  <div className="text-[11px] text-text-light font-medium">Water Safety</div>
                </div>
              </motion.div>

              {/* Floating stat - improved design */}
              <motion.div
                className="absolute bottom-24 -left-4 bg-white rounded-2xl p-5 shadow-xl shadow-ocean/10 flex items-center gap-4 border border-border/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-green/10 to-accent-green/5 flex items-center justify-center text-accent-green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-jakarta font-extrabold text-deep-blue tracking-tight leading-none mb-1">
                    99.9%
                  </div>
                  <div className="text-[11px] text-text-light font-semibold uppercase tracking-wider">
                    Purification Rate
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
