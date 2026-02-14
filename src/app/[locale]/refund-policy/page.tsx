import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'refund-policy' : 'politica-de-reembolso';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Refund Policy | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/refund-policy/',
        'es': 'https://aquaionic.us/es/politica-de-reembolso/',
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

export default function RefundPolicyPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: locale === 'en' ? 'Refund Policy' : 'Política de Reembolso',
            description: locale === 'en'
              ? 'Aquaionic refund and return policy.'
              : 'Política de reembolso y devoluciones de Aquaionic.',
            url: locale === 'en' ? 'https://aquaionic.us/refund-policy/' : 'https://aquaionic.us/es/politica-de-reembolso/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Refund Policy' : 'Política de Reembolso'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-mid mb-4">
                <strong>{locale === 'en' ? 'Last Updated:' : 'Última Actualización:'}</strong> {new Date().toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES')}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? '30-Day Satisfaction Guarantee' : 'Garantía de Satisfacción de 30 Días'}
              </h2>
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'We offer a 30-day money-back guarantee on all water purification systems. If you are not completely satisfied, you can return the product for a full refund.'
                  : 'Ofrecemos una garantía de devolución de dinero de 30 días en todos los sistemas de purificación de agua. Si no está completamente satisfecho, puede devolver el producto para un reembolso completo.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'How to Request a Refund' : 'Cómo Solicitar un Reembolso'}
              </h2>
              <ol className="space-y-2 text-text-mid list-decimal list-inside">
                <li>{locale === 'en' ? 'Contact us within 30 days of purchase' : 'Contáctenos dentro de 30 días de la compra'}</li>
                <li>{locale === 'en' ? 'Return the product in original condition' : 'Devuelva el producto en condición original'}</li>
                <li>{locale === 'en' ? 'Include proof of purchase' : 'Incluya comprobante de compra'}</li>
                <li>{locale === 'en' ? 'Refund will be processed within 7 business days' : 'El reembolso se procesará dentro de 7 días hábiles'}</li>
              </ol>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Warranty Coverage' : 'Cobertura de Garantía'}
              </h2>
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'All products include manufacturer warranty. NSF certified systems come with extended warranty options.'
                  : 'Todos los productos incluyen garantía del fabricante. Los sistemas certificados NSF vienen con opciones de garantía extendida.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'Contact Us' : 'Contáctenos'}
              </h2>
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'For refund requests, contact us at: info@aquaionic.us or call +1 (305) 467-1525'
                  : 'Para solicitudes de reembolso, contáctenos en: info@aquaionic.us o llame al +1 (305) 467-1525'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
