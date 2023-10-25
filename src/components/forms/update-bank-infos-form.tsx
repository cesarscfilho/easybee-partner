import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input, Label, RadioGroup, YStack } from "tamagui";

import { RadioGroupItemWithLabel } from "../ui/radio-group";

type Inputs = {
  bankName: string;
  accountNumber: string;
  agency: string;
  accountType: "current" | "savings";
  bankCardFront: string;
};

export function UpdateBankInfosForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      bankName: "",
      accountNumber: "",
      agency: "",
      accountType: "current",
      bankCardFront: "",
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
      flex={1}
      space="$1"
    >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <YStack space="$2">
            <Label theme={errors.bankName ? "red" : null} htmlFor="bankName">
              Banco
            </Label>
            <Input
              id="bankName"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Digite o nome do banco"
              theme={errors.bankName ? "red" : null}
            />
          </YStack>
        )}
        name="bankName"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <YStack space="$2">
            <Label
              theme={errors.accountNumber ? "red" : null}
              htmlFor="accountNumber"
            >
              Número da conta
            </Label>
            <Input
              id="accountNumber"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ex: 123456789"
              theme={errors.accountNumber ? "red" : null}
            />
          </YStack>
        )}
        name="accountNumber"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <YStack space="$2">
            <Label theme={errors.agency ? "red" : null} htmlFor="agency">
              Agência
            </Label>
            <Input
              id="agency"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ex: 0001"
              theme={errors.agency ? "red" : null}
            />
          </YStack>
        )}
        name="agency"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <YStack space="$2">
            <Label theme={errors.agency ? "red" : null} htmlFor="accountType">
              Tipo de conta
            </Label>
            <RadioGroup
              id="accountType"
              onValueChange={onChange}
              defaultValue={value}
              name="form"
            >
              <YStack>
                <RadioGroupItemWithLabel
                  size="$5"
                  value="current"
                  label="Conta corrente"
                />
                <RadioGroupItemWithLabel
                  size="$5"
                  value="savings"
                  label="Conta poupança"
                />
              </YStack>
            </RadioGroup>
          </YStack>
        )}
        name="accountType"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <YStack space="$2">
            <Label theme={errors.agency ? "red" : null}>
              Foto da frente do cartão
            </Label>
          </YStack>
        )}
        name="bankCardFront"
      />

      <Form.Trigger asChild>
        <Button marginTop="$4" theme={"yellow"}>
          Atualizar
        </Button>
      </Form.Trigger>
    </Form>
  );
}
