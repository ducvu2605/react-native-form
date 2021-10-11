import React, {useRef, useEffect, useState} from 'react';
import {View, Text, Image, Animated} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import globalStyles from '../../../constants/globalStyles';
import ButtonCT from '../../components/buttonCT';
import CustomView from '../../components/customView';
import {SvgXml} from 'react-native-svg';
import svgs from '../../../assets/images/svg';
import pngs from '../../../assets/images/png';
import jpgs from '../../../assets/images/jpg';
import {screenWidth, screenHeight} from '../../../utils';
// native android
import ToastModule from '../../../native/android/toastModule';
import {useRecoilState} from 'recoil';
import textSelector from '../../../recoil/selector/textSelector';

const heightImage = screenHeight - 244 + 32;
const Welcome = props => {
  const imageAnimated = useRef(new Animated.ValueXY()).current;
  const {navigation} = props;
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  const [hideContent, setHideContent] = useState(true);
  useEffect(() => {
    const reverseImageAnimated = navigation.addListener('focus', () => {
      imageTranstion.reverse();
      setHideContent(true);
    });
    return reverseImageAnimated;
  }, [navigation]);

  // recoil
  const [textRecoil, setTextRecoil] = useRecoilState(textSelector);

  useEffect(() => {
    console.log(textRecoil);
  }, []);

  const onPressSignUp = () => {
    imageTranstion.start();
    setHideContent(false);
    navigation.navigate('SignUp');
  };
  const onPressSignIn = () => {
    imageTranstion.start();
    setHideContent(false);
    navigation.navigate('SignIn');
  };

  const imageTranstion = {
    start: () => {
      Animated.timing(imageAnimated, {
        toValue: {
          x: (screenWidth / 2) * 0.6,
          y: -(screenHeight / 2) * 0.6,
        },
        duration: 200,
        useNativeDriver: true,
      }).start();
    },
    reverse: () => {
      Animated.timing(imageAnimated, {
        toValue: {
          x: 0,
          y: 0,
        },
        duration: 200,
        useNativeDriver: true,
      }).start();
    },
  };
  //------------------------------Native Android-------------------------------
  const onCallBackModule = () => {
    ToastModule.excuteCallback(
      'DucVu',
      value => {
        console.log(value);
        ToastModule.showToast(value); // use function Module simple
      },
      error => {
        console.log(error);
      },
    );
  };

  // Have used asyn - await to getData which is an Object
  const onPromiseModule = async () => {
    try {
      const result = await ToastModule.excutePromise('DucVua');
      const resultConvert = JSON.stringify(result);
      console.log(`${resultConvert}`);
    } catch (error) {
      console.log(`${error}`);
      // console.log(`${error.message}`); // getMessage Error
    }
  };
  //---------------------------------------------------------------------------

  return (
    <CustomView style={glbStyles.flx}>
      <Animated.Image
        source={jpgs.deviceWelcome}
        style={[
          glbStyles.width100,
          {
            height: heightImage,
            transform: [
              {translateX: imageAnimated.x},
              {translateY: imageAnimated.y},
            ],
          },
        ]}
      />
      {hideContent && (
        <View style={styles.containButton}>
          <ButtonCT
            title={'Create Account'}
            style={glbStyles.marginB16}
            onPress={onPressSignUp}
          />

          <ButtonCT
            type={'OUTLINE'}
            title={'Sign in'}
            onPress={onPressSignIn}
          />

          <View style={styles.containOrSignIn}>
            <View style={styles.line} />
            <Text style={glbStyles.marginH8}>Or sign in with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.containLogo}>
            <SvgXml xml={svgs.logoGoogle} style={styles.mR24} />
            <SvgXml xml={svgs.logoFacebook} />
          </View>
        </View>
      )}
    </CustomView>
  );
};
export default Welcome;
