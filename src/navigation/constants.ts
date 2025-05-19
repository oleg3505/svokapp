import { AppNavigator } from './AppNavigator';

export const screens = {
  HomeScreen: 'HomeScreen',
  SettingsScreen: 'SettingsScreen',
  AboutScreen: 'AboutScreen',
  FeaturesScreen: 'FeaturesScreen',
  WelcomeScreen: 'WelcomeScreen',

  ProjectsScreen: 'ProjectsScreen',
  ExperienceScreen: 'ExperienceScreen',
  TechnologiesScreen: 'TechnologiesScreen',
  ModulesScreen: 'ModulesScreen',

  TabNavigator: 'TabNavigator',
  HomeNavigator: 'HomeNavigator',
  AppNavigator: 'AppNavigator',
};
export type ScreensType = keyof typeof screens;
