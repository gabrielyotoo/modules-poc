import { useLogin } from '@modules-poc/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';

import { MainStackParamList } from '../../MainNavigator';

type WelcomeProps = NativeStackScreenProps<MainStackParamList, 'Welcome'>;

const Welcome = ({ navigation }: WelcomeProps) => {
  const { navigate, loginData } = useLogin();

  const handleLogin = () => {
    navigate();
  };

  return (
    <View>
      <Button title="Go to Login" onPress={handleLogin} />
      <Button
        title="Go to Sign up"
        onPress={() =>
          navigation.navigate('Auth', {
            screen: 'Signup',
          })
        }
      />
    </View>
  );
};

export default Welcome;
