import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  marginInputEmail: {marginTop: 32, marginBottom: 16},
  marginInputButtonSignIn: {marginTop: 40, marginBottom: 24},
  containLogoAndTxt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AIcenter: {
    alignItems: 'center',
  },
  slideIconEmpty: {width: 48},
  mT12: {
    marginTop: 12,
  },
  colorTxtCoalDarKest: {
    color: theme.coalDarkest,
  },
}));
export default themedStyles;
