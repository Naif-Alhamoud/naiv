 import * as React from "react";
 import {View ,Text} from 'react-native';


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


//Screens

import HomeScreen from "./screens/HomeScreen";
import  SettingsScreen from './screens/SettingsScreen';
import  DetailsScreen from './screens/DetailsScreen';
import  Ionicons from 'react-native-vector-icons/Ionicons';
//Screen Name
const HomeName='Home';
const SettingsName='Settings';
const DetailsName='Details';

const Tab = createBottomTabNavigator();

 export default function MainContainer(){
     return(
         <NavigationContainer>
             <Tab.Navigator
             initialRouteName={HomeName}
             screenOptions={({route}) => ({
                 tabBarIcon: ({ focused , color ,size }) => {
                     let iconName;
                     let rn = route.name;
                     if(rn === HomeName){
                         iconName = focused ? 'home' : 'home-outline';

                     } else if (rn === SettingsName ){
                          iconName = focused ? 'settings' : 'settings-outline';
                     } else if (rn === DetailsName){
                          iconName = focused ? 'list' : 'list-outline';
                          
                     }
                     return <Ionicons name = {iconName} size={size} color = {color}/>
                 }
             })}
             tabBarOptions={{
                 activeTintColor: 'red',
                 inactiveTintColor:'green',
                 labelStyle: { paddingBottom:10, fontsize:10},
                 style:{padding : 10 ,height:70}
                 
             }}>
             <Tab.Screen name={SettingsName} component={SettingsScreen}/>
             <Tab.Screen name={HomeName} component={HomeScreen}/>
             <Tab.Screen name={DetailsName} component={DetailsScreen}/>



             </Tab.Navigator>
         </NavigationContainer>
     )
 }