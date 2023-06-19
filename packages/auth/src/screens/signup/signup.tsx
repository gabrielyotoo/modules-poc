import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Camera, CameraType } from "expo-camera";

const Signup = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View
      style={{ flexDirection: "column", flex: 1, justifyContent: "center" }}
    >
      <Text>Sign up</Text>
      <Camera
        type={CameraType.back}
        style={{ flex: 1, backgroundColor: "red" }}
      />
    </View>
  );
};

export default Signup;
