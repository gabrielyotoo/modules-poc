import { NavigationContainer } from '@react-navigation/native';
import 'expo-dev-client';
import MainNavigator from './src/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
