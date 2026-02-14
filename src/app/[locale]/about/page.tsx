import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface AboutPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: AboutPageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'about' : 'nosotros';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) {
    return {
      title: 'About | Aquaionic',
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/about/',
        'es': 'https://aquaionic.us/es/nosotros/',
      },
    },
  };
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  setRequestLocale(locale);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
            {locale === 'en' ? 'About Aquaionic' : 'Sobre Aquaionic'}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text-mid leading-relaxed">
              {locale === 'en'
                ? '10+ years providing professional water purification systems in South Florida. NSF/FDA certified. Family-owned business serving Miami, Boca Raton, Fort Lauderdale.'
                : '10+ años proporcionando sistemas profesionales de purificación de agua en el sur de Florida. Certificados NSF/FDA. Empresa familiar sirviendo Miami, Boca Raton, Fort Lauderdale.'}
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
