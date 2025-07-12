import { Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useFormContext } from "react-hook-form";
import { useRef } from "react";

import { sytles } from "./styles";
import { Progress } from "../../components/Progress";
import { AccountProps } from "../../@types/account.types";

export function FormStepThree() {
  const { navigate } = useNavigation()
  const { control, handleSubmit, formState: { errors }, getValues } = useFormContext<AccountProps>();
  const passwordConfirmationRef = useRef<TextInput>(null);


  function handleNextStep() {
    navigate('finish');
  }

  function validationPasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues();

    return password === passwordConfirmation || "As senhas devem ser iguais."
  }

  return (
    <View style={sytles.container}>
      <Progress progress={90} />
      <Text style={sytles.title}>
        Escolha sua senha
      </Text>

      <Input
        error={errors.password?.message}
        icon="key"
        formProps={{
          control,
          name: "password",
          rules: {
            required: "Senha é obrigatório.",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 dígitos."
            }
          }
        }}
        inputProps={{
          placeholder: "Senha",
          onSubmitEditing: () => passwordConfirmationRef.current?.focus(),
          returnKeyType: "next",
          secureTextEntry: true
        }}
      />

      <Input
        ref={passwordConfirmationRef}
        error={errors.passwordConfirmation?.message}
        icon="key"
        formProps={{
          control,
          name: "passwordConfirmation",
          rules: {
            required: "Confirme a senha.",
            validate: validationPasswordConfirmation
          }
        }}
        inputProps={{
          placeholder: "Confirme a senha",
          onSubmitEditing: handleSubmit(handleNextStep),
          secureTextEntry: true
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  )
}