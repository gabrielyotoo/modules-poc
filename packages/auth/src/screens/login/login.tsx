import { Input } from '@modules-poc/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

import UserBase from '../../../mock/user.json';
import { AuthStackParamList } from '../../AuthNavigator';
import { callback } from '../../lib/useLogin';

type LoginProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (!username || !password) {
      setError('Preencha todos os campos');
    } else {
      const loggedUser = UserBase.find(
        (user) => user.username === username && user.password === password
      );
      if (loggedUser) {
        callback(loggedUser);
      } else {
        setError('Usuário/Senha incorretos');
      }
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <Input value={username} onChangeText={(text) => setUsername(text)} />
      <Text>Password</Text>
      <Input value={password} onChangeText={(text) => setPassword(text)} />
      <Text>{error}</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default Login;
