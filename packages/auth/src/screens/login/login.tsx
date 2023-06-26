import { View, Text, Button } from "react-native";
import React from "react";
import { Input } from "@modules-poc/components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../AuthNavigator";

type LoginProps = NativeStackScreenProps<AuthStackParamList, "Login">;

const Login = ({ navigation }: LoginProps) => {
  return (
    <View>
      <Text>Login</Text>
      <Input />
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Login;
