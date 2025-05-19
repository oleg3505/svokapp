import React, { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
  PressableProps,
} from 'react-native';

interface TouchableProps extends Omit<PressableProps, 'style' | 'children'> {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  disabled?: boolean;
}

export const Touchable: React.FC<TouchableProps> = ({
  onPress,
  style,
  children,
  disabled = false,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        style,
        pressed && !disabled ? styles.pressed : null,
      ]}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
