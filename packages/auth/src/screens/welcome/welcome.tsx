import { View, Text, Button } from "react-native";
import React from "react";
import { Input } from "@modules-poc/components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ModuleStackParamList } from "../../ModuleNavigator";

type WelcomeProps = NativeStackScreenProps<ModuleStackParamList, "Welcome">;

const Welcome = ({ navigation }: WelcomeProps) => {
  return (
    <View>
      <Text>Welcome to the Auth Module!</Text>
      <Button
        title="Go to the Auth Navigator"
        onPress={() => navigation.navigate("AuthNavigator")}
      />
    </View>
  );
};

export default Welcome;
