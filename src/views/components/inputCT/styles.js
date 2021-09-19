import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {},
  textTitleHeader: {
    color: theme.coalDarkest,
    flexShrink: 1,
  },
  inputDefault: {
    height: 48,
    width: '100%',
    backgroundColor: theme.fogBackground,
    marginTop: 4,
    borderRadius: 4,
    paddingLeft: 12,
  },
  inputTogglePassword: {
    height: 48,
    width: '100%',
    backgroundColor: theme.fogBackground,
    marginTop: 4,
    borderRadius: 4,
    fontSize: 16,
    color: theme.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 8,
  },
  contentTextError: {
    color: theme.redDark,
    marginTop: 4,
  },
}));

export default themedStyles;
