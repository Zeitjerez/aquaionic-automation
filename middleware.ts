import createMiddleware from 'next-intl/middleware';
import { routing } from './src/lib/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (internal Next.js files)
  // - Static files (images, fonts, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
