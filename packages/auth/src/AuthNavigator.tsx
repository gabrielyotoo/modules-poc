import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "./screens";

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "fullScreenModal",
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
