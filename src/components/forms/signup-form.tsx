import { useForm, Controller } from "react-hook-form";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button, Form, Input } from "tamagui";

type Inputs = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  date: string;
};

export function SignUpForm() {
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
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nome ou razão social"
              theme={errors.name ? "red" : null}
            />
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
            entering={FadeInDown.delay(300).duration(1000).springify()}
          >
            <Input
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Senha"
              theme={errors.password ? "red" : null}
            />
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
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="CPF ou CNPJ"
              theme={errors.cpf ? "red" : null}
            />
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
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Data de nacimento"
              theme={errors.date ? "red" : null}
            />
          </Animated.View>
        )}
        name="date"
      />

      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
      >
        <Form.Trigger asChild>
          <Button marginTop="$4" theme={"yellow"}>
            Proxímo
          </Button>
        </Form.Trigger>
      </Animated.View>
    </Form>
  );
}
