import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationIT from './locales/it.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  it: { translation: translationIT },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // idioma predeterminado
  interpolation: {
    escapeValue: false, // react ya hace la escapada para nosotros (seguridad de inyección XSS)
  },
});

export default i18n;