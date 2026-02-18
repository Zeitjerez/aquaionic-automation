import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ContactForm from './ContactForm';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const title = locale === 'en'
    ? 'Contact Us | Free Water Test | Aquaionic South Florida'
    : 'Contáctenos | Análisis de Agua Gratis | Aquaionic Sur de Florida';
  const description = locale === 'en'
    ? 'Schedule your free water test in Miami-Dade, Broward, or Palm Beach County. Call (305) 467-1525 or fill out our contact form. Same-day response. Licensed & NSF certified.'
    : 'Programe su análisis de agua gratuito en Miami-Dade, Broward o el condado de Palm Beach. Llame al (305) 467-1525 o complete nuestro formulario. Respuesta el mismo día. Con licencia y certificado NSF.';

  return {
    title,
    description,
    keywords: locale === 'en'
      ? 'contact Aquaionic, free water test South Florida, water purification quote Miami, water treatment consultation Florida, schedule water test'
      : 'contactar Aquaionic, análisis agua gratis sur Florida, cotización purificación agua Miami, consulta tratamiento agua Florida, programar análisis agua',
    alternates: {
      canonical: `https://aquaionic.us/${locale}/contact/`,
      languages: {
        'en': 'https://aquaionic.us/en/contact/',
        'es': 'https://aquaionic.us/es/contact/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/contact/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function ContactPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  return <ContactForm locale={locale} />;
}
