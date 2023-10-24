import Animated, { FadeInDown } from "react-native-reanimated";
import { YStack, Form, Button, Input } from "tamagui";

export default function SignIn() {
  const onSubmit = () => {};
  return (
    <YStack
      fullscreen
      alignItems="center"
      justifyContent="center"
      space="$10"
      padding="$3"
    >
      <Form
        minWidth="100%"
        gap="$2"
        onSubmit={() => onSubmit()}
        borderRadius="$4"
        padding="$5"
        space="$1"
      >
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <Input placeholder="Email" />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
        >
          <Input placeholder="Senha" />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(600).duration(1000).springify()}
        >
          <Form.Trigger asChild>
            <Button marginTop="$4">Entrar</Button>
          </Form.Trigger>
        </Animated.View>
      </Form>
    </YStack>
  );
}
