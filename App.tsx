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
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

const AppContent = memo(() => {
  const { currentTheme } = useThemeType();

  return (
    <NavigationContainer theme={THEME[currentTheme]}>
      <RootNavigator />
      <StatusBar style={currentTheme === 'light' ? 'dark' : 'light'} />
    </NavigationContainer>
  );
});

export default function App() {
  const { language } = useSettingsStore();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const init = async () => {
    await ThemeService.init();
  };

  useEffect(() => {
    init();
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeTypeProvider>
      <AppContent />
    </ThemeTypeProvider>
  );
}
