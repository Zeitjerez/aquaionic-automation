import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import { locales } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AmbientBackground from '@/components/layout/AmbientBackground';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import '@/app/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aquaionic.us/#business',
    name: 'Aquaionic',
    description:
      'Professional water purification systems for South Florida homes. Well water treatment, reverse osmosis, whole house filtration. NSF/FDA certified.',
    url: 'https://aquaionic.us',
    telephone: '+13054671525',
    email: 'info@aquaionic.us',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boca Raton',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Miami' },
      { '@type': 'City', name: 'Boca Raton' },
      { '@type': 'City', name: 'Fort Lauderdale' },
      { '@type': 'City', name: 'West Palm Beach' },
    ],
    knowsAbout: [
      'Well Water Treatment',
      'Reverse Osmosis Systems',
      'Whole House Water Filtration',
      'Iron and Sulfur Removal',
      'Hard Water Solutions',
      'Water Purification Florida',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Water Purification Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Well Water Treatment' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reverse Osmosis Systems' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole House Filtration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Iron & Sulfur Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hard Water Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'City Water Purification' } },
      ],
    },
    sameAs: ['https://aquaionic.us'],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang={locale} className={`${jakarta.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-dm">
        <NextIntlClientProvider messages={messages}>
          {/* Ambient background */}
          <AmbientBackground />

          {/* Main structure */}
          <div className="relative z-10">
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
          </div>

          {/* WhatsApp float button */}
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
