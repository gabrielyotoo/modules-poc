import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome/welcome";
import AuthNavigator from "./AuthNavigator";

export type ModuleStackParamList = {
  Welcome: undefined;
  AuthNavigator: undefined;
};

const ModuleNavigator = () => {
  const Stack = createNativeStackNavigator<ModuleStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default ModuleNavigator;
