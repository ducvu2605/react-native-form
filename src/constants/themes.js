import {registerThemes} from 'react-native-themed-styles';
import {useColorScheme} from 'react-native-appearance';
import {DARK_THEME, LIGHT_THEME} from './colors';

const light = LIGHT_THEME;
const dark = DARK_THEME;

export const styleSheetFactory = registerThemes({light, dark}, () => {
  const colorScheme = useColorScheme();
  return ['light', 'dark'].includes(colorScheme) ? colorScheme : 'light';
});
