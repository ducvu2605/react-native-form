import React, {useState, useRef, useImperativeHandle, forwardRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import {SvgXml} from 'react-native-svg';
import svgs from '../../../assets/images/svg';
import globalStyles from '../../../constants/globalStyles';
import {useMergeState} from '../../../utils/hooks';
const InputCT = (props, ref) => {
  const {
    type,
    titleHeader,
    placeholder,
    onChangeText,
    value,
    style,
    isError,
    messageError,
    autoFocus,
    onSubmitEditing,
    blurOnSubmit,
  } = props;
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  const inputRef = useRef(null);
  const [state, setState] = useMergeState({
    isSecureTextEntry: true,
    isFocus: false,
  });
  const onPressTogglePassword = () => {
    setState({isSecureTextEntry: !state.isSecureTextEntry});
  };
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
    clear() {
      inputRef.current.clear();
    },
  }));

  return (
    <View style={style}>
      <Text style={[glbStyles.txt14SBoldBlack, styles.textTitleHeader]}>
        {titleHeader}
      </Text>
      {type === 'Password' ? (
        <>
          <View style={styles.inputTogglePassword}>
            <TextInput
              ref={inputRef}
              placeholder={placeholder}
              placeholderTextColor={themed.coalDark}
              onChangeText={onChangeText}
              value={value}
              passwordRules={'string'}
              secureTextEntry={state.isSecureTextEntry}
              style={[glbStyles.flx, glbStyles.txt16RegularBlack]}
              autoFocus={autoFocus}
              onSubmitEditing={onSubmitEditing}
              blurOnSubmit={blurOnSubmit}
            />
            <TouchableOpacity onPress={onPressTogglePassword}>
              <SvgXml
                xml={
                  state.isSecureTextEntry
                    ? svgs.togglePassword
                    : svgs.untogglePassword
                }
              />
            </TouchableOpacity>
          </View>

          {isError && (
            <Text
              style={[glbStyles.txt14RegularBlack, styles.contentTextError]}>
              {messageError}
            </Text>
          )}
        </>
      ) : (
        <TextInput
          ref={inputRef}
          style={[glbStyles.txt16RegularBlack, styles.inputDefault]}
          placeholder={placeholder}
          placeholderTextColor={themed.coalDark}
          onChangeText={onChangeText}
          value={value}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
        />
      )}
    </View>
  );
};
export default forwardRef(InputCT);

InputCT.defaulProps = {
  type: 'Normal',
  titleHeader: '',
  placeholder: '',
  onChangeText: () => {},
  value: '',
  style: {},
  isError: false,
  messageError: '',
  autoFocus: false,
  onSubmitEditing: () => {},
  blurOnSubmit: false,
};
InputCT.propTypes = {
  type: PropTypes.string,
  titleHeader: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style),
  ]),
  isError: PropTypes.bool,
  messageError: PropTypes.string,
  autoFocus: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
  blurOnSubmit: PropTypes.bool,
};
