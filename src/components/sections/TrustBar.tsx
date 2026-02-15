'use client';

import { useTranslations } from 'next-intl';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const trustItems = [
    t('waterAnalysis'),
    t('certified'),
    t('americanMade'),
    t('support'),
  ];

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-8">
              <span className="text-sm font-medium text-gray-500">{item}</span>
              {index < trustItems.length - 1 && (
                <div className="w-px h-4 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
