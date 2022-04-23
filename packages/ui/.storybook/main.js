module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@react-theming/storybook-addon"
  ],
  "staticDirs": ["../public"],
  "framework": "@storybook/react",
  "webpackFinal": async (config, {configType}) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(j|t)sx?$/,
      use: ['babel-loader'],
    });

    // Return the altered config
    return config;
  }
}