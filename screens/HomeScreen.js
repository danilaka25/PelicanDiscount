import React , { useState , useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import Fontisto from 'react-native-vector-icons/Fontisto';
 
import bgImage from "../assets/bg3.jpg";

 
import Barcode from "react-native-barcode-builder";

import Carousel from 'react-native-snap-carousel';
import auth from '@react-native-firebase/auth';


import AsyncStorage from '@react-native-community/async-storage';

import { newsData, productsData } from '../model/data';


import database from '@react-native-firebase/database';






const HomeScreen = ({navigation}) => {

  

  
  


  const theme = useTheme();



  const [testToken, setTestToken] = useState(0);


    const [activeNewsIndex, setNewsActiveIndex] = useState(0);
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    
    
    const [news, setNews] = useState(
      [
        {
            title:"Лапорта: Месси за деньгами, ему интересна Барселона",
            text: "На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник:  На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hLHHQyWn44oYWPMucb-iibknNwKFcjJYPQ&usqp=CAU",
            price: 20
        },
        {
            title:"За год Китай ",
            text: "бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYY6CCI-EYUBQYKldk1FqlJDYoQSvK2mjP7Q&usqp=CAU",
            price: 25
        },                               
        {
            title:"За Китай ",
            text: "бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3Bt3KJ560fXsS1scIx9Xw4m8S0YjwX32Iw&usqp=CAU",
            price: 35
        },
       
      ]
    );



    const [products, setProducts] = useState(
     
              [
                {
                    title:"Лапорта: Месси за деньгами, ему интересна Барселона",
                    text: "На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник:  На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hLHHQyWn44oYWPMucb-iibknNwKFcjJYPQ&usqp=CAU",
                    price: 20
                },
                {
                    title:"За год Китай ",
                    text: "бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYY6CCI-EYUBQYKldk1FqlJDYoQSvK2mjP7Q&usqp=CAU",
                    price: 25
                },                               
                {
                    title:"За Китай ",
                    text: "бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3Bt3KJ560fXsS1scIx9Xw4m8S0YjwX32Iw&usqp=CAU",
                    price: 35
                },
               
              ]
    );


    const _renderNews = ({item,index}) => {
        return (
          <TouchableOpacity
          itemData={item}
          onPress={()=> navigation.navigate('NewsItemDetails', {itemData: item})} > 
          <View style={{
              backgroundColor:'floralwhite',
              flexDirection: 'row',
              borderRadius: 5,     
              width: 280,  
              marginLeft: 15,
              marginRight: 15, }}>
            
            <Image
              style={{width: 138, height: 138, borderRadius: 5,}}
              source={{uri: item.img}}
            />
            <Text style={{fontSize: 12, width: '50%', padding: 10}}>{item.title}</Text>
          </View>
          </TouchableOpacity>

        )
    }

    // 
  const _renderProducts = ({item,index}) => {
        return (
          <TouchableOpacity
            itemData={item}
            onPress={()=> navigation.navigate('ProductItemDetails', {itemData: item})} > 
            <View style={{
                backgroundColor:'floralwhite',
                borderRadius: 5,
                 
                width: 120,
                padding: 5,
                marginRight: 15,
                  
              }}>
              <Image
                style={{width: 110, height: 110, borderRadius: 5}}
                source={{uri: item.img}}
              />
            </View>
          </TouchableOpacity>
        )
    }



    const fillNewsData = async () => {
      var tempNews =[];
      await database()
      .ref('/news')
      .once('value')
      .then(snapshot => {
        for (var key in snapshot.val()) {
          tempNews.push(snapshot.val()[key]);
        }
        setNews(tempNews)
      })
      .then(
        console.log("news", news)     
      );
    }

    const getTokenFromStorage = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e)
      }
      setTestToken(userToken) 
      console.log("userToken", testToken)
    };


    useEffect(() => {

      getTokenFromStorage();
      //fillNewsData();
 
      console.log("useEffect")
     
      }, []);



    const logOut = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('phoneNumber');
    } catch(e) {
      // remove error
    }       
        
    console.log("token deleted");

    navigation.navigate('SplashScreen')


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

  return (
   <View style={styles.container}> 

    <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}> 
    
      <View style={styles.barcodeContainer}>





          
       
       <View style={styles.barcodeInner}>
      
      
      <TouchableOpacity  onPress={()=>logOut()}>
      <Text>LOGOUT</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>consoleLog()}>
      <Text>consoleLog</Text>
      </TouchableOpacity>


            <View>
              <Text>На вашем счету</Text>
              <Text>100 </Text>
            </View>


            <TouchableOpacity onPress={()=>navigation.navigate('DiscountBigScreen')}>
              <View style={{
                transform: [{ scale: 0.7 }]
              }}>
                  <Barcode value="+380632373201"  format="CODE128" background="#fff" lineColor="#000"   />
              </View> 
            </TouchableOpacity>
       </View>

       <View style={styles.barcodePoints} >
        <Text>32</Text>
       </View> 

      </View>  

    <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 20}}>
    <Text style={styles.sliderTitle}>Новости</Text>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center',}}>
        
            <Carousel
              layout={"default"}       
              data={news}
              sliderWidth={300}
              itemWidth={290}
              renderItem={_renderNews}
              onSnapToItem = { index => setNewsActiveIndex(index) } />
        </View>
    </SafeAreaView>


    <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 20, marginLeft: '5%'}}>
        <Text style={styles.sliderTitle}>Предложения недели</Text>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
              layout={"default"}
              loop={true} 
              enableSnap={true}
              activeSlideAlignment={'start'}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}           
              data={products}
              sliderWidth={120}
              itemWidth={130}
              renderItem={_renderProducts}
              onSnapToItem = { index => setActiveProductIndex(index) } />
        </View>
    </SafeAreaView>


      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('CardListScreen')}>
          <View style={styles.categoryIcon}>
            <Fontisto name="info" size={35} color="#fff" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hotels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtnBig} onPress={()=>navigation.navigate('ExploreScreen')}>
          <View style={styles.categoryIconBig}>
            <Fontisto name="map" size={45} color="red" />
          </View>
          <Text style={styles.categoryBtnTxt}>Наши заведения</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('ExploreScreen')}>
          <View style={styles.categoryIcon}>
            <Fontisto name="coffeescript" size={26} color="red" />
          </View>
          <Text style={styles.categoryBtnTxt}>Меню</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
     </View>
  );
};

export default HomeScreen;

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
     
    backgroundColor: '#ffffff' 
  },

  barcodeContainer: {
    marginTop: 30,
    width: '100%',
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },

  barcodeInner: {
    width: '90%', 
    // borderBottomColor: 'red',
    // borderBottomWidth: 2,
    // borderTopColor: 'red',
    // borderTopWidth: 2,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5 ,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
     alignItems: "center",
  },

  barcodePoints: {
    position: "absolute",
    top: -20,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 50,
    color: "#fff",
    padding: 20,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 2,
  },

  colLeft: {
    width: "100%",
    // transform: [{ rotate: '90deg'}]
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },


  sliderTitle: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 15
  },



  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryBtnBig: {
    flex: 1,
    width: '40%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#FF7373' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryIconBig: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 90,
    height: 90,
    backgroundColor: '#fff' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#fff',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
