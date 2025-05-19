import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EmptyScreen, SettingsScreen } from '../screens';
import { screens } from './constants';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.SettingsScreen} component={SettingsScreen} />
      <Stack.Screen name={screens.ExperienceScreen} component={EmptyScreen} />
      <Stack.Screen name={screens.TechnologiesScreen} component={EmptyScreen} />
      <Stack.Screen name={screens.ModulesScreen} component={EmptyScreen} />
    </Stack.Navigator>
  );
}
