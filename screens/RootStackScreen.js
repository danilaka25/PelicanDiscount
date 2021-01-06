import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';



import ProductItemDetails from './ProductItemDetails';
import EditProfileScreen from './EditProfileScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
    
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>


        <RootStack.Screen name="ExploreScreen" component={ExploreScreen}/>
         


        <RootStack.Screen name="CardListScreen" component={CardListScreen}/>

        <RootStack.Screen name="CardItemDetails" component={CardItemDetails}/>

        <RootStack.Screen name="ProductItemDetails" component={ProductItemDetails}/>


        <RootStack.Screen name="EditProfileScreen" component={EditProfileScreen}/>



    </RootStack.Navigator>
);

export default RootStackScreen;