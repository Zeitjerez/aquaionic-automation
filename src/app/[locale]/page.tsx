import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/content/pages';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WaterTestCTA from '@/components/sections/WaterTestCTA';
import AreasGrid from '@/components/sections/AreasGrid';

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: HomePageProps): Promise<Metadata> {
  const slug = locale === 'en' ? 'home' : 'inicio';
  const metadata = getPageMetadata(slug, locale as 'en' | 'es');

  if (!metadata) {
    return {
      title: 'Aquaionic',
      description: 'Water purification systems for Florida',
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://aquaionic.us/',
        'es': 'https://aquaionic.us/es/inicio/',
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WaterTestCTA />
      <AreasGrid />
    </>
  );
}
