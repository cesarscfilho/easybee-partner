import { useRouter } from "expo-router";
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { H3, View } from "tamagui";

import { setStorageItemAsync } from "@/hooks/use-storage-state";

export default function OnboardingScreen() {
  const router = useRouter();

  const handleDone = () => {
    router.replace("/sign-in");
    setStorageItemAsync("onboarded", "1");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View flex={1}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "white",
            image: (
              <View>
                <H3 color="black">Faxina e Limpeza</H3>
                <Text>no conforto de casa</Text>
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View>
                <Text>oI</Text>
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View>
                <Text>oI</Text>
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  doneButton: {
    padding: 20,
  },
});
