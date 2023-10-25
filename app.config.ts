import { ExpoConfig } from "expo/config";

const projectId = "0653875e-c929-486d-a05b-0dacf79007d5";
const name =
  process.env.EXPO_PUBLIC_APP_VARIANT === "production"
    ? "Easybee - Parceiro"
    : "ESBP Dev";

const scheme =
  process.env.EXPO_PUBLIC_APP_VARIANT === "production"
    ? "easybee-partner"
    : "easybee-partner-dev";

const config: ExpoConfig = {
  name,
  slug: "easybee-partner",
  scheme,
  owner: "cesardevdev",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#facc15",
  },
  developmentClient: {
    silentLaunch: true,
  },
  assetBundlePatterns: ["**/*"],
  experiments: {
    tsconfigPaths: true,
  },
  extra: {
    eas: {
      projectId,
    },
  },
  plugins: ["expo-router"],
  runtimeVersion: {
    policy: "sdkVersion",
  },
};

export default config;
