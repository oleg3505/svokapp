import { useAppTheme } from '@/hooks';
import { View, Text } from 'react-native';

export const FeaturesScreen = () => {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.surface,
      }}
    >
      <Text style={{ color: colors.onSurface }}>Features Screen</Text>
    </View>
  );
};
