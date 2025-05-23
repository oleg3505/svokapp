import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens';
import { screens } from './constants';
import { TabNavigator } from './TabNavigator';
import { AppNavigator } from './AppNavigator';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.WelcomeScreen} component={WelcomeScreen} />
      <Stack.Screen name={screens.TabNavigator} component={TabNavigator} />
      <Stack.Screen name={screens.AppNavigator} component={AppNavigator} />
    </Stack.Navigator>
  );
}
