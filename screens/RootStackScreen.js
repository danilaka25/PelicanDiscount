import React from 'react';

import { StyleSheet, Image } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';


import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import EditProfileScreen from './EditProfileScreen';



import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import ProductItemDetails from './ProductItemDetails';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';




import headerBg from "../assets/header_bg.jpg";


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='screen'>

        <RootStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
        />


        <RootStack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
                headerShown: false
            }}
        />

        <RootStack.Screen 
            name="SignInScreen" 
            component={SignInScreen}
            options={{
                headerShown:false
            }}
        />

        <RootStack.Screen
            name="DiscountBigScreen"
            component={DiscountBigScreen}
            options={{
                headerShown: false
            }}
        />

    

        <RootStack.Screen
            name="ExploreScreen"
            component={ExploreScreen}
            options={{
                //headerShown:false,  
                title: 'Заведения на карте',
                headerStyle: {
                    backgroundColor: 'red',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                // headerTransparent: true,
                // headerBackground: () => (
                //   <Image
                //       style={StyleSheet.absoluteFill}
                //       source={headerBg}
                //     />
                // ),
            }} 
        />


        <RootStack.Screen
            name="ProductItemDetails"
            component={ProductItemDetails}
            options={{
                headerTransparent: true,
                // headerBackground: () => (
                //   <Image

                //       source={headerBg}
                //     />
                // ),
                //  headerStyle: {
                //     height: 74, 
                //   }
            }}
        />

       
        



    </RootStack.Navigator>
);

export default RootStackScreen;