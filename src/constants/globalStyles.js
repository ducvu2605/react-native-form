import {styleSheetFactory} from './themes';

const globalStyles = styleSheetFactory(theme => ({
  flx: {
    flex: 1,
  },
  width100: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  padding12: {
    padding: 12,
  },
  marginH8: {
    marginHorizontal: 8,
  },
  marginB16: {
    marginBottom: 16,
  },
  txt14RegularBlack: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: theme.black,
  },
  txt14SBoldBlack: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: theme.black,
  },
  txt16RegularBlack: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: theme.black,
  },
  txt16BoldBlack: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: theme.black,
  },
  txt18SBoldBlack: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: theme.black,
  },
  txt24SBoldBlack: {
    fontSize: 24,
    fontFamily: 'OpenSans-SemiBold',
    color: theme.black,
  },
}));
export default globalStyles;
