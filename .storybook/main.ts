import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: [
    {
      directory: "../packages",
      files: "**/*.stories.@(js|jsx|ts|tsx)",
    },
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
