import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import english from './languages/english.json'
import german from './languages/german.json'
// import I18nextBrowserLanguageDetector from 'react-browser-languagedetector'

let resources = {
    en:{
        translation: english
    },
    gr:{
        translation: german
    }
};

// i18n.use(languageDetector).use(initReactI18next).init({
//     compatibilityJSON: 'v3',
//     fallbackLng: 'en', 
//     debug: true, 
//     resources,
//     react:{
//         useSuspense: false
//     },

//     interpolation:{
//         escapeValue: false,
//     }
// });

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng:'en',
    resources,
    react:{
        useSuspense: false
    }
})

export default i18n;