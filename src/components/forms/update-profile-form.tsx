import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input, Label, XStack, YStack } from "tamagui";

import { UserAvatar } from "../use-avatar";

import { useLibrary } from "@/hooks/use-libary-picker";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
};

export function UpdateProfileForm() {
  const { image: imageUri, pickImageLibary } = useLibrary();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cpf: "134.433.697-39",
    },
  });

  const onSubmit = (inputs: Inputs) => {
    console.log(inputs);
  };

  return (
    <Form
      minWidth="100%"
      onSubmit={handleSubmit(onSubmit)}
      borderRadius="$4"
      flex={1}
      justifyContent="space-between"
    >
      <YStack space="$1" gap="$2">
        <YStack space="$4">
          <Label>Foto de perfil</Label>
          <XStack alignItems="center" space="$5">
            <UserAvatar imageUri={imageUri} />
            <Button onPress={() => pickImageLibary()}>Enviar nova foto</Button>
          </XStack>
        </YStack>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack space="$2">
              <Label theme={errors.name ? "red" : null} htmlFor="name">
                Nome
              </Label>
              <Input
                id="name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Digite seu nome"
                theme={errors.name ? "red" : null}
              />
            </YStack>
          )}
          name="name"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack space="$2">
              <Label theme={errors.email ? "red" : null} htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Digite seu email"
                theme={errors.email ? "red" : null}
              />
            </YStack>
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack space="$2">
              <Label theme={errors.phone ? "red" : null} htmlFor="phone">
                Número de celular
              </Label>
              <Input
                id="phone"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Digite seu número de celular"
                theme={errors.phone ? "red" : null}
              />
            </YStack>
          )}
          name="phone"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack space="$2">
              <Label theme={errors.cpf ? "red" : null} htmlFor="cpf">
                CPF/CNPJ
              </Label>
              <Input
                id="cpf"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                theme={errors.cpf ? "red" : null}
                disabled
              />
            </YStack>
          )}
          name="cpf"
        />
      </YStack>

      <Form.Trigger asChild>
        <Button marginTop="$4" theme={"yellow_active"}>
          Atualizar
        </Button>
      </Form.Trigger>
    </Form>
  );
}
