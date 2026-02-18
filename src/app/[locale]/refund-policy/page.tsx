import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const title = locale === 'en'
    ? 'Refund & Return Policy | Aquaionic Water Purification'
    : 'Política de Reembolso y Devoluciones | Aquaionic Purificación de Agua';
  const description = locale === 'en'
    ? '30-day satisfaction guarantee on all Aquaionic water purification systems. Learn about our refund process, warranty coverage, and how to request a return.'
    : 'Garantía de satisfacción de 30 días en todos los sistemas de purificación de agua Aquaionic. Conozca nuestro proceso de reembolso, cobertura de garantía y cómo solicitar una devolución.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://aquaionic.us/${locale}/refund-policy/`,
      languages: {
        'en': 'https://aquaionic.us/en/refund-policy/',
        'es': 'https://aquaionic.us/es/refund-policy/',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aquaionic.us/${locale}/refund-policy/`,
      siteName: 'Aquaionic',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
  };
}

export default function RefundPolicyPage({ params: { locale } }: PageProps) {
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
            name: en ? 'Refund & Return Policy' : 'Política de Reembolso y Devoluciones',
            url: `https://aquaionic.us/${locale}/refund-policy/`,
          }),
        }}
      />
      <div className="pt-[72px]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold text-deep-blue mb-4 tracking-tight">
              {en ? 'Refund & Return Policy' : 'Política de Reembolso y Devoluciones'}
            </h1>
            <p className="text-[14px] text-gray-400 mb-10">
              {en ? 'Last Updated: January 2025' : 'Última Actualización: Enero 2025'}
            </p>

            <div className="space-y-10">

              {/* 30-Day Guarantee */}
              <section className="p-7 bg-cyan/5 border border-cyan/20 rounded-2xl">
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-3">
                  {en ? '30-Day Satisfaction Guarantee' : 'Garantía de Satisfacción de 30 Días'}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {en
                    ? 'We stand behind every system we install. If you are not completely satisfied with your Aquaionic water treatment system within 30 days of installation, contact us and we will work to make it right — including a full refund if the issue cannot be resolved to your satisfaction.'
                    : 'Respaldamos cada sistema que instalamos. Si no está completamente satisfecho con su sistema de tratamiento de agua Aquaionic dentro de los 30 días posteriores a la instalación, contáctenos y trabajaremos para solucionarlo, incluyendo un reembolso completo si el problema no puede resolverse a su satisfacción.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '1. Eligibility for Refunds' : '1. Elegibilidad para Reembolsos'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {en ? 'Refunds are available under the following conditions:' : 'Los reembolsos están disponibles bajo las siguientes condiciones:'}
                </p>
                <ul className="space-y-3 text-gray-600">
                  {en ? (
                    <>
                      <li className="flex items-start gap-2"><span className="text-cyan font-bold mt-0.5">✓</span><span><strong>Equipment defects:</strong> Any system that fails to operate as described within 30 days of installation is eligible for repair, replacement, or full refund.</span></li>
                      <li className="flex items-start gap-2"><span className="text-cyan font-bold mt-0.5">✓</span><span><strong>Unsatisfactory results:</strong> If your water quality does not improve as expected after installation, we will first attempt to adjust or service the system. If results remain unsatisfactory, a refund will be offered.</span></li>
                      <li className="flex items-start gap-2"><span className="text-cyan font-bold mt-0.5">✓</span><span><strong>Cancelled orders:</strong> Orders cancelled before installation begins are eligible for a full refund of any deposit paid.</span></li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2"><span className="text-cyan font-bold mt-0.5">✓</span><span><strong>Defectos del equipo:</strong> Cualquier sistema que no funcione como se describe dentro de los 30 días posteriores a la instalación es elegible para reparación, reemplazo o reembolso completo.</span></li>
                      <li className="flex items-start gap-2"><span className="text-cyan font-bold mt-0.5">✓</span><span><strong>Resultados insatisfactorios:</strong> Si la calidad de su agua no mejora como se esperaba después de la instalación, primero intentaremos ajustar o mantener el sistema. Si los resultados siguen siendo insatisfactorios, se ofrecerá un reembolso.</span></li>
                      <li className="flex items-start gap-2"><span className="text-cyan font-bold mt-0.5">✓</span><span><strong>Pedidos cancelados:</strong> Los pedidos cancelados antes de que comience la instalación son elegibles para un reembolso completo de cualquier depósito pagado.</span></li>
                    </>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '2. How to Request a Refund' : '2. Cómo Solicitar un Reembolso'}
                </h2>
                <ol className="space-y-4 text-gray-600">
                  {en ? (
                    <>
                      <li className="flex items-start gap-3"><span className="w-7 h-7 rounded-full bg-cyan/10 text-cyan font-bold text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span>Contact us within 30 days of installation by calling <strong>(305) 467-1525</strong> or emailing <strong>info@aquaionic.us</strong>. Describe the issue and your desired resolution.</span></li>
                      <li className="flex items-start gap-3"><span className="w-7 h-7 rounded-full bg-cyan/10 text-cyan font-bold text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span>Our team will schedule a service visit within 1–2 business days to assess the situation and attempt to resolve it on site.</span></li>
                      <li className="flex items-start gap-3"><span className="w-7 h-7 rounded-full bg-cyan/10 text-cyan font-bold text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span>If the issue cannot be resolved, we will uninstall the system and process a full refund within <strong>7 business days</strong> to the original payment method.</span></li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-3"><span className="w-7 h-7 rounded-full bg-cyan/10 text-cyan font-bold text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span>Contáctenos dentro de los 30 días posteriores a la instalación llamando al <strong>(305) 467-1525</strong> o enviando un correo a <strong>info@aquaionic.us</strong>. Describa el problema y la resolución deseada.</span></li>
                      <li className="flex items-start gap-3"><span className="w-7 h-7 rounded-full bg-cyan/10 text-cyan font-bold text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span>Nuestro equipo programará una visita de servicio dentro de 1–2 días hábiles para evaluar la situación e intentar resolverla en el sitio.</span></li>
                      <li className="flex items-start gap-3"><span className="w-7 h-7 rounded-full bg-cyan/10 text-cyan font-bold text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span>Si el problema no puede resolverse, desinstalaremos el sistema y procesaremos un reembolso completo dentro de <strong>7 días hábiles</strong> al método de pago original.</span></li>
                    </>
                  )}
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '3. Warranty Coverage' : '3. Cobertura de Garantía'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {en
                    ? 'All Aquaionic systems include manufacturer warranty coverage. Specific warranty terms vary by system:'
                    : 'Todos los sistemas Aquaionic incluyen cobertura de garantía del fabricante. Los términos específicos de garantía varían según el sistema:'}
                </p>
                <div className="space-y-3">
                  {[
                    { label: en ? 'Reverse Osmosis Systems' : 'Sistemas de Ósmosis Inversa', term: en ? '1-year parts warranty + lifetime membrane support' : '1 año de garantía de piezas + soporte de membrana de por vida' },
                    { label: en ? 'Water Softeners' : 'Ablandadores de Agua', term: en ? '10-year tank warranty + 5-year valve warranty' : 'Garantía del tanque 10 años + garantía de válvula 5 años' },
                    { label: en ? 'Whole House Filters' : 'Filtros para Toda la Casa', term: en ? '5-year system warranty + annual filter service' : 'Garantía del sistema 5 años + servicio anual de filtros' },
                    { label: en ? 'Iron & Sulfur Removal Systems' : 'Sistemas de Eliminación de Hierro y Azufre', term: en ? '5-year system warranty' : 'Garantía del sistema 5 años' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-[14px] font-semibold text-deep-blue sm:w-1/2">{item.label}</span>
                      <span className="text-[13.5px] text-gray-600 sm:w-1/2">{item.term}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '4. Exclusions' : '4. Exclusiones'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {en
                    ? 'The following are not covered by our refund or satisfaction guarantee:'
                    : 'Lo siguiente no está cubierto por nuestro reembolso o garantía de satisfacción:'}
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {en ? (
                    <>
                      <li>Damage caused by misuse, neglect, or unauthorized modifications</li>
                      <li>Consumable items (filter cartridges, salt, UV bulbs) after initial installation</li>
                      <li>Issues resulting from changes in your water source or water chemistry after installation</li>
                      <li>Requests made after the 30-day guarantee period (standard warranty still applies)</li>
                    </>
                  ) : (
                    <>
                      <li>Daños causados por mal uso, negligencia o modificaciones no autorizadas</li>
                      <li>Artículos consumibles (cartuchos de filtro, sal, lámparas UV) después de la instalación inicial</li>
                      <li>Problemas resultantes de cambios en su fuente de agua o química del agua después de la instalación</li>
                      <li>Solicitudes realizadas después del período de garantía de 30 días (la garantía estándar aún aplica)</li>
                    </>
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-4">
                  {en ? '5. Contact Us' : '5. Contáctenos'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {en
                    ? 'For refund requests, warranty claims, or any questions about this policy:'
                    : 'Para solicitudes de reembolso, reclamaciones de garantía o cualquier pregunta sobre esta política:'}
                </p>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
                  <p className="text-[14px] font-semibold text-deep-blue">Aquaionic Water Purification</p>
                  <p className="text-[14px] text-gray-600">Email: info@aquaionic.us</p>
                  <p className="text-[14px] text-gray-600">{en ? 'Phone: (305) 467-1525' : 'Teléfono: (305) 467-1525'}</p>
                  <p className="text-[14px] text-gray-600">{en ? 'Hours: Monday–Friday, 8:00 AM – 6:00 PM EST' : 'Horario: Lunes–Viernes, 8:00 AM – 6:00 PM EST'}</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
