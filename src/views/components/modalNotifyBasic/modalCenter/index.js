import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, ViewPropTypes, Button} from 'react-native';
import globalStyles from '../../../../constants/globalStyles';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';

import Modal from 'react-native-modal';
import ButtonCT from '../../buttonCT';

const ModalCenter = props => {
  const {onPress, isVisible, message, style} = props;
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  return (
    <Modal isVisible={isVisible} style={[styles.modalContainer, style]}>
      <View style={styles.contentContainer}>
        <Text style={glbStyles.txt16BoldBlack}>{message}</Text>

        <ButtonCT title="Ok" style={styles.btnContainer} onPress={onPress} />
      </View>
    </Modal>
  );
};

export default ModalCenter;
ModalCenter.defaultProps = {
  isVisible: true,
  message: '',
  style: {},
  onPress: () => {},
};
ModalCenter.propTypes = {
  isVisible: PropTypes.bool,
  message: PropTypes.string,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style),
  ]),
  onPress: PropTypes.func,
};
