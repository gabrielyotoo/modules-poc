import {
  NavigationContainerRefWithCurrent,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { AuthStackParamList } from "../AuthNavigator";

export type AppStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

export const startLoginFlow = (
  navigationRef: NavigationContainerRefWithCurrent<AppStackParamList>
) =>
  new Promise<string>((res, rej) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate("Auth", {
        screen: "Login",
      });
      res("navigated");
    }

    rej(new Error("Navigation not ready"));
  });
