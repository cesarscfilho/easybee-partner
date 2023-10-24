import { useForm, Controller } from "react-hook-form";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button, Form, Input, Text } from "tamagui";

type Inputs = {
  email: string;
  password: string;
};

export function SignInForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (inputs: Inputs) => {
    console.log(inputs);
  };

  return (
    <Form
      minWidth="100%"
      gap="$2"
      onSubmit={handleSubmit(onSubmit)}
      borderRadius="$4"
      space="$1"
    >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              theme={errors.email ? "red" : null}
            />
          </Animated.View>
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <Input
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Senha"
              theme={errors.email ? "red" : null}
            />
          </Animated.View>
        )}
        name="password"
      />

      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
      >
        <Text>Esqueceu sua senha?</Text>
        <Form.Trigger asChild>
          <Button marginTop="$4" theme={"yellow"}>
            Entrar
          </Button>
        </Form.Trigger>
      </Animated.View>
    </Form>
  );
}
