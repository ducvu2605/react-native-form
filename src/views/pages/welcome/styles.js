import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containButton: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderRadius: 4,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 244,
  },
  containOrSignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  containLogo: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    width: 40,
    borderRadius: 1,
    backgroundColor: theme.colorLine,
  },
  mR24: {
    marginRight: 24,
  },
}));
export default themedStyles;
