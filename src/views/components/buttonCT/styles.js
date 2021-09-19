import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containerFULL: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
  },
  containerOUTLINE: {
    width: '100%',
    height: 48,
    backgroundColor: theme.white,
    alignItems: 'center',
    borderRadius: 4,
    borderColor: theme.colorBorder,
    borderWidth: 1,
    justifyContent: 'center',
  },
  containerTEXT: {
    // width: '100%',
    height: 26,
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
  },
  textButtonFULL: {
    color: theme.white,
    flexShrink: 1,
  },
  textButtonOUTLINE: {
    color: theme.primarybase,
    flexShrink: 1,
  },
  textButtonTEXT: {
    flexShrink: 1,
    color: theme.primarybase,
  },
}));
export default themedStyles;
