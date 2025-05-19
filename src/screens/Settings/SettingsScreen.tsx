import { Header, ThemeSwitcher, Touchable } from '@/components';
import i18n from '@/config/i18next';
import { useAppTheme } from '@/hooks';
import { useSettingsStore } from '@/stores';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const { colors } = useAppTheme();
  const { goBack } = useNavigation();
  const { language, updateLanguage } = useSettingsStore();
  const changeLanguageEn = () => {
    updateLanguage('en');
    i18n.changeLanguage(language);
  };
  const changeLanguageUa = () => {
    updateLanguage('ua');
    i18n.changeLanguage(language);
  };
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
        <Touchable onPress={changeLanguageUa}>
          <Text style={{ color: colors.onSurface }}>Change Language ua</Text>
        </Touchable>
        <Touchable onPress={changeLanguageEn}>
          <Text style={{ color: colors.onSurface }}>Change Language en</Text>
        </Touchable>
      </View>
    </>
  );
};
