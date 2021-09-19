import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, ViewPropTypes} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import globalStyles from '../../../constants/globalStyles';
const ButtonCT = props => {
  const {type, style, title, onPress, disabled} = props;
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  if (type === 'FULL') {
    return (
      <TouchableOpacity
        style={[
          styles.containerFULL,
          disabled
            ? {backgroundColor: themed.primaryLighter}
            : {backgroundColor: themed.primarybase},
          style,
        ]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[glbStyles.txt16BoldBlack, styles.textButtonFULL]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  if (type === 'OUTLINE') {
    return (
      <TouchableOpacity
        style={[styles.containerOUTLINE, style]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[glbStyles.txt16BoldBlack, styles.textButtonOUTLINE]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  if (type === 'TEXT') {
    return (
      <TouchableOpacity
        style={[styles.containerTEXT, style]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[glbStyles.txt16BoldBlack, styles.textButtonTEXT]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
};
export default ButtonCT;

ButtonCT.defaultProps = {
  type: 'FULL',
  style: {},
  title: '',
  onPress: () => {},
  disabled: false,
};
ButtonCT.propTypes = {
  type: PropTypes.string,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style),
  ]),
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};
