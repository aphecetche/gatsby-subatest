import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import fr from "./src/intl/fr.json"
import en from "./src/intl/en.json"
//import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  fr: {
    translation: {
      ...fr,
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  //   .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "fr",
    lng: "fr",
    supportedLngs: ["fr", "en"],
    preload: true,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
