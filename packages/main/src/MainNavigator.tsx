import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "@modules-poc/auth";
import Welcome from "./screens/welcome/welcome";

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
