import { Text, View } from "react-native";
import { useAccountForm } from "../../hooks/useAccountForm";

export function Finish() {
  const { accountFormData } = useAccountForm();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>
        Nome: {accountFormData.name}
      </Text>
      <Text style={{ fontSize: 18 }}>
        E-mail: {accountFormData.email}
      </Text>
      <Text style={{ fontSize: 18 }}>
        Data de nascimento: {accountFormData.birth}
      </Text >
      <Text style={{ fontSize: 18 }}>
        Telefone: {accountFormData.phone}
      </Text>
      <Text style={{ fontSize: 18 }}>
        Senha: {accountFormData.password} / {accountFormData.passwordConfirmation}
      </Text>
    </View>
  )
}