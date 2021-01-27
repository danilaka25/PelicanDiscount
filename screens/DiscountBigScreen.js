import React , { useState , useEffect} from 'react';
import {
    ImageBackground,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet
  } from 'react-native';
import Barcode from "react-native-barcode-builder";
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import bgImage from "../assets/bg3.jpg";

const DiscountBigScreen = ({navigation}) => {

    return (
        <>
        <StatusBar backgroundColor='#000' />
    <SafeAreaView style={styles.backgroung}>   
     <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}>
        <View style={{transform: [{ rotate: '90deg' }],  flexDirection: "row", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}
        >
        
        <View style={styles.bonusWrapper}>    
            <Text style={styles.bonusWrapperTitle}>на вашеи счету</Text>    
            <Text>0</Text>    
            <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" >
                <Fontisto name="star" size={35} color="#000" />
            </Animatable.View>
        </View>


    

        <View style={styles.barcodeWrapper}>    
            <Barcode value="+380632373202"  format="CODE128" background="#fff" lineColor="#000"   width="3"/>
        </View>    
        
        </View>

        <TouchableOpacity  style={styles.close} onPress={()=> navigation.navigate('HomeScreen')} >
            <Fontisto name="close" size={35} color="#fff" />
        </TouchableOpacity>
    
    </ImageBackground>
    </SafeAreaView>
</>
    )    

}

export default DiscountBigScreen;


const styles = StyleSheet.create({
    bgImage: {

        width: '100%',
        height: '100%'
    },
    backgroung: {
        backgroundColor: "#000"
    },   
    bonusWrapper: {
        alignItems: "center",
        backgroundColor: "#fff",
        height: 200,
        marginRight: 20,
        justifyContent: "center",
        padding: 20,
        borderRadius:10
    },

    bonusWrapperTitle:{

    },
    barcodeWrapper: {
        alignItems: "center",
        backgroundColor: "#fff",
        height: 200,
        justifyContent: "center",
        padding: 20,
        borderRadius:10,
       
    },
    close: {
        position: 'absolute',
        right: 25,
        bottom: 25
         
    }
})
