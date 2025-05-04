import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';

import { useAppTheme } from '@/hooks';
import { ThemeTypes, useThemeType } from '@/servises/ThemeService';
import { screens } from '@/navigation/constants';

export const WelcomeScreen = () => {
  const nav = useNavigation();
  const handlePress = () => {
    nav.replace(screens.TabNavigator as never);
  };

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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.onPrimary,
      }}
    >
      <Pressable onPress={handlePress}>
        <Text>Welcome Screen</Text>
      </Pressable>
      <Pressable onPress={changeThemeDark}>
        <Text>Change theme dark</Text>
      </Pressable>
      <Pressable onPress={changeThemeLight}>
        <Text>Change theme light</Text>
      </Pressable>
    </View>
  );
};
