import { useTranslations, useLocale } from 'next-intl';
import AreaCard from '../cards/AreaCard';

export default function AreasGrid() {
  const t = useTranslations('areas');
  const locale = useLocale();

  const areas = [
    {
      city: t('locations.miami.city'),
      county: t('locations.miami.county'),
      href: locale === 'en' ? '/miami' : '/es/miami-es',
    },
    {
      city: t('locations.bocaRaton.city'),
      county: t('locations.bocaRaton.county'),
      href: locale === 'en' ? '/boca-raton' : '/es/boca-raton-es',
    },
    {
      city: t('locations.fortLauderdale.city'),
      county: t('locations.fortLauderdale.county'),
      href: locale === 'en' ? '/fort-lauderdale' : '/es/fort-lauderdale-es',
    },
    {
      city: t('locations.palmBeach.city'),
      county: t('locations.palmBeach.county'),
      href: locale === 'en' ? '/palm-beach' : '/es/palm-beach-es',
    },
  ];

  return (
    <section className="section-padding bg-ghost">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label mb-4">{t('label')}</div>
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-text-mid">
            {t('description')}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <AreaCard
              key={index}
              {...area}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
