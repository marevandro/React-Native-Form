import { Text, TextInput, View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { sytles } from "./styles";

export function FormStepOne() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const emailRef = useRef<TextInput>(null);


  function handleNextStep(data: any) {
    console.log(data);
    console.log('Chegando aqui');

  }

  return (
    <View style={sytles.container}>
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
              value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i,
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