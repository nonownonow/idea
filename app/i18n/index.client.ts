import i18next from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en_us, jp, ko } from "./translations";

const debug = process.env.NODE_ENV !== "production";

const resources = {
  en_us: { translation: en_us },
  ko: { translation: ko },
  jp: { translation: jp },
};

i18next
  .use(detector)
  // .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ["navigator"],
    },
    lng: "ko",
    saveMissing: !debug,
    supportedLngs: ["ko", "en_us", "jp"],
    fallbackLng: "ko",
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

export default i18next;
