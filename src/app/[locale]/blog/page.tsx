import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPageMetadata } from '@/lib/content/pages';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'blog' : 'blog-es';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) return { title: 'Blog | Aquaionic' };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/blog/',
        'es': 'https://aquaionic.us/es/blog-es/',
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

export default function BlogPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: locale === 'en' ? 'Aquaionic Water Quality Blog' : 'Blog de Calidad del Agua Aquaionic',
            description: locale === 'en'
              ? 'Expert advice on Florida water quality and treatment.'
              : 'Consejos expertos sobre calidad y tratamiento del agua en Florida.',
            url: locale === 'en' ? 'https://aquaionic.us/blog/' : 'https://aquaionic.us/es/blog-es/',
          }),
        }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-jakarta font-extrabold text-deep-blue mb-6">
              {locale === 'en' ? 'Water Quality Blog | Florida' : 'Blog de Calidad del Agua | Florida'}
            </h1>
            <p className="text-xl text-text-mid leading-relaxed mb-12">
              {locale === 'en'
                ? 'Expert advice on Florida water quality. Learn about well water treatment, hard water solutions, reverse osmosis systems.'
                : 'Consejos expertos sobre calidad del agua en Florida. Aprenda sobre tratamiento de agua de pozo, soluciones para agua dura, sistemas de ósmosis inversa.'}
            </p>

            <div className="space-y-8">
              <article className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h2 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en'
                    ? 'Understanding Florida Well Water Quality'
                    : 'Entendiendo la Calidad del Agua de Pozo en Florida'}
                </h2>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Learn about common contaminants in Florida well water and how to treat them effectively.'
                    : 'Aprenda sobre contaminantes comunes en el agua de pozo de Florida y cómo tratarlos efectivamente.'}
                </p>
              </article>

              <article className="p-6 bg-white rounded-lg border-2 border-ghost hover:border-cyan transition-all">
                <h2 className="text-2xl font-bold text-deep-blue mb-3">
                  {locale === 'en'
                    ? 'How to Choose the Right Water Softener'
                    : 'Cómo Elegir el Ablandador de Agua Correcto'}
                </h2>
                <p className="text-text-mid">
                  {locale === 'en'
                    ? 'Guide to selecting the perfect water softener for your Florida home.'
                    : 'Guía para seleccionar el ablandador de agua perfecto para su hogar en Florida.'}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
