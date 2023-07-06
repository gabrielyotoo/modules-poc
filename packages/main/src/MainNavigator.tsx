import AuthNavigator, {
  AuthStackParamList,
  LoginProvider,
} from '@modules-poc/auth';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/welcome/welcome';

export type MainStackParamList = {
  Welcome: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

const MainNavigator = () => {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <LoginProvider>
      <MainStack.Navigator>
        <MainStack.Screen name="Welcome" component={Welcome} />
        <MainStack.Screen name="Auth" component={AuthNavigator} />
      </MainStack.Navigator>
    </LoginProvider>
  );
};

export default MainNavigator;
