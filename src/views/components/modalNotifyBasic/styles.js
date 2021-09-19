import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containModal: {
    margin: 0,
    marginTop: 32,
  },
  contain: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 72,
    alignItems: 'center',
  },
  titleHeader: {
    marginTop: 24,
    marginBottom: 16,
  },
  txtCener: {
    textAlign: 'center',
  },
  mT40: {
    marginTop: 40,
  },
}));

export default themedStyles;
