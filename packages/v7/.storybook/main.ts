import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react-webpack5",
  stories: ["../src"],
  webpackFinal: (baseConfig) => {
    const config = baseConfig;
    config.resolve ??= {};
    config.resolve.plugins ??= [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../../../tsconfig.json"),
        extensions: config.resolve.extensions,
        mainFields: config.resolve.mainFields as string[],
      })
    );
    return config;
  },
};

module.exports = config;
