import type { Decorator, Preview } from "@storybook/react";
import results from "../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

export const decorators: Decorator = [withTests({ results })];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      transform: (code: string) => code.replace(/data-testid=".+?"/g, ""),
    },
  },
};

export default preview;
