import { useAppTheme } from '@/hooks';
import { ThemeTypes, useThemeType } from '@/servises/ThemeService';
import React, { use } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Switch } from 'react-native';
import { SettingsLayoutItem } from './SettingsLayoutItem';

export const ThemeSwitcher = () => {
  const { currentTheme, updateTheme } = useThemeType();
  const { t } = useTranslation();
  const { colors } = useAppTheme();

  const isDark = currentTheme === ThemeTypes.Dark;

  return (
    <SettingsLayoutItem>
      <Text style={{ marginRight: 12, color: colors.onSurface }}>
        {t('settingsScreen.darkMode')}
      </Text>
      <Switch
        value={isDark}
        onValueChange={(val) =>
          updateTheme(val ? ThemeTypes.Dark : ThemeTypes.Light)
        }
      />
    </SettingsLayoutItem>
  );
};
