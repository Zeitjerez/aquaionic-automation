import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'cart' : 'carrito';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Shopping Cart | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/cart/',
        'es': 'https://aquaionic.us/es/carrito/',
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

export default function CartPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
            {locale === 'en' ? 'Shopping Cart' : 'Carrito de Compras'}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text-mid leading-relaxed">
              {locale === 'en'
                ? 'Review your cart and complete your purchase. Free shipping in South Florida. Secure checkout.'
                : 'Revise su carrito y complete su compra. Envío gratis en el sur de Florida. Pago seguro.'}
            </p>

            <div className="mt-8 p-6 bg-ghost rounded-lg">
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'Your cart is empty. Browse our shop to add products.'
                  : 'Su carrito está vacío. Visite nuestra tienda para agregar productos.'}
              </p>
              <a
                href={locale === 'en' ? '/shop' : '/es/tienda'}
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-cyan to-ocean text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                {locale === 'en' ? 'Continue Shopping' : 'Continuar Comprando'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
