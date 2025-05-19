import { Header, InfoCard, Touchable } from '@/components';
import { useAppTheme } from '@/hooks';
import { screens } from '@/navigation/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, Text, Alert } from 'react-native';

export const HomeScreen = () => {
  const { navigate } = useNavigation<any>();
  const { t } = useTranslation();
  const { colors } = useAppTheme();

  const goToSettings = () => {
    navigate(screens.AppNavigator, {
      screen: screens.SettingsScreen,
    });
  };
  const goToExperience = () => {
    navigate(screens.AppNavigator, {
      screen: screens.ExperienceScreen,
    });
  };
  const goToProjects = () => {
    Alert.alert(
      t('homeScreen.alert.title'),
      t('homeScreen.alert.message'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const goToTechnologies = () => {
    navigate(screens.AppNavigator, {
      screen: screens.TechnologiesScreen,
    });
  };
  const goToModules = () => {
    navigate(screens.AppNavigator, {
      screen: screens.ModulesScreen,
    });
  };

  const rightComponent = (
    <Touchable onPress={goToSettings}>
      <Ionicons name="settings-outline" size={24} color={colors.onSurfaceVar} />
    </Touchable>
  );

  return (
    <>
      <Header title={t('homeScreen.title')} rightComponent={rightComponent} />

      <View
        style={{
          backgroundColor: colors.surface,
          flex: 1,
          gap: 10,
          padding: 16,
        }}
      >
        <Text
          style={{ color: colors.onSurface, fontSize: 48, fontWeight: 'bold' }}
        >
          {t('homeScreen.hiTile')}
        </Text>
        <Text style={{ color: colors.onSurface, fontSize: 24 }}>
          {t('homeScreen.role')}
        </Text>
        <View style={{ gap: 16 }}>
          <View
            style={{
              backgroundColor: colors.surfaceBright,
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: colors.onSurface, fontSize: 20 }}>
              {t('homeScreen.aboutDescription')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <InfoCard
              title={t('homeScreen.experience')}
              value={4}
              suffix={t('homeScreen.experienceSuffix')}
              onPress={goToExperience}
            />
            <InfoCard
              title={t('homeScreen.projects')}
              value={6}
              suffix={t('homeScreen.projectsSuffix')}
              onPress={goToProjects}
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <InfoCard
              title={t('homeScreen.technologies')}
              value={10}
              suffix={t('homeScreen.technologiesSuffix')}
              onPress={goToTechnologies}
            />
            <InfoCard
              title={t('homeScreen.modules')}
              value={20}
              suffix={t('homeScreen.modulesSuffix')}
              onPress={goToModules}
            />
          </View>
        </View>
      </View>
    </>
  );
};
