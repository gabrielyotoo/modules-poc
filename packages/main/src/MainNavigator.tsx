import AuthNavigator, { AuthStackParamList } from '@modules-poc/auth';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserContextProvider } from './context/UserContext';
import Profile from './screens/profile/profile';
import Welcome from './screens/welcome/welcome';

export type MainStackParamList = {
  Welcome: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Profile: undefined;
};

const MainNavigator = () => {
  const MainStack = createNativeStackNavigator<MainStackParamList>();

  return (
    <UserContextProvider>
      <MainStack.Navigator>
        <MainStack.Screen name="Welcome" component={Welcome} />
        <MainStack.Screen name="Profile" component={Profile} />
        <MainStack.Screen name="Auth" component={AuthNavigator} />
      </MainStack.Navigator>
    </UserContextProvider>
  );
};

export default MainNavigator;
