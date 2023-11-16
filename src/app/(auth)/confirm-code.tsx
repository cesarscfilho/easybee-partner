import React from "react";
import { YStack } from "tamagui";

import { ConfirmCodeForm } from "@/components/forms/confirm-code-form";

export default function ConfirmCode() {
  return (
    <YStack
      fullscreen
      alignItems="center"
      justifyContent="space-around"
      space="$10"
      padding="$5"
    >
      <ConfirmCodeForm />
    </YStack>
  );
}
