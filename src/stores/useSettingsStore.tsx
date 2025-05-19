import { LanguageType } from '@/config/i18next/types';
import { ThemeType } from '@/styles';
import { create } from 'zustand';

// TODO: add theme to settings store
type State = {
  // theme: ThemeType;
  language: LanguageType;
};

type Action = {
  // updateTheme: (theme: State['theme']) => void;
  updateLanguage: (language: State['language']) => void;
};

export const useSettingsStore = create<State & Action>((set) => ({
  // theme: 'light', // default theme ,
  language: 'ua', // default language,
  // updateTheme: (theme) => set(() => ({ theme })),
  updateLanguage: (language) => set(() => ({ language })),
}));
