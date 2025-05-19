import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, AboutScreen, FeaturesScreen } from '../screens';
import { screens } from './constants';
import { Ionicons } from '@expo/vector-icons';
import { HomeNavigator } from './HomeNavigator';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={screens.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.FeaturesScreen}
        component={FeaturesScreen}
        options={{
          tabBarLabel: 'Features',

          tabBarIcon: ({ color }) => (
            <Ionicons name="bar-chart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.AboutScreen}
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
