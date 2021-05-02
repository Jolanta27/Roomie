import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { en } from './languages/en';
import { dk } from './languages/dk';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ...dk,
            ...en,
        },
        fallbackLng: 'dk',

        ns: [ 'translations' ],
        defaultNS: 'translations',

        keySeparator: false,

        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },

        react: {
            wait: true,
        },
    })
    .catch((event: string) => {
        console.error(event);
    });

// eslint-disable-next-line import/no-default-export
export default i18n;
