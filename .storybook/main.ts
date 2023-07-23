import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    {
      directory: "../packages",
      files: "**/*.stories.@(js|jsx|ts|tsx)",
    },
    {
      directory: "../packages",
      files: "**/*.mdx",
    },
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
    "@storybook/addon-a11y",
    "@storybook/addon-jest",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-mdx-gfm",
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
