/**
 * i18n Configuration
 * Supported locales and default locale
 */

export const locales = ['en', 'es'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

/**
 * Check if a locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Get locale display names
 */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

/**
 * Get locale flags (for UI)
 */
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
};
