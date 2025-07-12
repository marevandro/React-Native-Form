import { Text, TextInput, View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Progress } from "../../components/Progress";
import { useRef } from "react";

import { sytles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useFormContext } from "react-hook-form";
import { AccountProps } from "../../@types/account.types";


export function FormStepOne() {
  const { navigate } = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useFormContext<AccountProps>();
  const emailRef = useRef<TextInput>(null);


  function handleNextStep(data: any) {
    navigate("formStepTwo")
  }

  return (
    <View style={sytles.container}>
      <Progress progress={30}/>
      <Text style={sytles.title}>
        Criar sua conta
      </Text>

      <Input
        error={errors.name?.message}
        icon="user"
        formProps={{
          control,
          name: "name",
          rules: {
            required: "Nome é obrigatório."
          }
        }}
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next"
        }}
      />

      <Input
        ref={emailRef}
        error={errors.email?.message}
        icon="mail"
        formProps={{
          control,
          name: "email",
          rules: {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "E-mail inválido"
            }
          }
        }}
        inputProps={{
          placeholder: "E-mail",
          onSubmitEditing: handleSubmit(handleNextStep)
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  )
}