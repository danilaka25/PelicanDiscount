import React , { useState } from 'react';
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


const HomeScreen = ({navigation}) => {
  const theme = useTheme();

    const [activeNewsIndex, setNewsActiveIndex] = useState(0);
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const [news, setNews] = useState(
         
                  [
                    {
                        title:"Лапорта: Месси не гонится за деньгами, ему интересна Барселона",
                        text: "На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                        img: "https://www.bigmir.net/i/27/04/78/4/2704784/23594aad16fca9e4480181a0e766a063-quality_55Xresize_crop_1Xallow_enlarge_0Xw_300Xh_230.jpg"
                    },
                    {
                        title:"За год Китай переправил в Украину 22 контейнерных поезда",
                        text: "Text 2 На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                        img: "https://www.bigmir.net/i/27/04/78/4/2704784/23594aad16fca9e4480181a0e766a063-quality_55Xresize_crop_1Xallow_enlarge_0Xw_300Xh_230.jpg"
                    },
                    {
                        title:"Средняя зарплата: Кто из украинцев получает больше и меньше всего",
                        text: "Text 3 На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                        img: "https://www.bigmir.net/i/27/04/78/4/2704784/23594aad16fca9e4480181a0e766a063-quality_55Xresize_crop_1Xallow_enlarge_0Xw_300Xh_230.jpg"
                    },
                    {
                        title:"На Волыни мужчина совершил убийство струей воды",
                        text: "Text 4 На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                        img: "https://www.bigmir.net/i/27/04/78/4/2704784/23594aad16fca9e4480181a0e766a063-quality_55Xresize_crop_1Xallow_enlarge_0Xw_300Xh_230.jpg"
                    },
                    {
                        title:"Никаких танцев с бубном в Украине, – Кулеба об отношениях с Венгрией",
                        text: "Text 5 На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                        img: "https://www.bigmir.net/i/27/04/78/4/2704784/23594aad16fca9e4480181a0e766a063-quality_55Xresize_crop_1Xallow_enlarge_0Xw_300Xh_230.jpg"
                    },
                  ]
        );




    const [products, setProducts] = useState(
     
              [
                {
                    title:"Лапорта: Месси не гонится за деньгами, ему интересна Барселона",
                    text: "На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник:  На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                    img: "https://www.bigmir.net/i/27/04/78/4/2704784/23594aad16fca9e4480181a0e766a063-quality_55Xresize_crop_1Xallow_enlarge_0Xw_300Xh_230.jpg"
                },
                {
                    title:"За год Китай переправил в Украину 22 контейнерных поезда",
                    text: "Text 2 На своей странице в Инстаграм Комаров опубликовал селфи, где возлюбленная нежно целует его в щеку. На свежем снимке ведущий появился в зимней куртке красного цвета и полосатой шапке, а Александра позировала на камеру в бежевой шапке, сером свитере и темно-сиреневой куртке. Источник: ",
                    img: "https://www.bigmir.net/i/27/04/78/4/2704784/23594aad16fca9e4480181a0e766a063-quality_55Xresize_crop_1Xallow_enlarge_0Xw_300Xh_230.jpg"
                },
               
              ]
    );


    const _renderNews = ({item,index}) => {
        return (
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

        )
    }


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

  return (
   <View style={styles.container}> 

    <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}> 
    
      <View style={styles.barcodeContainer}>

          
       
       <View style={styles.barcodeInner}>
          <Barcode value="+380632373202"  format="CODE128" background="#fff" lineColor="#000"/>
       </View>

       <View style={styles.barcodePoints} >
        <Text>32</Text>
       </View> 

      </View>  

    <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 20 }}>
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


      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('EditProfileScreen')}>
          <View style={styles.categoryIcon}>
            <Fontisto name="info" size={35} color="#fff" />
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtnBig} onPress={()=>navigation.navigate('ExploreScreen')}>
          <View style={styles.categoryIconBig}>
            <Fontisto name="map" size={45} color="red" />
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('ExploreScreen')}>
          <View style={styles.categoryIcon}>
            <Fontisto name="coffeescript" size={26} color="red" />
          </View>
          
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
    flexDirection: "row",
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
    padding: 5 
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
    marginTop: 25,
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
    color: '#de4f35',
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
