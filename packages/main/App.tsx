import { NavigationContainer } from '@react-navigation/native';

import 'expo-dev-client';
import MainNavigator from './src/MainNavigator';
import { navigationRef } from './src/services/navigation';

const App = () => (
  <NavigationContainer ref={navigationRef}>
    <MainNavigator />
  </NavigationContainer>
);

export default App;
