import React , { useState, useEffect } from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { useTheme } from 'react-native-paper';
import { AuthContext } from '../components/context';


import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';



 


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

    const [testToken, setTestToken] = useState(0);


    const { signIn } = React.useContext(AuthContext);


  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('');



   
 






  









  const onChangedPhone = (text)  => {
    let validPhone = '';
    let numbers = '0123456789';
    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
          validPhone = validPhone + text[i];
        } else {
          alert("please enter numbers only");
        }
    }
    setPhoneNumber(validPhone)
  } 


  async function signInWithPhoneNumber(phoneNumber) {
    let prefix = '+38';
    if(phoneNumber.length == 10){  
      const confirmation = await auth().signInWithPhoneNumber(prefix + phoneNumber);
      setConfirm(confirmation);
      console.log(confirmation._verificationId);
    } else {
      alert("not correct number");
    }
  }





  async function confirmCode() {
    try {

        await confirm.confirm(code);
      

        try {
          await AsyncStorage.setItem('userToken', confirm._verificationId);
          await AsyncStorage.setItem('phoneNumber', phoneNumber);

          console.log('Valid code.', confirm._verificationId);


          navigation.navigate('HomeScreen',  { transition: 'fade' })
        } catch(e) {
          console.log(e);
        }

      

      

    } catch (error) {
        console.log('Invalid code.');    
        alert("false code");    
    }
  }


  const consoleLog = () => {

       
    const bootstrapAsync = async () => {
      let userToken;
      let phoneNumber;
  
      try {
        userToken = await AsyncStorage.getItem('userToken');
        phoneNumber = await AsyncStorage.getItem('phoneNumber');
      } catch (e) {
      }

     
      setTestToken(userToken) 
      console.log("userToken", testToken)
      console.log("phoneNumber", phoneNumber)
      
    };
  
    bootstrapAsync();

}


    const renderForm = () => {
        if(!confirm){
            return(
                  <Animatable.View 
                      style={[styles.footer, {
                          backgroundColor: colors.background
                      }]}
                      animation="fadeInUpBig"
                  >
                  <TouchableOpacity  onPress={()=>consoleLog()}>
                  <Text>consoleLog</Text>
                  </TouchableOpacity>
                  <View style={styles.fieldInputRow}>
                    <Text style={styles.fieldInputPrefix}>+38</Text>
                    <TextInput 
                    style={styles.fieldInput} 
                    value={phoneNumber} 
                    onChangeText={text => onChangedPhone(text)} 
                    placeholder=""
                    autoFocus={true}
                    />
                  </View>  
                    
                    <View style={styles.button}>
                    <TouchableOpacity  
                      onPress={() => signInWithPhoneNumber(phoneNumber)}
                      
                       
                    >
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
                </Animatable.View>
            );
        }else{
            return(
                <Animatable.View 
                      style={[styles.footer, {
                          backgroundColor: colors.background
                      }]}
                      animation="fadeInUpBig"
                >
                    <TouchableOpacity  onPress={()=>consoleLog()}>
      <Text>consoleLog</Text>
      </TouchableOpacity>
                    <TextInput 
                      style={styles.fieldInput} 
                      value={code} 
                      onChangeText={text => setCode(text)} 
                      autoFocus={true}
                      />                    
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
                </Animatable.View>
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
                    <Text style={styles.title}>Введите свой номер телефона, мы пришлем вам смс</Text>
                  

                    <View style={styles.fieldInputRow}>

                    <TextInput 
                      style={styles.fieldInput} 
                      value={code} 
                      onChangeText={text => setCode(text)} 
                      autoFocus={true}
                      />  

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
      flex: 1,
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
      fontSize: 23,
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
  fieldInputRow: {
    flexDirection: "row",
    
    alignItems: "center",
   },
  fieldInputPrefix: {
    flex: 1,
    fontSize: 20,

  },
  fieldInput: {
    backgroundColor: '#cccccc',
    borderRadius: 50,
    paddingLeft: 20,
    flex: 4,
    fontSize: 20,
     

  },
  signIn: {
      flex: 1,
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

