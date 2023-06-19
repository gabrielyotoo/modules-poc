import { View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("login")}
      />
      <Button
        title="Go to Sign up"
        onPress={() => navigation.navigate("signup")}
      />
    </View>
  );
};

export default Welcome;
