'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const [servicesOpen, setServicesOpen] = useState(false);

  // Get the path without locale prefix for language switching
  const getLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|es)/, '') || '/';
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  };

  const services = [
    {
      label: 'Well Water Treatment',
      href: locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo'
    },
    {
      label: 'Iron & Sulfur Removal',
      href: locale === 'en' ? '/iron-sulfur-removal' : '/es/eliminacion-hierro-azufre'
    },
    {
      label: 'Hard Water Solutions',
      href: locale === 'en' ? '/hard-water-solutions' : '/es/soluciones-agua-dura'
    },
    {
      label: 'Reverse Osmosis',
      href: locale === 'en' ? '/reverse-osmosis-systems' : '/es/sistemas-osmosis-inversa'
    },
    {
      label: 'Whole House Filtration',
      href: locale === 'en' ? '/whole-house-filtration' : '/es/filtracion-casa-completa'
    },
    {
      label: 'City Water Purification',
      href: locale === 'en' ? '/city-water-purification' : '/es/purificacion-agua-ciudad'
    },
  ];

  const navItems = [
    { label: t('nav.about'), href: `/${locale === 'en' ? 'about' : 'es/nosotros'}` },
    { label: t('nav.areas'), href: `/${locale === 'en' ? 'miami' : 'es/miami-es'}` },
    { label: t('nav.shop'), href: `/${locale === 'en' ? 'shop' : 'es/tienda'}` },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/[0.04]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 h-[72px]">
            {/* Logo */}
            <Link href={locale === 'en' ? '/' : '/es/inicio'} className="flex-shrink-0">
              <span className="font-jakarta font-extrabold text-[20px] sm:text-[24px] tracking-[-0.04em] bg-gradient-to-r from-deep-blue via-ocean to-cyan bg-clip-text text-transparent">
                AQUAIONIC
              </span>
            </Link>

            {/* Mobile Actions - Language + CTA + Menu */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-0.5 p-0.5 bg-ghost rounded-full border border-gray-200">
                <Link
                  href={getLocalizedPath('en')}
                  className={cn(
                    "px-2 py-1 text-[11px] font-bold rounded-full transition-all duration-200",
                    locale === 'en'
                      ? "bg-cyan text-white"
                      : "text-text-mid"
                  )}
                >
                  EN
                </Link>
                <Link
                  href={getLocalizedPath('es')}
                  className={cn(
                    "px-2 py-1 text-[11px] font-bold rounded-full transition-all duration-200",
                    locale === 'es'
                      ? "bg-cyan text-white"
                      : "text-text-mid"
                  )}
                >
                  ES
                </Link>
              </div>

              {/* Mobile CTA */}
              <Link
                href="#water-test"
                className="px-3 py-1.5 bg-cyan text-white text-[11px] font-bold rounded-full hover:bg-cyan-soft transition-colors whitespace-nowrap"
              >
                {locale === 'en' ? 'Free Test' : 'Prueba'}
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 text-deep-blue"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[14.5px] font-medium text-text-mid hover:text-cyan transition-colors duration-200">
                  {t('nav.services')}
                  <ChevronDown size={14} className={cn(
                    "transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2.5 text-[13.5px] font-medium text-text-mid hover:text-cyan hover:bg-ghost transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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

              {/* Language Switcher */}
              <div className="flex items-center gap-1 p-1 bg-ghost rounded-full border border-gray-200">
                <Link
                  href={getLocalizedPath('en')}
                  className={cn(
                    "px-3 py-1.5 text-[13px] font-semibold rounded-full transition-all duration-200",
                    locale === 'en'
                      ? "bg-cyan text-white shadow-sm"
                      : "text-text-mid hover:text-cyan"
                  )}
                >
                  EN
                </Link>
                <Link
                  href={getLocalizedPath('es')}
                  className={cn(
                    "px-3 py-1.5 text-[13px] font-semibold rounded-full transition-all duration-200",
                    locale === 'es'
                      ? "bg-cyan text-white shadow-sm"
                      : "text-text-mid hover:text-cyan"
                  )}
                >
                  ES
                </Link>
              </div>

              <Link
                href="#water-test"
                className="px-6 py-2.5 bg-cyan hover:bg-cyan-soft text-white text-[13.5px] font-semibold rounded-full transition-all duration-200 animate-breathe"
              >
                {t('cta')}
              </Link>
            </nav>
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
                  <span className="font-jakarta font-extrabold text-xl bg-gradient-to-r from-deep-blue via-ocean to-cyan bg-clip-text text-transparent">
                    AQUAIONIC
                  </span>
                  <button onClick={() => setMobileOpen(false)} className="p-2 text-text-mid hover:text-deep-blue">
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex-1 p-6 space-y-1 overflow-y-auto">
                  {/* Services Section */}
                  <div className="mb-4">
                    <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-text-light">
                      {t('nav.services')}
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-[14px] font-medium text-text-mid hover:bg-ghost hover:text-cyan transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>

                  {/* Other Nav Items */}
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
                <div className="p-6 border-t border-border">
                  <a href="tel:+13054671525" className="flex items-center justify-center gap-2 py-3 text-text-mid font-medium">
                    <Phone size={16} />
                    (305) 467-1525
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
