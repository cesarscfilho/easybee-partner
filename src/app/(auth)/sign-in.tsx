import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { YStack, Button, View } from "tamagui";

import { SignInForm } from "@/components/forms/signin-form";

export default function SignIn() {
  return (
    <YStack
      fullscreen
      backgroundColor={"$sms"}
      alignItems="center"
      justifyContent="space-around"
      space="$10"
      padding="$5"
    >
      <View marginTop="$9">
        <Image
          source={require(`@/assets/easybee_logo_black.png`)}
          style={{ width: 250, height: 130 }}
        />
      </View>

      <SignInForm />

      <Link href="/sign-up" asChild>
        <Button width={"100%"} textAlign="center">
          Cria conta
        </Button>
      </Link>
    </YStack>
  );
}
