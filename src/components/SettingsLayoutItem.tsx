import { useAppTheme } from '@/hooks';
import React from 'react';
import { View } from 'react-native';

interface ThemeSwitcherProps {
  children: React.ReactNode;
}

export const SettingsLayoutItem: React.FC<ThemeSwitcherProps> = ({
  children,
}) => {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surfaceVar,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        justifyContent: 'space-between',
      }}
    >
      {children}
    </View>
  );
};
