'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: t('nav.home'), href: locale === 'en' ? '/' : '/es/inicio' },
    { label: t('nav.services'), href: locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo' },
    { label: t('nav.areas'), href: locale === 'en' ? '/miami' : '/es/miami-es' },
    { label: t('nav.shop'), href: locale === 'en' ? '/shop' : '/es/tienda' },
    { label: t('nav.about'), href: locale === 'en' ? '/about' : '/es/nosotros' },
    { label: t('nav.blog'), href: locale === 'en' ? '/blog' : '/es/blog-es' },
  ];

  const otherLocale = locale === 'en' ? 'es' : 'en';
  const switchLocaleUrl = locale === 'en' ? '/es/inicio' : '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'header-glass-scrolled' : 'header-glass'
        } ${className}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={locale === 'en' ? '/' : '/es/inicio'} className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-2xl font-jakarta font-extrabold text-deep-blue tracking-tight">
                  AQUA
                </span>
                <span className="text-2xl font-jakarta font-extrabold text-cyan tracking-tight">
                  IONIC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-text-mid hover:text-ocean transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <Link
                href={switchLocaleUrl}
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-text-mid hover:bg-ghost transition-colors"
                aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Español'}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
                <span>{otherLocale === 'en' ? 'EN' : 'ES'}</span>
              </Link>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/13054671525"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-whatsapp text-white text-sm font-semibold hover:bg-whatsapp/90 transition-colors"
                aria-label={t('whatsapp')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>{t('whatsapp')}</span>
              </a>

              {/* CTA Button */}
              <Link
                href={locale === 'en' ? '/water-test' : '/es/prueba-agua'}
                className="hidden lg:flex btn-primary"
              >
                {t('cta')}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-ocean hover:bg-ghost transition-colors"
                aria-label={t('common.menu')}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"/>
                  ) : (
                    <path d="M3 12h18M3 6h18M3 18h18"/>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-deep-blue/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-gradient-to-br from-deep-blue to-ocean shadow-2xl lg:hidden animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-xl font-jakarta font-extrabold text-white">
                  AQUA<span className="text-cyan">IONIC</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <Link
                  href={locale === 'en' ? '/water-test' : '/es/prueba-agua'}
                  className="block w-full btn-primary text-center"
                >
                  {t('cta')}
                </Link>
                <Link
                  href={switchLocaleUrl}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                  {otherLocale === 'en' ? 'English' : 'Español'}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
