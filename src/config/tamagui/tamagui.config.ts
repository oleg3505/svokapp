import { config } from '@tamagui/config/v3';
import { createFont, createTamagui, createTokens } from '@tamagui/core';

import { colors, darkTheme, lightTheme } from '../../styles/designSystem';

const size = {
  0: 0,
  1: 4,
  2: 8,
  true: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
};

export const tokens = createTokens({
  size,
  space: { ...size },
  radius: { 0: 0, 1: 4 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: colors,
});

const systemFont = createFont({
  size: {
    1: 12,
    2: 14,
    3: 16,
  },
  lineHeight: {
    2: 24,
  },
});

const tamaguiConfig = createTamagui({
  shorthands: config.shorthands,
  fonts: {
    // for tamagui, heading and body are assumed

    body: systemFont,
  },
  defaultFont: 'body',
  tokens,

  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
});

type Config = typeof tamaguiConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Config {}
}
export default tamaguiConfig;
