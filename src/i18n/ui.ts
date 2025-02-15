// Define available languages
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

// Type for supported languages
export type Language = keyof typeof languages;

// Default language setting
export const defaultLang: Language = 'es';
export const showDefaultLang = false;

// Translation key type to ensure type safety
type TranslationKey = 
  | 'Francisco Muñoz Betanzos'
  | 'hero.greeting'
  | 'hero.role'
  | 'hero.description'
  | 'hero.ctaPrimary'
  | 'hero.ctaSecondary';

// Type for the translation dictionary
type TranslationDict = {
  [K in TranslationKey]: string;
};

// Translations organized by language
export const ui: Record<Language, TranslationDict> = {
  es: {
    'Francisco Muñoz Betanzos': 'Francisco Muñoz Betanzos',
    'hero.greeting': '¡Hola! Soy',
    'hero.role': 'Desarrollador Full Stack',
    'hero.description': 'Transformando ideas en experiencias digitales únicas',
    'hero.ctaPrimary': 'Ver proyectos',
    'hero.ctaSecondary': 'Contactar',
  },
  en: {
    'Francisco Muñoz Betanzos': 'Francisco Muñoz Betanzos',
    'hero.greeting': 'Hi! I\'m',
    'hero.role': 'Full Stack Developer',
    'hero.description': 'Turning ideas into unique digital experiences',
    'hero.ctaPrimary': 'View projects',
    'hero.ctaSecondary': 'Contact me',
  },
} as const;

/**
 * Extracts the language code from the URL
 * @param url - The current URL
 * @returns The detected language code or the default language
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

/**
 * Creates a translation function for the specified language
 * @param lang - The language to use for translations
 * @returns A function that returns translations for the given key
 */
export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    // Fallback to default language if translation is missing
    return ui[lang][key] || ui[defaultLang][key];
  }
}
