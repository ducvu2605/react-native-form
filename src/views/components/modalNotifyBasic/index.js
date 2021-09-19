import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import svgs from '../../../assets/images/svg';
import globalStyles from '../../../constants/globalStyles';
import ButtonCT from '../buttonCT';
import themedStyles from './styles';
const ModalBasic = props => {
  const {isVisible, titleHeader, email, onPressButton} = props;
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  return (
    <Modal style={styles.containModal} isVisible={isVisible}>
      <View style={styles.contain}>
        <SvgXml xml={svgs.glassEmail} />
        <Text style={[glbStyles.txt18SBoldBlack, styles.titleHeader]}>
          {titleHeader}
        </Text>
        <Text style={[glbStyles.txt14RegularBlack, styles.txtCener]}>
          {'An email with a confirmation link has been sent '}
          <Text style={glbStyles.txt14SBoldBlack}>{email}</Text>
          <Text style={glbStyles.txt14RegularBlack}>
            {'\nPlease check your email and follow the instruction.'}
          </Text>
        </Text>
        <ButtonCT
          style={styles.mT40}
          type={'TEXT'}
          title={'Okay'}
          onPress={onPressButton}
        />
      </View>
    </Modal>
  );
};
export default ModalBasic;

ModalBasic.defaulProps = {
  isVisible: false,
  titleHeader: '',
  email: '',
  onPressButton: () => {},
};
ModalBasic.propTypes = {
  isVisible: PropTypes.bool,
  titleHeader: PropTypes.string,
  email: PropTypes.string,
  onPressButton: PropTypes.func,
};
