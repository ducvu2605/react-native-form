import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containLogoAndTxt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containImage: {
    height: 278,
    opacity: 0.3,
  },
  AIcenter: {
    alignItems: 'center',
  },
  colorTxtCoalDarKest: {
    color: theme.coalDarkest,
  },
  slideIconEmpty: {width: 48},
  containContent: {
    width: '100%',
    position: 'absolute',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  mT32: {
    marginTop: 32,
  },
  mT24: {
    marginTop: 24,
  },
  mT20: {
    marginTop: 20,
  },
  mT12: {
    marginTop: 12,
  },
  mR12: {
    marginRight: 12,
  },
  containButton: {flexDirection: 'row', marginTop: 40},
}));
export default themedStyles;
