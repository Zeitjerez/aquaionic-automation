import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Permitir crawlers de IA explícitamente
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    sitemap: 'https://aquaionic.us/sitemap.xml',
    host: 'https://aquaionic.us',
  };
}
