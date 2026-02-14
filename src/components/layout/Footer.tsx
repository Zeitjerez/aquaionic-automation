import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: t('services.wellWater'), href: locale === 'en' ? '/well-water-treatment' : '/es/tratamiento-agua-de-pozo' },
    { label: t('services.ironSulfur'), href: locale === 'en' ? '/iron-sulfur-removal' : '/es/eliminacion-hierro-azufre' },
    { label: t('services.waterSoftener'), href: locale === 'en' ? '/water-softener-installation' : '/es/instalacion-ablandadores' },
    { label: t('services.reverseOsmosis'), href: locale === 'en' ? '/reverse-osmosis-system' : '/es/sistema-osmosis-inversa' },
    { label: t('services.wholeHouse'), href: locale === 'en' ? '/whole-house-water-filtration' : '/es/filtracion-agua-toda-casa' },
  ];

  const areaLinks = [
    { label: t('areas.miami'), href: locale === 'en' ? '/miami' : '/es/miami-es' },
    { label: t('areas.bocaRaton'), href: locale === 'en' ? '/boca-raton' : '/es/boca-raton-es' },
    { label: t('areas.fortLauderdale'), href: locale === 'en' ? '/fort-lauderdale' : '/es/fort-lauderdale-es' },
    { label: t('areas.palmBeach'), href: locale === 'en' ? '/palm-beach' : '/es/palm-beach-es' },
  ];

  const companyLinks = [
    { label: t('company.about'), href: locale === 'en' ? '/about' : '/es/nosotros' },
    { label: t('company.blog'), href: locale === 'en' ? '/blog' : '/es/blog-es' },
    { label: t('company.contact'), href: locale === 'en' ? '/contact' : '/es/contacto' },
    { label: t('company.privacy'), href: locale === 'en' ? '/privacy-policy' : '/es/politica-privacidad' },
    { label: t('company.refund'), href: locale === 'en' ? '/refund-policy' : '/es/politica-reembolso' },
  ];

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={locale === 'en' ? '/' : '/es/inicio'} className="inline-block mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-jakarta font-extrabold text-white tracking-tight">
                  AQUA
                </span>
                <span className="text-2xl font-jakarta font-extrabold text-cyan tracking-tight">
                  IONIC
                </span>
              </div>
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
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              {t('copyright', { year: currentYear })}
            </p>
            <p className="text-sm text-white/60">
              {t('builtWith')}{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-cyan-soft transition-colors"
              >
                Next.js
              </a>
              {' '}&amp;{' '}
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-cyan-soft transition-colors"
              >
                Claude
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
