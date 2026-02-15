'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[72px]">
      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'radial-gradient(#0a2540 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Aqua orb */}
      <motion.div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)' }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,201,167,0.06) 0%, transparent 70%)' }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── LEFT: Content ── */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-light border border-cyan/20 text-[13px] font-bold text-ocean mb-8">
                <Shield size={14} className="text-cyan" />
                {t('badge')}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-display-xl text-deep-blue mb-6">
                {t('title')}
                <br />
                <span className="bg-gradient-to-r from-cyan to-accent-green bg-clip-text text-transparent">
                  {t('titleHighlight')}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-text-mid leading-relaxed max-w-xl mb-10">
                {t('description')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link
                  href={locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo'}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-deep-blue hover:bg-cyan text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan"
                >
                  {t('ctaPrimary')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={locale === 'en' ? '/about' : '/es/nosotros'}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-ghost text-deep-blue font-semibold rounded-xl border border-ghost hover:border-cyan/30 transition-all duration-300"
                >
                  {t('ctaSecondary')}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-8 md:gap-12">
                {[
                  { value: '99%', label: t('stats.removal') },
                  { value: '10+', label: t('stats.experience') },
                  { value: '500+', label: locale === 'en' ? 'Homes Protected' : 'Hogares Protegidos' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-px h-10 bg-gradient-to-b from-cyan to-transparent" />
                    <div>
                      <div className="text-2xl md:text-3xl font-jakarta font-extrabold text-deep-blue tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-semibold text-text-light uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ── RIGHT: Visual Card ── */}
          <ScrollReveal delay={0.2} className="hidden lg:block">
            <div className="relative">
              {/* Main visual card */}
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-deep-blue via-ocean to-cyan/50 p-12 min-h-[520px] flex flex-col justify-end">
                {/* Water ripples */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-[200px] h-[200px] rounded-full border border-cyan/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                      transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.8 }}
                    />
                  ))}
                  {/* Center glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan to-accent-green flex items-center justify-center shadow-[0_0_60px_rgba(0,188,212,0.4)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                    <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">Certified Systems</span>
                  </div>
                  <h3 className="text-2xl font-jakarta font-bold text-white mb-2">Advanced Filtration</h3>
                  <p className="text-sm text-white/50">NSF & FDA certified technology for Florida water.</p>
                </div>
              </div>

              {/* Floating NSF badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3.5 shadow-md flex items-center gap-2.5"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-9 h-9 rounded-[10px] bg-cyan-light flex items-center justify-center text-cyan">
                  <Shield size={18} />
                </div>
                <div>
                  <div className="text-[13px] font-jakarta font-bold text-deep-blue">NSF Certified</div>
                  <div className="text-[11px] text-text-light">Water Safety</div>
                </div>
              </motion.div>

              {/* Floating stat */}
              <motion.div
                className="absolute bottom-10 -left-8 bg-white rounded-2xl p-4 shadow-md flex items-center gap-3"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-11 h-11 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <div className="text-xl font-jakarta font-extrabold text-deep-blue">99.9%</div>
                  <div className="text-[11px] text-text-light font-medium">Purification Rate</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
