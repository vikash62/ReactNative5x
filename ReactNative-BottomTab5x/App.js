
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createStackNavigator } from 'react-navigation/stack';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
// import PDFExample from './src/pdf';
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5';


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


export default  function App () {
  return (
    <NavigationContainer>
  <Tab.Navigator  screenOptions={({route})=>({
tabBarIcon:({focused,size,color})=>{
  let iconName;
  if(route.name==='Home'){
    iconName = 'btc';
    size= focused ? 25 : 20 ;
    // color= focused ? '#f0f' : '#555' ;
  }else if(route.name==='Aboutus'){
    iconName = 'abacus';
    size= focused ? 25 : 20 ;
    // color= focused ? '#f0f' : '#555' ;
  }
  return(
    <FontAwesome5
    name={iconName}
    size ={size}
    color = {color}    />
  )
}
  })
  } 
  tabBarOptions={{
    activeTintColor:'#f0f',
    inactiveTintColor:'#555',
    activeBackgroundColor:'#fff',
    inactiveBackgroundColor:'#999',
    showLabel:true,
    labelStyle:{fontSize:14},
  }}
  >
  <Tab.Screen name="Home" component={Home}  options={{tabBarBadge:3}}/>
      <Tab.Screen name="Aboutus" component={Aboutus}/>
  </Tab.Navigator>

    </NavigationContainer>
  // <PDFExample/>
)
}


