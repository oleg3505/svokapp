import { useAppTheme } from '@/hooks';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Touchable } from './Touchable';

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  rightComponent,
  containerStyle,
  titleStyle,
}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, backgroundColor: colors.surface },
        containerStyle,
      ]}
    >
      <View style={styles.content}>
        {onBackPress ? (
          <Touchable onPress={onBackPress} style={styles.sideButton}>
            <Ionicons
              name="chevron-back"
              size={24}
              color={colors.onSurface}
              style={styles.backText}
            />
          </Touchable>
        ) : (
          <View style={styles.sideButton} />
        )}
        <Text
          style={[styles.title, { color: colors.onSurface }, titleStyle]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <View style={styles.sideButton}>{rightComponent}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sideButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
