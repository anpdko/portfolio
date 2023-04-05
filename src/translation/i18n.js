import en from './en.json'
import uk from './uk.json'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
   en: {
      translation: en,
   },
   uk: {
      translation: uk,
   }
}

i18n
   .use(initReactI18next)
   .init({
      resources,
      lng: JSON.parse(localStorage.getItem('language')),
      fallbackLng: 'en'
   })

export default i18n;
