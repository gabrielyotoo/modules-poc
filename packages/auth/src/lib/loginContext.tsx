import { NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createContext, useContext, useEffect, useState } from 'react';

import AuthNavigator, { AuthStackParamList } from '../AuthNavigator';

export type AppStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

type AppStackNavigationProp = NativeStackNavigationProp<AppStackParamList>;

export interface LoginContextType {
  username: string | null;
  password: string | null;
}

export const LoginContext = createContext<LoginContextType>({
  username: null,
  password: null,
});

export const useLogin = () => {
  const navigation = useNavigation<AppStackNavigationProp>();
  const loginData = useContext(LoginContext);

  const navigate = () => {
    navigation.navigate('Auth', {
      screen: 'Login',
    });
  };

  return { navigate, loginData };
};

interface LoginProviderProps {
  children: React.ReactNode;
}

type LoginSetterContextType = (loginData: LoginContextType) => void;

export const LoginSetterContext = createContext<LoginSetterContextType>(
  () => {}
);

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loginData, setLoginData] = useState<LoginContextType>({
    username: null,
    password: null,
  });

  return (
    <LoginSetterContext.Provider value={setLoginData}>
      <LoginContext.Provider value={loginData}>
        {children}
      </LoginContext.Provider>
    </LoginSetterContext.Provider>
  );
};
