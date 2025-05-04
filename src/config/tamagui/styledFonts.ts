import { fonts } from '../designSystem.v2';

type Fonts = typeof fonts;

// Override fontFamily type
type FontFamilyTypes = {
  [K in keyof Fonts]: Omit<Fonts[K], 'fontFamily'> & {
    fontFamily: '$oswald' | '$body';
  };
};

const fontTypes = Object.keys(fonts) as Array<keyof Fonts>;

export const styledFonts = fontTypes.reduce((current, next) => {
  const modified = {
    ...current,

    [next]: {
      ...fonts[next],
      fontFamily: fonts[next].fontFamily?.includes('Oswald')
        ? '$oswald'
        : '$body',
    },
  } as const;

  return modified;
}, {} as FontFamilyTypes);

export type StyledFonts = typeof styledFonts;
export type StyledFontsNames = keyof typeof styledFonts;
