import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import globalStyles from '../../../../constants/globalStyles';
import themedStyles from './styles';
import InputCT from '../../../components/inputCT';
import ButtonCT from '../../../components/buttonCT';
import CustomView from '../../../components/customView';
import svgs from '../../../../assets/images/svg';
import pngs from '../../../../assets/images/png';
import {useMergeState} from '../../../../utils/hooks';
import {getUserData, USER_DEFAULT} from '../../../../utils/storage';
// redux
import {useSelector, useDispatch} from 'react-redux';
import {loginRequest} from '../../../../redux/action/login';
import ModalCenter from '../../../components/modalNotifyBasic/modalCenter';

const SignIn = props => {
  const {navigation} = props;
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  const inputPassRef = useRef(null);
  const [state, setState] = useMergeState({
    email: '',
    password: '',
    accountUser: {},
    isModal: false,
  });
  const selectorLogin = useSelector(stateRedux => stateRedux.login);
  const dispatch = useDispatch();

  const onPressBack = () => {
    navigation.goBack();
  };

  const onchangeTextEmail = text => {
    setState({email: text});
  };
  const onchangeTextPassword = text => {
    setState({password: text});
  };

  const isDisable = () => {
    if (state.email !== '' && state.password !== '') {
      return false;
    }
    return true;
  };

  const onCallBackSuccess = () => {
    setState({
      isModal: true,
    });
  };

  const onCallBackFail = () => {
    setState({
      isModal: false,
    });
    ToastAndroid.show('User error,Please agian', ToastAndroid.SHORT);
  };

  const onPressSignIn = () => {
    dispatch(
      loginRequest(
        {
          email: state.email,
          password: state.password,
        },
        onCallBackSuccess,
        onCallBackFail,
      ),
    );
  };

  const onPressOffModal = () => {
    setState({
      isModal: false,
    });
  };

  return (
    <CustomView style={styles.container}>
      <View style={glbStyles.row}>
        <View style={styles.containLogoAndTxt}>
          <TouchableOpacity style={glbStyles.padding12} onPress={onPressBack}>
            <SvgXml xml={svgs.caretLeft} />
          </TouchableOpacity>
          <View style={styles.AIcenter}>
            <SvgXml xml={svgs.logo} />
            <Text
              style={[
                glbStyles.txt24SBoldBlack,
                styles.colorTxtCoalDarKest,
                styles.mT12,
              ]}>
              Sign in
            </Text>
          </View>
          <View style={styles.slideIconEmpty} />
        </View>
      </View>

      <InputCT
        titleHeader={'Email'}
        placeholder={'Enter your email'}
        style={styles.marginInputEmail}
        value={state.email}
        onChangeText={text => {
          onchangeTextEmail(text);
        }}
        onSubmitEditing={() => {
          inputPassRef.current.focus();
        }}
        blurOnSubmit={false}
      />

      <InputCT
        ref={inputPassRef}
        type={'Password'}
        titleHeader={'Password'}
        placeholder={'Enter your password'}
        value={state.password}
        onChangeText={text => {
          onchangeTextPassword(text);
        }}
      />

      <ButtonCT
        title={'Sign in'}
        style={styles.marginInputButtonSignIn}
        disabled={isDisable()}
        onPress={onPressSignIn}
      />
      <ButtonCT type={'TEXT'} title={'Forgot password?'} />
      <ModalCenter
        message={selectorLogin.message}
        isVisible={state.isModal}
        onPress={onPressOffModal}
      />
    </CustomView>
  );
};

export default SignIn;
