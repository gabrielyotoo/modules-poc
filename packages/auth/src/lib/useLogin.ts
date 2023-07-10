import { NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../AuthNavigator';

type AppStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
};
type AppStackNavigationProp = NativeStackNavigationProp<AppStackParamList>;

export interface UserData {
  name: string;
  account: string;
}

export let callback = (userData: UserData, error?: Error) => {};

const useLogin = () => {
  const navigation = useNavigation<AppStackNavigationProp>();

  const startLoginFlow = () =>
    new Promise<UserData>((res, rej) => {
      navigation.navigate('Auth', {
        screen: 'Login',
      });
      callback = (userData, error) => {
        if (error) {
          rej(error);
        }
        res(userData);
        navigation.goBack();
      };
    });

  return { startLoginFlow };
};

export default useLogin;
