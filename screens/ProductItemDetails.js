import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView, 
  ScrollView
} from 'react-native';
 

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HTMLView from 'react-native-htmlview';




import bgImage from "../assets/bg4.jpg";
import imageAfter from "../assets/imageAfter.png";

import imageBefore from "../assets/imageBefore.png";





  

const ProductItemDetails = ({route}) => {
  const itemData = route.params.itemData;
 
  return (
<ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}> 
  
   
   
 


  <SafeAreaView style={styles.scrollArea}>
  <ScrollView style={styles.scrollView}>


      <ImageBackground source={imageBefore} style={styles.imageBefore}>
        <Text style={styles.price}>{itemData.price} грн</Text>     
      </ImageBackground>
      <View style={styles.productImageBg}> 
          <Image source={{uri:itemData.img}} style={styles.productImage}/>
             
      </View>
      <ImageBackground source={imageAfter} style={styles.imageAfter}></ImageBackground>
      


     <View style={styles.section}> 
       
       <HTMLView
          value={itemData.desc}
          stylesheet={styles.title}
        />
       <Text style={styles.sectionContent}>{itemData.title}</Text>     
    </View>


 

    
    </ScrollView>
    </SafeAreaView>
    
    </ImageBackground>
  );
};

export default ProductItemDetails;

const styles = StyleSheet.create({
  bgImage: {
    paddingBottom: 20,
    alignItems: 'center' 
  },
  scrollArea: {
    width: '100%',
  },

  scrollView: {
    width: '100%',
  },
  price: {
     color: '#000000',
    width: 60,
    height: 30,
    backgroundColor: "#ffffff",
    borderWidth: 3,

    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 30

  },
  productImageBg: {
    backgroundColor: '#ffffff',
     


  },

  imageBefore: {
    marginTop: 50,
    height: 60, 
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  imageAfter: {
    height: 60, 
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  productImage: {
    width:  260, 
    height: 260, 
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10

  },
  container: {
     
     
     
  },
  section: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
     
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 50,
    alignSelf: 'center',
    marginTop: -20,

  },
  image: {
    height: 200,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },


  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 18,
    color: '#ffffff'
     
  },
    
 
});
