import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  modalContainer: {
    margin: 0,
    width: 320,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 16,
    borderColor: theme.primarybase,
    borderRadius: 8,
    borderWidth: 2,
  },
  btnContainer: {
    width: 48,
    marginTop: 16,
  },
}));

export default themedStyles;
