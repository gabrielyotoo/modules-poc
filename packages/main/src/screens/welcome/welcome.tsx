import { View, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../MainNavigator";
import { startLoginFlow } from "@modules-poc/auth";
import { navigationRef } from "../../services/navigation";

type WelcomeProps = NativeStackScreenProps<MainStackParamList, "Welcome">;

const Welcome = ({ navigation }: WelcomeProps) => {
  const handleLogin = async () => {
    const result = await startLoginFlow(navigationRef);
    console.log(result);
  };

  return (
    <View>
      <Button title="Go to Login" onPress={handleLogin} />
      <Button
        title="Go to Sign up"
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Signup",
          })
        }
      />
    </View>
  );
};

export default Welcome;
