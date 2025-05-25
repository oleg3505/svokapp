import {
  Header,
  SelectLanguageModal,
  ThemeSwitcher,
  Touchable,
} from '@/components';
import { useAppTheme } from '@/hooks';
import { useSettingsStore } from '@/stores';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const { colors } = useAppTheme();
  const { goBack } = useNavigation();
  const { updateLanguage } = useSettingsStore();
  const [modalVisible, setModalVisible] = useState(false);

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
        <Touchable onPress={() => setModalVisible(true)}>
          <Text style={{ color: colors.onSurface }}>Change Language</Text>
        </Touchable>
        <SelectLanguageModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </>
  );
};
