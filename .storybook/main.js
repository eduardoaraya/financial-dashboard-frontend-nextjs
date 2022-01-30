const path = require("path");

module.exports = {
  stories: [
    "../libs/**/*.stories.mdx",
    "../libs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    // config.resolve.modules = [
    //   ...(config.resolve.modules || []),
    //   path.resolve(__dirname, "..", "libs", "src"),
    // ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@core": path.resolve(__dirname, "..", "libs", "src"),
    };
    console.log("aq");
    return config;
  },
};
