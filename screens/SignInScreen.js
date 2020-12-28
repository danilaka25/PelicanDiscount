import React , { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Dimensions,
    Alert,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';

import Users from '../model/users';


import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';



//import { useNavigation } from '@react-navigation/native';


//import HomeScreen from './HomeScreen';


const SignInScreen = ({navigation}) => {

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


  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);

    console.log(confirmation)
  }

   


  async function confirmCode() {
    try {

      await confirm.confirm(code);
      console.log('Valid code.', );

      navigation.navigate('MainTabScreen')

      

    } catch (error) {
      console.log('Invalid code.');
    }
  }






    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }




    const renderForm = () => {
        if(!confirm){
            return(
                <>
                    <TextInput style={styles.fieldInput} value={phoneNumber} onChangeText={text => setPhoneNumber(text)} />
                    
                    <View style={styles.button}>
                    <TouchableOpacity  onPress={() => signInWithPhoneNumber(phoneNumber)}>
                        <LinearGradient
                            colors={['#cd002a', '#cd0000']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Enter your phone</Text>
                            <MaterialIcons 
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                </>
            );
        }else{
            return(
                <>
                    <TextInput style={styles.fieldInput} value={code} onChangeText={text => setCode(text)} />                    
                    <View style={styles.button}>
                    <TouchableOpacity  onPress={() => confirmCode()} >
                        <LinearGradient
                            colors={['#cd002a', '#cd0000']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Enter CODE</Text>
                            <MaterialIcons 
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                </>  
            );
        }
    }






 
 




    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#FF6347' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >


        {renderForm()}







             
            
          
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.38;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000000'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  fieldInput: {
    backgroundColor: '#cccccc',
    borderRadius: 50

  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

