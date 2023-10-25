import { ChevronLeft } from "@tamagui/lucide-icons";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button, Form, Input, Label, Text, YStack } from "tamagui";

type Inputs = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  date: string;
  confirmCode: string;
};

export function SignUpForm() {
  const [step, setStep] = React.useState(1);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpf: "",
      date: "",
      confirmCode: "",
    },
  });

  const onSubmit = (inputs: Inputs) => {
    setStep((prev) => prev + 1);
  };

  return (
    <Form
      minWidth="100%"
      onSubmit={handleSubmit(onSubmit)}
      flex={1}
      justifyContent="space-between"
    >
      <YStack space="$1" gap="$2">
        {step !== 1 && (
          <Button
            onPress={() => setStep((prev) => (prev === 1 ? 1 : prev - 1))}
            icon={ChevronLeft}
            alignSelf="flex-start"
          />
        )}

        {step === 1 ? (
          <>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Animated.View
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                >
                  <YStack space="$2">
                    <Label theme={errors.name ? "red" : null} htmlFor="name">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Nome ou razão social"
                      theme={errors.name ? "red" : null}
                    />
                  </YStack>
                </Animated.View>
              )}
              name="name"
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
                  <YStack space="$2">
                    <Label theme={errors.email ? "red" : null} htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="seuemail@exemplo.com"
                      theme={errors.email ? "red" : null}
                    />
                  </YStack>
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
                  entering={FadeInDown.delay(300).duration(1000).springify()}
                >
                  <YStack space="$2">
                    <Label
                      theme={errors.password ? "red" : null}
                      htmlFor="password"
                    >
                      Senha
                    </Label>
                    <Input
                      id="password"
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Digite uma senha"
                      theme={errors.password ? "red" : null}
                    />
                  </YStack>
                </Animated.View>
              )}
              name="password"
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
                  <YStack space="$2">
                    <Label theme={errors.cpf ? "red" : null} htmlFor="cpf">
                      CPF ou CNPJ
                    </Label>
                    <Input
                      id="cpf"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="CPF ou CNPJ"
                      theme={errors.cpf ? "red" : null}
                    />
                  </YStack>
                </Animated.View>
              )}
              name="cpf"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Animated.View
                  entering={FadeInDown.delay(500).duration(1000).springify()}
                >
                  <YStack space="$2">
                    <Label htmlFor="date">Data de nascimento</Label>
                    <Input
                      id="date"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Digite sua data de nacimento"
                      theme={errors.date ? "red" : null}
                    />
                  </YStack>
                </Animated.View>
              )}
              name="date"
            />
          </>
        ) : null}

        {step === 2 ? <Text>Confirmação</Text> : null}
      </YStack>

      <Form.Trigger asChild>
        <Button marginTop="$4" theme={"yellow"}>
          Proxímo
        </Button>
      </Form.Trigger>
    </Form>
  );
}
