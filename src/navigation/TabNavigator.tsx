import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, AboutScreen, FeaturesScreen } from '../screens';
import { screens } from './constants';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screens.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={screens.AboutScreen} component={AboutScreen} />
      <Tab.Screen name={screens.FeaturesScreen} component={FeaturesScreen} />
    </Tab.Navigator>
  );
}
