import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: t('services.wellWater'), href: locale === 'en' ? '/en/well-water-treatment' : '/es/tratamiento-agua-de-pozo' },
    { label: t('services.ironSulfur'), href: locale === 'en' ? '/en/iron-sulfur-removal' : '/es/eliminacion-hierro-azufre' },
    { label: t('services.waterSoftener'), href: locale === 'en' ? '/en/water-softener-installation' : '/es/instalacion-ablandadores' },
    { label: t('services.reverseOsmosis'), href: locale === 'en' ? '/en/reverse-osmosis-systems' : '/es/sistemas-osmosis-inversa' },
    { label: t('services.wholeHouse'), href: locale === 'en' ? '/en/whole-house-filtration' : '/es/filtracion-toda-la-casa' },
  ];

  const areaLinks = [
    { label: t('areas.miami'), href: locale === 'en' ? '/en/miami' : '/es/miami' },
    { label: t('areas.bocaRaton'), href: locale === 'en' ? '/en/boca-raton' : '/es/boca-raton' },
    { label: t('areas.fortLauderdale'), href: locale === 'en' ? '/en/fort-lauderdale' : '/es/fort-lauderdale' },
    { label: t('areas.palmBeach'), href: locale === 'en' ? '/en/palm-beach' : '/es/palm-beach' },
  ];

  const companyLinks = [
    { label: t('company.about'), href: locale === 'en' ? '/en/about' : '/es/nosotros' },
    { label: t('company.blog'), href: locale === 'en' ? '/en/blog' : '/es/blog-es' },
    { label: t('company.contact'), href: locale === 'en' ? '/en/contact' : '/es/contacto' },
    { label: t('company.privacy'), href: locale === 'en' ? '/en/privacy-policy' : '/es/politica-de-privacidad' },
    { label: t('company.refund'), href: locale === 'en' ? '/en/refund-policy' : '/es/politica-de-reembolso' },
  ];

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={locale === 'en' ? '/en' : '/es'} className="inline-block mb-4">
              <span className="font-jakarta font-extrabold text-[24px] tracking-[-0.04em] bg-gradient-to-r from-white via-cyan-soft to-cyan bg-clip-text text-transparent">
                AQUAIONIC
              </span>
            </Link>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              {t('brand.tagline')}
              <br />
              {t('brand.description')}
            </p>

            {/* Certifications */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-xs font-bold text-white">{t('certifications.nsf')}</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-xs font-bold text-white">{t('certifications.fda')}</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-xs font-bold text-white">{t('certifications.epa')}</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a
                href={`tel:${tContact('phone')}`}
                className="block text-sm text-white/70 hover:text-cyan transition-colors"
              >
                {tContact('phone')}
              </a>
              <a
                href={`mailto:${tContact('email')}`}
                className="block text-sm text-white/70 hover:text-cyan transition-colors"
              >
                {tContact('email')}
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-base font-jakarta font-bold text-white mb-4">
              {t('services.title')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Areas Column */}
          <div>
            <h4 className="text-base font-jakarta font-bold text-white mb-4">
              {t('areas.title')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {areaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-base font-jakarta font-bold text-white mb-4">
              {t('company.title')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-[13px] text-white/35">
              © 2026 Aquaionic. All rights reserved.
            </span>
            <span className="text-[13px] text-white/35">
              Design by{' '}
              <a
                href="https://flowtool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-white transition-colors"
              >
                Flow Tool
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
