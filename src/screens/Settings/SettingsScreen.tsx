import { Header, ThemeSwitcher } from '@/components';
import { useAppTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const { colors } = useAppTheme();
  const { goBack } = useNavigation();
  return (
    <>
      <Header onBackPress={goBack} title={t('settingsScreen.title')} />
      <View
        style={{
          backgroundColor: colors.surface,
          flex: 1,
          padding: 16,
          gap: 16,
        }}
      >
        <ThemeSwitcher />
        <Text style={{ color: colors.onSurface }}>Settings Screen</Text>
      </View>
    </>
  );
};
