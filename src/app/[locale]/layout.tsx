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

  const siteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://aquaionic.us/#business',
        name: 'Aquaionic',
        url: 'https://aquaionic.us/en/',
        logo: 'https://aquaionic.us/images/logo.png',
        description:
          'Professional water purification systems for South Florida homes. NSF/FDA certified. Well water treatment, reverse osmosis, whole house filtration.',
        telephone: '+13054671525',
        priceRange: '$',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'FL',
          addressCountry: 'US',
        },
        areaServed: ['Miami', 'Boca Raton', 'Fort Lauderdale', 'Palm Beach'],
        sameAs: [],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Water Treatment Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Well Water Treatment' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reverse Osmosis Systems' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole House Filtration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Iron & Sulfur Removal' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hard Water Solutions' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://aquaionic.us/#website',
        url: 'https://aquaionic.us/en/',
        name: 'Aquaionic',
        inLanguage: ['en-US', 'es-ES'],
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://aquaionic.us/en/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What water problems are common in South Florida?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'South Florida homes commonly experience iron and sulfur in well water, hard water with high calcium and magnesium, chlorine in city water, and bacterial contamination. Aquaionic provides NSF/FDA certified systems to solve all these issues.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer free water testing in Miami, Boca Raton and Fort Lauderdale?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Aquaionic offers free water analysis for homes in Miami, Boca Raton, Fort Lauderdale, and Palm Beach. Call (305) 467-1525 or submit the form on our website.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are your water purification systems NSF and FDA certified?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All Aquaionic water purification systems are NSF and FDA certified, ensuring they meet the highest standards for contaminant removal and water safety.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang={locale} className={`${jakarta.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
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
