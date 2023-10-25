import { useIsFocused } from "@react-navigation/native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { YStack, Button } from "tamagui";

import { SignInForm } from "@/components/forms/signin-form";

export default function SignIn() {
  const isFocused = useIsFocused();

  return (
    <YStack
      fullscreen
      alignItems="center"
      justifyContent="center"
      space="$10"
      padding="$5"
    >
      <Image
        source={require(`../../assets/easybee_logo_yellow.png`)}
        style={{ width: 230, height: 120 }}
      />

      <SignInForm />

      <Link href="/sign-up" asChild>
        <Button width={"100%"}>Cria conta</Button>
      </Link>
      {isFocused && <StatusBar style="light" />}
    </YStack>
  );
}
