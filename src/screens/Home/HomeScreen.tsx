import { useAppTheme } from '@/hooks';
import { ThemeTypes, useThemeType } from '@/servises/ThemeService';
import { View, Text, Pressable } from 'react-native';

export const HomeScreen = () => {
  const { colors } = useAppTheme();
  const { updateTheme } = useThemeType();
  const changeThemeDark = () => {
    updateTheme(ThemeTypes.Dark);
  };
  const changeThemeLight = () => {
    updateTheme(ThemeTypes.Light);
  };
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Text style={{ color: colors.onSurface }}>Home Screen</Text>
      <Pressable onPress={changeThemeDark}>
        <Text style={{ color: colors.onSurface }}>Change theme dark</Text>
      </Pressable>
      <Pressable onPress={changeThemeLight}>
        <Text style={{ color: colors.onSurface }}>Change theme light</Text>
      </Pressable>
    </View>
  );
};
