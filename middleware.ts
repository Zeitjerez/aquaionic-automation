import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/lib/i18n/config';

export default createMiddleware({
  // All locales supported
  locales,

  // Default locale
  defaultLocale,

  // Strategy: EN without prefix, ES with /es/
  localePrefix: 'as-needed',

  // Alternate links in HTML head
  alternateLinks: true,

  // Locale detection from Accept-Language header
  localeDetection: true,
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (internal Next.js files)
  // - Static files (images, fonts, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
