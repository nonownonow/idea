import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { en_us, jp, ko } from "./translations";

const debug = process.env.NODE_ENV !== "production";

const resources = {
  en_us: { translation: en_us },
  ko: { translation: ko },
  jp: { translation: jp },
};

const backendOptions = {
  addPath: "locales/add/{{lng}}/{{ns}}",
};

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
    saveMissing: !debug,
    supportedLngs: ["ko", "en_us", "jp"],
    fallbackLng: "ko",
    backend: backendOptions,
    react: {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "b", "span", "a"],
      useSuspense: true,
    },
    // debug,
  })
  .then((r) => console.log(r));

export default i18n;
