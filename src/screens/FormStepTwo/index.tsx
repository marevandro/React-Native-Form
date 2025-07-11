import { Text, TextInput, View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { sytles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function FormStepTwo() {
  const { navigate } = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm();
  const phonelRef = useRef<TextInput>(null);


  function handleNextStep(data: any) {
    navigate('formStepThree')
  }

  return (
    <View style={sytles.container}>
      <Text style={sytles.title}>
        Suas informações
      </Text>

      <Input
        error={errors.birth?.message}
        icon="calendar"
        formProps={{
          control,
          name: "birth",
          rules: {
            required: "Data de nascimento é obrigatório.",
            pattern: {
              value: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
              message: "Data de nascimento inválida."
            }
          }
        }}
        inputProps={{
          placeholder: "Data de nascimento",
          onSubmitEditing: () => phonelRef.current?.focus(),
          returnKeyType: "next"
        }}
      />

      <Input
        ref={phonelRef}
        error={errors.phone?.message}
        icon="phone"
        formProps={{
          control,
          name: "phone",
          rules: {
            required: "Telefone é obrigatório",
            pattern: {
              value: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
              message: "Telefone inválido."
            }
          }
        }}
        inputProps={{
          placeholder: "Telefone",
          onSubmitEditing: handleSubmit(handleNextStep)
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  )
}