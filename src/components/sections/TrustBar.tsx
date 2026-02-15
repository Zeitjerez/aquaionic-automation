'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Droplets, Shield, CheckCircle2, Headphones } from 'lucide-react';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const trustItems = [
    { icon: Droplets, text: t('waterAnalysis'), color: 'from-cyan to-ocean' },
    { icon: Shield, text: t('certified'), color: 'from-accent-green to-cyan' },
    { icon: CheckCircle2, text: t('americanMade'), color: 'from-ocean to-deep-blue' },
    { icon: Headphones, text: t('support'), color: 'from-cyan to-accent-green' },
  ];

  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-gradient-to-b from-white via-ghost/30 to-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0a2540 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-3.5 relative"
              >
                {/* Icon container with gradient */}
                <div className="relative">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl bg-gradient-to-br shadow-sm',
                      'flex items-center justify-center',
                      'transition-all duration-300 ease-out',
                      'group-hover:shadow-md group-hover:scale-105',
                      item.color
                    )}
                  >
                    <Icon size={20} className="text-white relative z-10" strokeWidth={2.5} />
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className={cn('absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300', item.color, 'bg-gradient-to-br')}
                    initial={false}
                  />
                </div>

                {/* Text */}
                <span className="text-[14px] font-semibold text-text-mid group-hover:text-deep-blue transition-colors duration-200">
                  {item.text}
                </span>

                {/* Separator (not on last item on desktop) */}
                {index < trustItems.length - 1 && (
                  <div className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-border to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </section>
  );
}

// Helper to combine classNames
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
