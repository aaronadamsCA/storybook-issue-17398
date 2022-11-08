import type { StorybookConfig } from "@storybook/core-common";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  core: {
    builder: "webpack5",
  },
  features: {
    babelModeV7: true,
    emotionAlias: false,
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  stories: ["../src"],
  webpackFinal: (baseConfig) => {
    const config = baseConfig;
    config.resolve ??= {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      assert: require.resolve("browser-assert"),
    };
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
