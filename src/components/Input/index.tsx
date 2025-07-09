import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Controller, UseControllerProps } from "react-hook-form";

import { styles } from "./styles";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;

}

export function Input({ icon, formProps, inputProps }: Props) {
  return (
    <Controller
      render={() => (

        <View style={styles.group}>
          <View style={styles.icon}>
            <Feather name={icon} size={24} color='red' />
          </View>

          <TextInput style={styles.control} {...inputProps} />
        </View>
      )}
      {...formProps}
    />



  )
}