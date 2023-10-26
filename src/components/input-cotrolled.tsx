import { forwardRef } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { TextInput } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Input, Label, YStack } from "tamagui";

type InputControlledProps = {
  formProps: UseControllerProps;
  error?: string | null;
  label?: string;
  placeholder?: string;
};

const InputControlled = forwardRef<TextInput, InputControlledProps>(
  ({ formProps, error, label, placeholder }, ref) => {
    return (
      <Controller
        render={({ field: { onChange, onBlur, value, name } }) => {
          return (
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
            >
              <YStack space="$2">
                {label ? (
                  <Label theme={error ? "red" : null} htmlFor={name}>
                    {label}
                  </Label>
                ) : null}

                <Input
                  ref={ref}
                  id={name}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={placeholder}
                  theme={error ? "red" : null}
                />
              </YStack>
            </Animated.View>
          );
        }}
        {...formProps}
      />
    );
  },
);

export default InputControlled;
