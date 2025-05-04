import { useAppTheme } from '@/hooks';
import { View, Text } from 'react-native';

export const AboutScreen = () => {
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
      <Text style={{ color: colors.onSurface }}>About Screen</Text>
    </View>
  );
};
