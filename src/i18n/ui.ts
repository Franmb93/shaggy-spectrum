export const languages = {
    es: 'Español',
    en: 'English',
  };
  
  export const defaultLang = 'es';
  
  export const ui = {
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
  
  export const showDefaultLang = false;
  
  export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as keyof typeof languages;
    return defaultLang;
  }
  
  export function useTranslations(lang: keyof typeof languages) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
      return ui[lang][key] || ui[defaultLang][key];
    }
  }