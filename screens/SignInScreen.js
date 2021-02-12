import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
  Animated,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { useTheme } from 'react-native-paper';
import { AuthContext } from '../components/context';


import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

import bgImage from "../assets/pattern2.jpg";
import LOGO from '../assets/svg/logo.svg';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from '../styles/confirmStyles';




const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6;


const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};



const SignInScreen = ({ navigation }) => {


  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderConfirmCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
        })
        : animationsColor[index].interpolate({
          inputRange: [0, 1],
          outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
        }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };



    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };


  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();



  const { signIn } = React.useContext(AuthContext);


  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('');


  const [tokenWasReceived, setTokenWasReceived] = useState(false);























  const onChangedPhone = (text) => {
    let validPhone = '';
    let numbers = '0123456789';
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        validPhone = validPhone + text[i];
      } else {
        Alert.alert("please enter numbers only");
      }
    }
    setPhoneNumber(validPhone)
  }


  async function signInWithPhoneNumber(phoneNumber) {
    let prefix = '+38';
    if (phoneNumber.length == 10) {
      const confirmation = await auth().signInWithPhoneNumber(prefix + phoneNumber);
      setConfirm(confirmation);

      setTokenWasReceived(true)


      console.log(confirmation._verificationId);
    } else {
      Alert.alert("not correct number");
    }
  }





  async function confirmCode() {
    try {

      console.log(value)

      await confirm.confirm(value);


      try {
        await AsyncStorage.setItem('userToken', confirm._verificationId);
        await AsyncStorage.setItem('phoneNumber', phoneNumber);

        console.log('Valid code.', confirm._verificationId);


        navigation.navigate('HomeScreen', { transition: 'fade' })
      } catch (e) {
        console.log(e);
      }





    } catch (error) {
      console.log('Invalid code.');
      Alert.alert("false code");
    }
  }








  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode='repeat' style={styles.bgImage}>

      <Animatable.View
                    style={styles.header}
                    animation="bounceIn"
                    duraton="3500"
                >
                    <LOGO width="290" height="100" />
                </Animatable.View>


        {tokenWasReceived ? (





          <Animatable.View
            style={[styles.footer, {
              backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
          >
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={value => setValue(value)}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderConfirmCell}
            />
            <TouchableOpacity onPress={() => confirmCode()} >
              <View style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Verify</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        ) : (

            <Animatable.View
              style={[styles.footer, {
                backgroundColor: colors.background
              }]}
              animation="fadeInUpBig"
            >


              <Text style={styles.title}>Введите свой номер телефона</Text>
              <Text style={styles.desc}>Что бы мы согли привязать вашу скидочную карту к телефону</Text>



              <View style={styles.button}>
                <View style={styles.fieldInputRow}>
                  <Text style={styles.fieldInputPrefix}>+38</Text>
                  <TextInput
                    style={styles.fieldInput}
                    value={phoneNumber}
                    onChangeText={text => onChangedPhone(text)}
                    placeholder=""
                    autoFocus={true}
                  />

                  <TouchableOpacity onPress={() => signInWithPhoneNumber(phoneNumber)} >
                    <LinearGradient
                      colors={['#cd002a', '#cd0000']}
                      style={styles.signIn}
                    >
                      <Text style={styles.textSign}>Отправить</Text>
                      <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                      />
                    </LinearGradient>
                  </TouchableOpacity>

                </View>



              </View>
            </Animatable.View>
          )}






      </ImageBackground>
    </View>
  );
};

export default SignInScreen;





