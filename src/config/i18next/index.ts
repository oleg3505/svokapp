import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from '../../locales/en.json';
import ua from '../../locales/ua.json';

i18n.use(initReactI18next).init({
  lng: Localization.getLocales()[0]?.languageCode || 'ua',
  fallbackLng: 'ua',
  resources: {
    en: { translation: en },
    ua: { translation: ua },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
