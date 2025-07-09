import { Text, View } from "react-native";
import { sytles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

export function FormStepOne() {
  const { control } = useForm();
  return (
    <View style={sytles.container}>
      <Text style={sytles.title}>
        Criar sua conta
      </Text>

      <Input
        icon="user"
        formProps={{
          name: "name",
          control
        }}
        inputProps={{ placeholder: "Nome" }}
      />

      <Input
        icon="mail"
        formProps={{
          name: "email",
          control
        }}
        inputProps={{ placeholder: "E-mail" }}
      />
    </View>
  )
}