import { NavigationContainer } from "@react-navigation/native";
import { AccountRoutes } from "./account.routes";
import { FormProvider, useForm } from "react-hook-form";

export function Routes() {
  const methods = useForm();
  return (
    <NavigationContainer>
      <FormProvider {...methods}>
        <AccountRoutes />
      </FormProvider>
    </NavigationContainer>
  )
}