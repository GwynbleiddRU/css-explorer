
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

// Import property and selector descriptions
import enPropertyDescriptions from './locales/descriptions/en/properties.json';
import ruPropertyDescriptions from './locales/descriptions/ru/properties.json';
import enSelectorDescriptions from './locales/descriptions/en/selectors.json';
import ruSelectorDescriptions from './locales/descriptions/ru/selectors.json';

const resources = {
  en: {
    translation: enTranslation,
    propertyDescriptions: enPropertyDescriptions,
    selectorDescriptions: enSelectorDescriptions
  },
  ru: {
    translation: ruTranslation,
    propertyDescriptions: ruPropertyDescriptions,
    selectorDescriptions: ruSelectorDescriptions
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already does escaping
    },
    // Allow using multiple namespaces
    ns: ['translation', 'propertyDescriptions', 'selectorDescriptions'],
    defaultNS: 'translation'
  });

export default i18n;
