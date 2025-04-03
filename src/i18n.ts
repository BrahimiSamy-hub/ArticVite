import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(HttpApi) // Load translations from external files
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    supportedLngs: ['en', 'fr', 'ar'], // Available languages
    fallbackLng: 'fr', // Default language if user's language is missing
    debug: process.env.NODE_ENV === 'development', // Enable debugging in dev mode
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: true, // Enables Suspense for loading translations
    },
  })

export default i18n
