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

  return (
    <html lang={locale} className={`${jakarta.variable} ${dmSans.variable}`}>
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
