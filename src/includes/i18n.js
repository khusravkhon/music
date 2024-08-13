import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ru from "@/locales/ru.json";

export default createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages: {
    en,
    ru,
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      },
    },
    ja: {
      currency: {
        style: "currency",
        currency: "JPY",
      },
    },
  },
});
