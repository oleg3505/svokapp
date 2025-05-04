import * as SecureStore from 'expo-secure-store';
import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export enum ThemeTypes {
  Light = 'light',
  Dark = 'dark',
}

const KEY = 'svokapp.mobile@theme';
const defaultTheme = ThemeTypes.Light;

export const ThemeService = new (class {
  currentTheme = defaultTheme;

  async init() {
    const themeType = (await SecureStore.getItemAsync(
      KEY
    )) as ThemeTypes | null;

    if (
      !themeType ||
      !Object.values(ThemeTypes).includes(themeType as ThemeTypes)
    ) {
      return;
    }

    this.currentTheme = themeType;
  }

  setThemeType(themeType: ThemeTypes) {
    this.currentTheme = themeType;

    SecureStore.setItemAsync(KEY, themeType);
  }
})();

const ThemeTypeContext = React.createContext({
  currentTheme: defaultTheme,
  updateTheme: ThemeService.setThemeType,
});

export const ThemeTypeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setTheme] = useState(ThemeService.currentTheme);

  const updateTheme = useCallback((newValue: ThemeTypes) => {
    setTheme(newValue);
    ThemeService.setThemeType(newValue);
  }, []);

  const state = useMemo(() => {
    return { currentTheme, updateTheme };
  }, [currentTheme, updateTheme]);

  return (
    <ThemeTypeContext.Provider value={state}>
      {children}
    </ThemeTypeContext.Provider>
  );
};

export function useThemeType() {
  const { currentTheme, updateTheme } = useContext(ThemeTypeContext);

  return { currentTheme, updateTheme };
}
