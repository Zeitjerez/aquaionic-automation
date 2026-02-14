import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Button from '../ui/Button';
import FloatingBadge from '../ui/FloatingBadge';
import Icon from '../ui/Icon';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Hero glows (background effects) */}
      <div
        className="absolute -top-[15%] -right-[8%] w-[750px] h-[750px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,188,212,0.15) 0%, transparent 70%)',
          animation: 'ambientDrift 18s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute -bottom-[12%] -left-[6%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%)',
          animation: 'ambientDrift 14s ease-in-out infinite alternate-reverse',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-light text-ocean border border-cyan/20 text-sm font-bold animate-fade-in">
              <Icon name="shield" size={16} />
              {t('badge')}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold text-deep-blue leading-[1.1] animate-fade-up">
              {t('title')}
              <br />
              <span className="text-gradient-primary">{t('titleHighlight')}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-text-mid leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {t('description')}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Link href={locale === 'en' ? '/water-test' : '/es/prueba-agua'}>
                <Button variant="primary" size="lg">
                  {t('ctaPrimary')}
                  <Icon name="arrow-right" size={20} />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="secondary" size="lg">
                  {t('ctaSecondary')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Floating badges */}
            <FloatingBadge variant="nsf" delay={0}>
              {t('nsfCertified')}
            </FloatingBadge>
            <FloatingBadge variant="fda" delay={2.5}>
              {t('fdaApproved')}
            </FloatingBadge>

            {/* Hero card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-border">
              {/* Water drop icon */}
              <div className="flex justify-center mb-8">
                <svg width="200" height="260" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.85"/>
                      <stop offset="50%" stopColor="#1a5276" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#0a2540" stopOpacity="0.95"/>
                    </linearGradient>
                    <linearGradient id="innerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.05"/>
                    </linearGradient>
                    <filter id="dropShadow">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#00bcd4" floodOpacity="0.2"/>
                    </filter>
                  </defs>
                  <path
                    d="M100 15 C100 15,28 118,28 172 C28 215,60 252,100 252 C140 252,172 215,172 172 C172 118,100 15,100 15Z"
                    fill="url(#dropGrad)"
                    filter="url(#dropShadow)"
                  />
                  <path
                    d="M82 70 C82 70,45 138,45 172 C45 204,68 235,100 235"
                    fill="none"
                    stroke="url(#innerGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="72" cy="152" r="10" fill="rgba(255,255,255,0.15)"/>
                  <circle cx="62" cy="136" r="4.5" fill="rgba(255,255,255,0.25)"/>
                  <circle cx="80" cy="170" r="3" fill="rgba(255,255,255,0.12)"/>
                </svg>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-glass-light rounded-xl p-4 text-center">
                  <div className="text-4xl font-jakarta font-extrabold text-ocean mb-1">
                    99<span className="text-cyan">%</span>
                  </div>
                  <div className="text-xs font-semibold text-text-mid">
                    {t('stats.removal')}
                  </div>
                </div>
                <div className="backdrop-glass-light rounded-xl p-4 text-center">
                  <div className="text-4xl font-jakarta font-extrabold text-ocean mb-1">
                    10<span className="text-cyan">+</span>
                  </div>
                  <div className="text-xs font-semibold text-text-mid">
                    {t('stats.experience')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
