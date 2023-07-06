import { Input } from '@modules-poc/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthStackParamList } from '../../AuthNavigator';
import { LoginContext, LoginSetterContext } from '../../lib/loginContext';

type LoginProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
  const loginData = useContext(LoginContext);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const setLoginData = useContext(LoginSetterContext);

  return (
    <View>
      <Text>Login</Text>
      <Input
        value={loginData?.username ?? ''}
        onChangeText={(text) => setLoginData({ ...loginData, username: text })}
      />
      <Text>Password</Text>
      <Input
        value={loginData?.password ?? ''}
        onChangeText={(text) => setLoginData({ ...loginData, password: text })}
      />
      <Button title="login" onPress={} />
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default Login;
