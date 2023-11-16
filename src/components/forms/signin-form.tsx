import { router } from "expo-router";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button, Form, Input, Spinner, Text, Theme } from "tamagui";

import { useAuth } from "@/hooks/use-auth";

type Inputs = {
  email: string;
  password: string;
};

export function SignInForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { signIn } = useAuth();

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

  const onSubmit = async (inputs: Inputs) => {
    try {
      setIsLoading(true);
      await signIn(inputs);
      router.replace("/(app)/(tabs)");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <Theme name="light">
      <Form
        minWidth="100%"
        gap="$4"
        onSubmit={handleSubmit(onSubmit)}
        borderRadius="$4"
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
              entering={FadeInDown.delay(400).duration(1000).springify()}
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
            <Button marginTop="$4">{isLoading ? <Spinner /> : "Entrar"}</Button>
          </Form.Trigger>
        </Animated.View>
      </Form>
    </Theme>
  );
}
