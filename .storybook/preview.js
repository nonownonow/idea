import React, { Suspense, useEffect } from "react";
import results from "../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
// storybook 의 iframe 영역에만 적용되어야 하는 css 정의
import "./preview.css";
import "../app/styles/responsive.css";
import "fxtsx-okinawa/theme.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../app/i18n/index.client";

const preview = {
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
  },
};

export default preview;

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

export const decorators = [withTests({ results }), withI18next];

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en_us", right: "🇺", title: "English" },
        { value: "ko", right: "🇩", title: "한글" },
        { value: "jp", right: "🇦", title: "日本語" },
      ],
      name: true,
    },
  },
};
