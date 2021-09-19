import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  safeArea: {
    paddingTop: isIphoneX() ? getStatusBarHeight() : 0,
  },
}));
export default themedStyles;
