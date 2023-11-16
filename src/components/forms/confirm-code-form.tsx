import { router } from "expo-router";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button, Form, H3, H6, Input, Spinner } from "tamagui";

import { useAuth } from "@/hooks/use-auth";
import { api } from "@/lib/api";

type Inputs = {
  code: string;
};

export function ConfirmCodeForm() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  console.log(user);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      code: "",
    },
  });

  const resendConfirmCode = async () => {
    await api.get("partners/resend_confirmation_code");
  };

  const onSubmit = async (inputs: Inputs) => {
    try {
      setIsLoading(true);
      const res = await api.post("partners/register_validation", {
        confirmation_code: inputs.code,
      });
      console.log(res);
      router.replace("/(app)/(tabs)");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <Form
      minWidth="100%"
      gap="$4"
      onSubmit={handleSubmit(onSubmit)}
      borderRadius="$4"
    >
      <H3 textAlign="center">Por favor, verifique o seu número de celular.</H3>
      <H6 textAlign="center">
        Um código de verificação foi enviado para {user?.phone}. Insira o código
        abaixo.
      </H6>
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
              placeholder="1234566"
              theme={errors.code ? "red" : null}
            />
          </Animated.View>
        )}
        name="code"
      />

      <Button onPress={() => resendConfirmCode()} marginTop="$4">
        {isLoading ? <Spinner /> : "Reenviar código"}
      </Button>

      <Form.Trigger asChild>
        <Button marginTop="$4">{isLoading ? <Spinner /> : "Enviar"}</Button>
      </Form.Trigger>
    </Form>
  );
}
