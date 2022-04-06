import i18next from 'i18next';
import english from './languages/english.json'
import german from './languages/german.json'

i18next.use(initReactI18).init({
    lng:'en',
    resources:{
        en: english,
        gr: german
    },

    react:{
        useSuspense: false
    }
})

export default i18next;