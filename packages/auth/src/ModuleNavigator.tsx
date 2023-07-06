import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import Welcome from './screens/welcome/welcome';

export type ModuleStackParamList = {
  Welcome: undefined;
  AuthNavigator: undefined;
};

const ModuleNavigator = () => {
  const Stack = createNativeStackNavigator<ModuleStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default ModuleNavigator;
