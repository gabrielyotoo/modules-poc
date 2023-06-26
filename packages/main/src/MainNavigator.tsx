import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome/welcome";
import AuthNavigator, { AuthStackParamList } from "@modules-poc/auth";
import { NavigatorScreenParams } from "@react-navigation/native";

export type MainStackParamList = {
  Welcome: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
