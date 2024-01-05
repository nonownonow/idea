import React from "react";
import results from "../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
// storybook 의 iframe 영역에만 적용되어야 하는 css 정의
import "./preview.css";
import "../app/root.css";
import i18n from "./i18next";

const preview = {
  globals: {
    locale: "en",
    locales: {
      en: "English",
      ko: "한글",
      jp: "日本語",
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      transform: (code) => code.replace(/data-testid=".+?"/g, ""),
    },
    i18n,
  },
};

export default preview;

export const decorators = [withTests({ results })];
