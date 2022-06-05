
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation/stack';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';

const Stack = createStackNavigator();


export default  function App () {
  return (
    <NavigationContainer>
  <Stack.Navigator screenOptions={{
        header:()=> null
      }}>
  
     <Stack.Screen name="Login" component={Login}/>
  <Stack.Screen name="Home" component={Home} />
     
  </Stack.Navigator>

    </NavigationContainer>
)
}


