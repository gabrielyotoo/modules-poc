import { NavigationContainer } from "@react-navigation/native";
import "expo-dev-client";
import MainNavigator from "./src/MainNavigator";
import { navigationRef } from "./src/services/navigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
}
