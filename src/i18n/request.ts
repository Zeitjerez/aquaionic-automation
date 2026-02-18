import { getRequestConfig } from 'next-intl/server';
import { routing } from '../lib/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale corresponds to the [locale] segment in the URL
  let locale = await requestLocale;

  // Fall back to default locale if none found or invalid
  if (!locale || !routing.locales.includes(locale as 'en' | 'es')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
