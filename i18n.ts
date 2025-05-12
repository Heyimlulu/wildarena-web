import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const supportedLngs = ['en', 'fr'];

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    react: { useSuspense: false },
  });

export default i18n;
