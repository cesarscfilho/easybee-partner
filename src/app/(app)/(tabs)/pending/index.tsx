import { YStack } from "tamagui";

import { ContractPendingCard } from "@/components/card-contract-pending";

export default function Index() {
  return (
    <YStack fullscreen padding="$3" space="$3" flexGrow={2}>
      <ContractPendingCard />
      <ContractPendingCard />
    </YStack>
  );
}
