import './src/config/i18next/index';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from './src/navigation/RootNavigator';
import {
  ThemeService,
  ThemeTypeProvider,
  useThemeType,
} from './src/servises/ThemeService';
import { memo, useEffect } from 'react';
import React from 'react';
import { THEME } from './src/styles';
import * as SplashScreen from 'expo-splash-screen';

const AppContent = memo(() => {
  const { currentTheme } = useThemeType();

  return (
    <NavigationContainer theme={THEME[currentTheme]}>
      <RootNavigator />
    </NavigationContainer>
  );
});

export default function App() {
  const init = async () => {
    await ThemeService.init();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ThemeTypeProvider>
      <AppContent />
    </ThemeTypeProvider>
  );
}
