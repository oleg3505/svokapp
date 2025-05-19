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
import i18n from './src/config/i18next/index';
import { useSettingsStore } from './src/stores/useSettingsStore';

const AppContent = memo(() => {
  const { currentTheme } = useThemeType();

  return (
    <NavigationContainer theme={THEME[currentTheme]}>
      <RootNavigator />
    </NavigationContainer>
  );
});

export default function App() {
  const { language } = useSettingsStore();

  // Change language at runtime
  i18n.changeLanguage(language);
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
