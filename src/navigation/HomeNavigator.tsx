import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import { screens } from './constants';
import { AppNavigator } from './AppNavigator';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={screens.AppNavigator} component={AppNavigator} />
    </Stack.Navigator>
  );
}
