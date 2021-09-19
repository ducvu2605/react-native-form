import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containLogoAndTxt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  mT12: {
    marginTop: 12,
  },
  mT20: {
    marginTop: 20,
  },
  mT32: {
    marginTop: 32,
  },
  mR12: {
    marginRight: 12,
  },
  pH24: {
    paddingHorizontal: 24,
  },
  contentTxt: {
    marginTop: 16,
    marginBottom: 40,
  },
  colorTxtCoalDarKest: {
    color: theme.coalDarkest,
  },
  AIcenter: {
    alignItems: 'center',
  },
  slideIconEmpty: {width: 48},
  //------------------------------------
  containButton: {flexDirection: 'row', marginTop: 40},
}));
export default themedStyles;
