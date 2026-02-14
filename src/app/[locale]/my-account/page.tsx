import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'my-account' : 'mi-cuenta';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'My Account | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/my-account/',
        'es': 'https://aquaionic.us/es/mi-cuenta/',
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

export default function MyAccountPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
            {locale === 'en' ? 'My Account' : 'Mi Cuenta'}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text-mid leading-relaxed mb-6">
              {locale === 'en'
                ? 'Access your Aquaionic account. View order history, track shipments, manage subscriptions.'
                : 'Acceda a su cuenta Aquaionic. Vea historial de pedidos, rastree envíos, administre suscripciones.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h3 className="text-xl font-bold text-deep-blue mb-2">
                  {locale === 'en' ? 'Order History' : 'Historial de Pedidos'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en' ? 'View your past orders and invoices' : 'Vea sus pedidos anteriores y facturas'}
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h3 className="text-xl font-bold text-deep-blue mb-2">
                  {locale === 'en' ? 'Track Shipments' : 'Rastrear Envíos'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en' ? 'Track your orders in real-time' : 'Rastree sus pedidos en tiempo real'}
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h3 className="text-xl font-bold text-deep-blue mb-2">
                  {locale === 'en' ? 'Manage Subscriptions' : 'Administrar Suscripciones'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en' ? 'Update filter replacement schedules' : 'Actualice programas de reemplazo de filtros'}
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h3 className="text-xl font-bold text-deep-blue mb-2">
                  {locale === 'en' ? 'Customer Support' : 'Soporte al Cliente'}
                </h3>
                <p className="text-text-mid">
                  {locale === 'en' ? 'Get help with your systems' : 'Obtenga ayuda con sus sistemas'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
