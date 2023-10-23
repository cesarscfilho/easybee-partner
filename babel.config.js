module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "transform-inline-environment-variables",
      // NOTE: this is optional, you don't *need* the compiler
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./src/tamagui.config.ts",
          logTimings: true,
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
