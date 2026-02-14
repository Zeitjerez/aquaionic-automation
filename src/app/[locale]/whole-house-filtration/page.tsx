import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'whole-house-filtration' : 'filtracion-toda-la-casa';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Whole House Filtration | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/whole-house-filtration/',
        'es': 'https://aquaionic.us/es/filtracion-toda-la-casa/',
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
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default function WholeHouseFiltrationPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: locale === 'en' ? 'Whole House Water Filtration' : 'Filtración para Toda la Casa',
            provider: {
              '@type': 'Organization',
              name: 'Aquaionic',
              url: 'https://aquaionic.us',
            },
            areaServed: {
              '@type': 'State',
              name: 'Florida',
            },
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Whole House Water Filtration Florida' : 'Filtración de Agua para Toda la Casa Florida'}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-mid leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Complete whole house water filtration for Florida homes. Clean water from every tap. Remove chlorine, sediment, chemicals. NSF certified systems.'
                  : 'Filtración completa de agua para toda la casa en Florida. Agua limpia en cada grifo. Elimine cloro, sedimentos y químicos. Sistemas certificados NSF.'}
              </p>

              <h2 className="text-3xl font-bold text-deep-blue mt-8 mb-4">
                {locale === 'en' ? 'System Benefits' : 'Beneficios del Sistema'}
              </h2>

              <ul className="space-y-2 text-text-mid">
                <li>{locale === 'en' ? '✓ Clean water from every faucet' : '✓ Agua limpia en cada grifo'}</li>
                <li>{locale === 'en' ? '✓ Remove chlorine & chemicals' : '✓ Elimina cloro y químicos'}</li>
                <li>{locale === 'en' ? '✓ Protect appliances & plumbing' : '✓ Protege electrodomésticos y tuberías'}</li>
                <li>{locale === 'en' ? '✓ Better for skin & hair' : '✓ Mejor para piel y cabello'}</li>
                <li>{locale === 'en' ? '✓ Improved water taste & odor' : '✓ Mejor sabor y olor del agua'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
