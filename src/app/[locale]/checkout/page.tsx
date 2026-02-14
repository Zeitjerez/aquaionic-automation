import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'checkout' : 'finalizar-compra';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Checkout | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/checkout/',
        'es': 'https://aquaionic.us/es/finalizar-compra/',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonical,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
  };
}

export default function CheckoutPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
            {locale === 'en' ? 'Secure Checkout' : 'Pago Seguro'}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text-mid leading-relaxed mb-6">
              {locale === 'en'
                ? 'Complete your purchase securely. Free shipping in South Florida. Professional installation available.'
                : 'Complete su compra de forma segura. Envío gratis en el sur de Florida. Instalación profesional disponible.'}
            </p>

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan/10 to-accent-green/10 rounded-lg border-2 border-cyan">
              <h3 className="text-2xl font-bold text-deep-blue mb-3">
                {locale === 'en' ? 'Secure Payment' : 'Pago Seguro'}
              </h3>
              <ul className="space-y-2 text-text-mid">
                <li>✓ {locale === 'en' ? 'SSL Encrypted' : 'Encriptado SSL'}</li>
                <li>✓ {locale === 'en' ? 'Credit Card & PayPal' : 'Tarjeta de Crédito y PayPal'}</li>
                <li>✓ {locale === 'en' ? 'Free Shipping South FL' : 'Envío Gratis Sur FL'}</li>
                <li>✓ {locale === 'en' ? '30-Day Money Back' : 'Garantía 30 Días'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
