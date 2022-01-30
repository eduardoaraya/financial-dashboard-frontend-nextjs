const path = require("path");

module.exports = {
  stories: [
    "../libs/**/*.stories.mdx",
    "../libs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@core": path.resolve(__dirname, "..", "libs", "src"),
    };
    return config;
  },
};
