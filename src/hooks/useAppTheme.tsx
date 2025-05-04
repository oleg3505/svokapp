import { useTheme as useNavTheme } from '@react-navigation/native';
import { Theme } from '../styles';

export const useAppTheme = () => useNavTheme() as Theme;
