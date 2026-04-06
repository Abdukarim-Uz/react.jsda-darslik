import i18n from "i18next";
import { initReactI18next} from "react-i18next";

import en from './locales/en.json'
import uz from './locales/uz.json'
import ru from './locales/ru.json'

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    },
    uz: {
        translation: uz
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "uz",
        fallbackLng: "uz",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

// export default i18n;