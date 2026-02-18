import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const title = locale === 'en'
    ? 'Privacy Policy | Aquaionic Water Purification'
    : 'Política de Privacidad | Aquaionic Purificación de Agua';
  const description = locale === 'en'
    ? 'Privacy policy for Aquaionic Water Purification. How we collect, use, and protect your personal information. CCPA compliant. Last updated January 2025.'
    : 'Política de privacidad de Aquaionic. Cómo recopilamos, usamos y protegemos su información personal. Cumple con CCPA. Actualizado enero 2025.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://aquaionic.us/${locale}/privacy-policy/`,
      languages: {
        'en': 'https://aquaionic.us/en/privacy-policy/',
        'es': 'https://aquaionic.us/es/privacy-policy/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/privacy-policy/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
  };
}

export default function PrivacyPolicyPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const en = locale === 'en';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: en ? 'Privacy Policy' : 'Política de Privacidad',
            url: `https://aquaionic.us/${locale}/privacy-policy/`,
          }),
        }}
      />
      <div className="pt-[72px]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
              {en ? 'Privacy Policy' : 'Política de Privacidad'}
            </h1>
            <p className="text-[14px] text-gray-400 mb-10">
              {en ? 'Last Updated: January 2025' : 'Última Actualización: Enero 2025'}
            </p>

            <div className="prose prose-lg max-w-none space-y-10">

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '1. Information We Collect' : '1. Información que Recopilamos'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {en
                    ? 'We collect information you provide directly to us when you:'
                    : 'Recopilamos información que usted nos proporciona directamente cuando:'}
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {en ? (
                    <>
                      <li>Request a free water test or consultation</li>
                      <li>Purchase a water treatment system or service</li>
                      <li>Fill out a contact or quote form on our website</li>
                      <li>Call or email us directly</li>
                      <li>Subscribe to our communications</li>
                    </>
                  ) : (
                    <>
                      <li>Solicita un análisis de agua o consulta gratuita</li>
                      <li>Compra un sistema o servicio de tratamiento de agua</li>
                      <li>Completa un formulario de contacto o cotización en nuestro sitio web</li>
                      <li>Nos llama o envía un correo electrónico directamente</li>
                      <li>Se suscribe a nuestras comunicaciones</li>
                    </>
                  )}
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  {en
                    ? 'This information may include your name, email address, phone number, home address, and details about your water quality issues. We also automatically collect basic technical information such as your IP address, browser type, and pages visited when you use our website.'
                    : 'Esta información puede incluir su nombre, dirección de correo electrónico, número de teléfono, dirección de su hogar y detalles sobre sus problemas de calidad del agua. También recopilamos automáticamente información técnica básica como su dirección IP, tipo de navegador y páginas visitadas cuando usa nuestro sitio web.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '2. How We Use Your Information' : '2. Cómo Usamos Su Información'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {en ? 'We use the information we collect to:' : 'Usamos la información recopilada para:'}
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {en ? (
                    <>
                      <li>Schedule and perform water tests and installations at your home</li>
                      <li>Process purchases and send order confirmations</li>
                      <li>Respond to your questions and provide customer support</li>
                      <li>Send service reminders, maintenance notifications, and updates</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                    </>
                  ) : (
                    <>
                      <li>Programar y realizar análisis de agua e instalaciones en su hogar</li>
                      <li>Procesar compras y enviar confirmaciones de pedidos</li>
                      <li>Responder a sus preguntas y brindar atención al cliente</li>
                      <li>Enviar recordatorios de servicio, notificaciones de mantenimiento y actualizaciones</li>
                      <li>Mejorar nuestro sitio web y servicios</li>
                      <li>Cumplir con obligaciones legales</li>
                    </>
                  )}
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  {en
                    ? 'We do not sell your personal information to third parties.'
                    : 'No vendemos su información personal a terceros.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '3. Information Sharing' : '3. Compartir Información'}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {en
                    ? 'We may share your information with trusted service providers who assist us in operating our website and conducting our business (such as payment processors or scheduling software), subject to confidentiality agreements. We may also disclose your information if required by law, to protect our rights, or in connection with a business transfer. We never sell your personal data to marketing companies or data brokers.'
                    : 'Podemos compartir su información con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web y llevar a cabo nuestro negocio (como procesadores de pago o software de programación), sujeto a acuerdos de confidencialidad. También podemos divulgar su información si lo requiere la ley, para proteger nuestros derechos o en relación con una transferencia comercial. Nunca vendemos sus datos personales a empresas de marketing o corredores de datos.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '4. Cookies and Tracking' : '4. Cookies y Rastreo'}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {en
                    ? 'Our website uses cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand where visitors come from. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality. We use Google Analytics to understand website usage patterns — this data is aggregated and does not identify you personally.'
                    : 'Nuestro sitio web usa cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y entender de dónde vienen los visitantes. Puede controlar la configuración de cookies a través de las preferencias de su navegador. Deshabilitar cookies puede afectar algunas funcionalidades del sitio web. Usamos Google Analytics para entender los patrones de uso del sitio web — estos datos son agregados y no lo identifican personalmente.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '5. Data Security' : '5. Seguridad de Datos'}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {en
                    ? 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. Our website uses SSL/TLS encryption. However, no method of internet transmission is 100% secure. We encourage you to use strong passwords and to notify us immediately if you suspect unauthorized access to your information.'
                    : 'Implementamos medidas de seguridad estándar de la industria para proteger su información personal del acceso no autorizado, divulgación o uso indebido. Nuestro sitio web usa cifrado SSL/TLS. Sin embargo, ningún método de transmisión por internet es 100% seguro. Le animamos a usar contraseñas seguras y notificarnos inmediatamente si sospecha acceso no autorizado a su información.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '6. Your Rights (CCPA)' : '6. Sus Derechos (CCPA)'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {en
                    ? 'Under the California Consumer Privacy Act (CCPA) and other applicable laws, you have the right to:'
                    : 'Bajo la Ley de Privacidad del Consumidor de California (CCPA) y otras leyes aplicables, usted tiene derecho a:'}
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {en ? (
                    <>
                      <li>Know what personal information we collect and how it is used</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt out of the sale of your personal information (we do not sell it)</li>
                      <li>Receive equal service regardless of exercising these rights</li>
                    </>
                  ) : (
                    <>
                      <li>Saber qué información personal recopilamos y cómo se usa</li>
                      <li>Solicitar la eliminación de su información personal</li>
                      <li>Oponerse a la venta de su información personal (no la vendemos)</li>
                      <li>Recibir servicio igual independientemente del ejercicio de estos derechos</li>
                    </>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '7. Contact Us' : '7. Contáctenos'}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {en
                    ? 'For privacy questions, to exercise your rights, or to request deletion of your data, please contact us:'
                    : 'Para preguntas sobre privacidad, para ejercer sus derechos o solicitar la eliminación de sus datos, contáctenos:'}
                </p>
                <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
                  <p className="text-[14px] font-semibold text-deep-blue">Aquaionic Water Purification</p>
                  <p className="text-[14px] text-gray-600">Email: info@aquaionic.us</p>
                  <p className="text-[14px] text-gray-600">{en ? 'Phone: (305) 467-1525' : 'Teléfono: (305) 467-1525'}</p>
                  <p className="text-[14px] text-gray-600">{en ? 'Service Area: Miami-Dade, Broward & Palm Beach County, FL' : 'Área de Servicio: Miami-Dade, Broward y Condado de Palm Beach, FL'}</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
