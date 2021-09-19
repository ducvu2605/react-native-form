import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import svgs from '../../../../assets/images/svg';
import pngs from '../../../../assets/images/png';
import globalStyles from '../../../../constants/globalStyles';
import themedStyles from './styles';
import InputCT from '../../../components/inputCT';
import ButtonCT from '../../../components/buttonCT';
import ModalBasic from '../../../components/modalNotifyBasic';
import CustomView from '../../../components/customView';
import {useMergeState} from '../../../../utils/hooks';
import {getUserData, saveUserData} from '../../../../utils/storage';
const CreateNewPassword = props => {
  const {navigation, route} = props;
  const {fisrtName, lastName, email} = route.params;
  const [styles] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  const [state, setState] = useMergeState({
    isModal: false,
    password: '',
    confirmPassword: '',
    isError: false,
  });
  const inputConfirmPass = useRef(null);
  const onPressFinish = () => {
    if (state.password === state.confirmPassword) {
      setState({isModal: !state.isModal, isError: false});
      const user = {
        fisrtName,
        lastName,
        email,
        password: state.password,
      };
      // save local user
      saveUserData(user);
    } else {
      setState({isError: true});
    }
  };
  const onPressButtonModal = () => {
    setState({isModal: !state.isModal});
    navigation.popToTop();
  };
  const onPressBack = async () => {
    navigation.goBack();
  };
  const isDisable = () => {
    if (state.password !== '' && state.confirmPassword !== '') {
      return false;
    }
    return true;
  };

  const onChangeTextPassword = text => {
    setState({password: text});
  };
  const onChangeTextConfirmPassword = text => {
    setState({confirmPassword: text});
  };
  return (
    <CustomView>
      <Image
        source={pngs.bgDevice}
        style={[glbStyles.width100, styles.containImage]}
      />
      <View style={styles.containContent}>
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
            disabled={isDisable()}
            style={glbStyles.flx}
            title={'Finish'}
            onPress={onPressFinish}
          />
        </View>
      </View>
      <ModalBasic
        isVisible={state.isModal}
        email={'hennryjames@example.com'}
        titleHeader={'Verify your email'}
        onPressButton={onPressButtonModal}
      />
    </CustomView>
  );
};
export default CreateNewPassword;
