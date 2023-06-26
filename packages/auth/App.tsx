import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ModuleNavigator from "./src/ModuleNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <ModuleNavigator />
    </NavigationContainer>
  );
}
