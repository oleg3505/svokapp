import { useAppTheme } from '@/hooks';
import React from 'react';
import { View, Text, ViewStyle, StyleSheet } from 'react-native';
import { Touchable } from './Touchable';

interface InfoCardProps {
  title: string;
  value: string | number;
  suffix?: string;
  containerStyles?: ViewStyle;
  onPress?: () => void;
}

export const InfoCard = ({
  title,
  value,
  suffix,
  containerStyles,
  onPress,
}: InfoCardProps) => {
  const { colors } = useAppTheme();

  const Root = typeof onPress === 'function' ? Touchable : View;

  return (
    <Root
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: colors.surfaceVar,
          borderColor: colors.outline,
        },
        containerStyles,
      ]}
    >
      <>
        <Text style={[styles.title, { color: colors.onSurfaceVar }]}>
          {title.toUpperCase()}
        </Text>
        <Text style={[styles.value, { color: colors.primary }]}>{value}+</Text>
        <Text style={[styles.suffix, { color: colors.onSurfaceVar }]}>
          {suffix}
        </Text>
      </>
    </Root>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 120,
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  suffix: {
    fontSize: 14,
  },
});
