import { ExpoConfig } from "expo/config";

const projectId = "0653875e-c929-486d-a05b-0dacf79007d5";
const name =
  process.env.EXPO_PUBLIC_APP_VARIANT === "production"
    ? "Easybee - Prestador de serviço"
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
  android: {
    package: "com.ancarp.easybeepartner",
    versionCode: 1,
  },
  experiments: {
    tsconfigPaths: true,
  },
  extra: {
    eas: {
      projectId,
    },
  },
  plugins: [
    "expo-router",
    [
      "expo-image-picker",
      {
        photosPermission:
          "The app accesses your photos to let you share them with your friends.",
      },
    ],
  ],
  runtimeVersion: {
    policy: "sdkVersion",
  },
};

export default config;
