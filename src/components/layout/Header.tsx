'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navItems = [
    { label: t('nav.services'), href: `/${locale === 'en' ? 'well-water-treatment' : 'es/tratamiento-agua-de-pozo'}` },
    { label: t('nav.areas'), href: `/${locale === 'en' ? 'miami' : 'es/miami-es'}` },
    { label: t('nav.about'), href: `/${locale === 'en' ? 'about' : 'es/nosotros'}` },
    { label: t('nav.shop'), href: `/${locale === 'en' ? 'shop' : 'es/tienda'}` },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/[0.04]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href={locale === 'en' ? '/' : '/es/inicio'} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-cyan to-accent-green flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" strokeWidth="0">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
              </div>
              <span className="font-jakarta font-extrabold text-[22px] tracking-tight text-deep-blue">
                AQUA<span className="text-cyan">IONIC</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[14.5px] font-medium text-text-mid hover:text-cyan transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}

              <div className="w-px h-4 bg-border" />

              <a href="tel:+13054671525" className="flex items-center gap-1.5 text-[14px] text-text-light hover:text-cyan transition-colors">
                <Phone size={15} />
                <span>(305) 467-1525</span>
              </a>

              <Link
                href={locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo'}
                className="px-6 py-2.5 bg-deep-blue hover:bg-cyan text-white text-[13.5px] font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan"
              >
                {t('cta')}
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-deep-blue"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-deep-blue/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-jakarta font-extrabold text-xl text-deep-blue">
                    AQUA<span className="text-cyan">IONIC</span>
                  </span>
                  <button onClick={() => setMobileOpen(false)} className="p-2 text-text-mid hover:text-deep-blue">
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex-1 p-6 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3.5 rounded-xl text-[16px] font-semibold text-deep-blue hover:bg-ghost transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-border space-y-3">
                  <a href="tel:+13054671525" className="flex items-center justify-center gap-2 py-3 text-text-mid font-medium">
                    <Phone size={16} />
                    (305) 467-1525
                  </a>
                  <Link
                    href={locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo'}
                    className="block text-center py-3.5 bg-cyan text-white font-semibold rounded-xl hover:bg-cyan-soft transition-colors"
                  >
                    {t('cta')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
