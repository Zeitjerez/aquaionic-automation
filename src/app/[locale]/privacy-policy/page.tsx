import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'privacy-policy' : 'politica-de-privacidad';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Privacy Policy | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/privacy-policy/',
        'es': 'https://aquaionic.us/es/politica-de-privacidad/',
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

export default function PrivacyPolicyPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad',
            description: locale === 'en'
              ? 'Aquaionic privacy policy and data protection information.'
              : 'Política de privacidad de Aquaionic e información de protección de datos.',
            url: locale === 'en' ? 'https://aquaionic.us/privacy-policy/' : 'https://aquaionic.us/es/politica-de-privacidad/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-mid mb-4">
                <strong>{locale === 'en' ? 'Last Updated:' : 'Última Actualización:'}</strong> {new Date().toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES')}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? '1. Information We Collect' : '1. Información que Recopilamos'}
              </h2>
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'We collect information you provide directly to us, including name, email, phone number, and address when you request a water test or purchase products.'
                  : 'Recopilamos información que nos proporciona directamente, incluyendo nombre, correo electrónico, número de teléfono y dirección cuando solicita un análisis de agua o compra productos.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? '2. How We Use Your Information' : '2. Cómo Usamos Su Información'}
              </h2>
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'We use your information to provide services, process orders, communicate with you, and improve our products.'
                  : 'Usamos su información para proporcionar servicios, procesar pedidos, comunicarnos con usted y mejorar nuestros productos.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? '3. Data Protection' : '3. Protección de Datos'}
              </h2>
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'We implement appropriate security measures to protect your personal information. We are GDPR compliant.'
                  : 'Implementamos medidas de seguridad apropiadas para proteger su información personal. Cumplimos con GDPR.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? '4. Contact Us' : '4. Contáctenos'}
              </h2>
              <p className="text-text-mid">
                {locale === 'en'
                  ? 'For privacy questions, contact us at: info@aquaionic.us'
                  : 'Para preguntas sobre privacidad, contáctenos en: info@aquaionic.us'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
