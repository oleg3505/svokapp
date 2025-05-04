import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { darkThemeColors, lightThemeColors } from './designSystem';

export const THEME = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...lightThemeColors,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...darkThemeColors,
    },
  },
};

export type ThemeType = keyof typeof THEME;
export type Theme = (typeof THEME)[ThemeType];
