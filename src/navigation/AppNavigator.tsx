import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen, WelcomeScreen } from '../screens';
import { screens } from './constants';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.SettingsScreen} component={SettingsScreen} />
    </Stack.Navigator>
  );
}
