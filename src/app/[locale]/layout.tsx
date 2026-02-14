import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AmbientBackground from '@/components/layout/AmbientBackground';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import '@/app/globals.css';

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

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
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
