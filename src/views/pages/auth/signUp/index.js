import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import globalStyles from '../../../../constants/globalStyles';
import themedStyles from './styles';
import {SvgXml} from 'react-native-svg';
import svgs from '../../../../assets/images/svg';
import InputCT from '../../../components/inputCT';
import ButtonCT from '../../../components/buttonCT';
import CustomView from '../../../components/customView';
import {useMergeState} from '../../../../utils/hooks';
import ModalBasic from '../../../components/modalNotifyBasic';
import {saveUserData} from '../../../../utils/storage';

const SignUp = props => {
  const {navigation} = props;
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  const [state, setState] = useMergeState({
    step: '1',
    fisrtName: '',
    lastName: '',
    email: '',
    isModal: false,
    password: '',
    confirmPassword: '',
    isError: false,
  });
  const inputLNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputConfirmPass = useRef(null);

  const onPressNext = () => {
    setState({step: '2'});
  };
  const onPressBack = () => {
    navigation.goBack();
  };
  const onChangeTextFirstName = text => {
    setState({fisrtName: text});
  };
  const onChangeTextLastName = text => {
    setState({lastName: text});
  };
  const onChangeTextEmail = text => {
    setState({email: text});
  };

  const isDisable = () => {
    if (state.fisrtName !== '' && state.lastName !== '' && state.email !== '') {
      return false;
    }
    return true;
  };
  const isDisableCreateNewPassword = () => {
    if (state.password !== '' && state.confirmPassword !== '') {
      return false;
    }
    return true;
  };
  // Create new password
  const onPressBackCreateNewPassword = () => {
    setState({step: '1'});
  };
  const onChangeTextPassword = text => {
    setState({password: text});
  };
  const onChangeTextConfirmPassword = text => {
    setState({confirmPassword: text});
  };
  const onPressFinish = () => {
    if (state.password === state.confirmPassword) {
      const user = {
        fisrtName: state.fisrtName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
      };
      // save local user
      saveUserData(user);
      setState({isModal: true, isError: false});
    } else {
      setState({isError: true});
    }
  };
  const onPressButtonModal = () => {
    navigation.popToTop();
  };
  return (
    <CustomView>
      {state.step === '1' ? (
        <View style={styles.containContent}>
          <View style={glbStyles.row}>
            <View style={styles.containLogoAndTxt}>
              <TouchableOpacity
                style={glbStyles.padding12}
                onPress={onPressBack}>
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
                  Create Account
                </Text>
              </View>
              <View style={styles.slideIconEmpty} />
            </View>
          </View>

          <View style={[glbStyles.row, glbStyles.marginB16, styles.mT32]}>
            <InputCT
              titleHeader={'First name'}
              placeholder={'First name'}
              style={[glbStyles.flx, styles.mR12]}
              value={state.fisrtName}
              onChangeText={text => onChangeTextFirstName(text)}
              onSubmitEditing={() => {
                inputLNameRef.current.focus();
              }}
              blurOnSubmit={false}
            />
            <InputCT
              ref={inputLNameRef}
              titleHeader={'Last name'}
              placeholder={'Last name'}
              style={glbStyles.flx}
              value={state.lastName}
              onChangeText={text => onChangeTextLastName(text)}
              onSubmitEditing={() => {
                inputEmailRef.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>

          <InputCT
            ref={inputEmailRef}
            titleHeader={'Email'}
            placeholder={'Enter your email'}
            value={state.email}
            onChangeText={text => onChangeTextEmail(text)}
          />

          <Text
            style={[
              styles.contentTxt,
              glbStyles.txt16RegularBlack,
              styles.colorTxtCoalDarKest,
            ]}>
            {'By continuing, you agree to our '}
            <Text
              style={[glbStyles.txt16BoldBlack, {color: themed.primarybase}]}>
              {'Privacy policy and Terms & Conditions'}
            </Text>
          </Text>

          <ButtonCT
            disabled={isDisable()}
            title={'Next'}
            onPress={onPressNext}
          />
        </View>
      ) : (
        <View style={styles.containContent}>
          <View style={glbStyles.row}>
            <View style={styles.containLogoAndTxt}>
              <TouchableOpacity
                style={glbStyles.padding12}
                onPress={onPressBackCreateNewPassword}>
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
                  Create Account
                </Text>
              </View>
              <View style={styles.slideIconEmpty} />
            </View>
          </View>

          <Text style={[styles.mT32, glbStyles.txt14SBoldBlack]}>
            {'Passwords must be '}
            <Text style={glbStyles.txt14SBoldBlack}>
              {'at least 8 characters.'}
            </Text>
          </Text>
          <InputCT
            style={[styles.mT24, glbStyles.marginB16]}
            type={'Password'}
            titleHeader={'Password'}
            placeholder={'Enter your password'}
            value={state.password}
            onChangeText={text => onChangeTextPassword(text)}
            onSubmitEditing={() => {
              inputConfirmPass.current.focus();
            }}
            blurOnSubmit={false}
          />
          <InputCT
            ref={inputConfirmPass}
            type={'Password'}
            titleHeader={'Confirm password'}
            placeholder={'Reenter your password'}
            value={state.confirmPassword}
            onChangeText={text => onChangeTextConfirmPassword(text)}
            isError={state.isError}
            messageError={'Your passwords don’t match. Please check again.'}
          />

          <View style={[styles.containButton]}>
            <ButtonCT
              style={[glbStyles.flx, styles.mR12]}
              type={'OUTLINE'}
              title={'Back'}
              onPress={onPressBack}
            />
            <ButtonCT
              disabled={isDisableCreateNewPassword()}
              style={glbStyles.flx}
              title={'Finish'}
              onPress={onPressFinish}
            />
          </View>
          <ModalBasic
            isVisible={state.isModal}
            email={state.email}
            titleHeader={'Verify your email'}
            onPressButton={onPressButtonModal}
          />
        </View>
      )}
    </CustomView>
  );
};
export default SignUp;
