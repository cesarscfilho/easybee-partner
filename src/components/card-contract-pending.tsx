import { MapPin, Timer } from "@tamagui/lucide-icons";
import {
  Button,
  Card,
  CardProps,
  ListItem,
  Text,
  XStack,
  YStack,
} from "tamagui";

export function ContractPendingCard(props: CardProps) {
  return (
    <Card elevate size="$3" bordered {...props}>
      <Card.Header padded space="$3">
        <Text fontWeight="bold" fontSize="$7">
          Solano Faria Madeira
          <Text fontWeight="normal"> solicitou o serviço de Faxineria</Text>
        </Text>
        <YStack>
          <ListItem icon={Timer}>22/10/2023, das 10:00 as 14:00</ListItem>
          <ListItem icon={MapPin}>Eurico Salles, Serra</ListItem>
        </YStack>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button size="$3" backgroundColor="$sms">
          Aceitar
        </Button>
        <Button size="$3" marginLeft="$2">
          Recusar
        </Button>
      </Card.Footer>
    </Card>
  );
}
