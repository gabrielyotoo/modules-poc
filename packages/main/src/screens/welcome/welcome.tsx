import { useLogin } from '@modules-poc/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { View, Button } from 'react-native';

import { UserContext } from '../../context/UserContext';
import { MainStackParamList } from '../../MainNavigator';

type WelcomeProps = NativeStackScreenProps<MainStackParamList, 'Welcome'>;

const Welcome = ({ navigation }: WelcomeProps) => {
  const { startLoginFlow } = useLogin();
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    const result = await startLoginFlow();
    setUser(result);
    navigation.navigate('Profile');
  };

  return (
    <View>
      <Button
        title="Go to Login"
        onPress={() => {
          handleLogin();
        }}
      />
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
