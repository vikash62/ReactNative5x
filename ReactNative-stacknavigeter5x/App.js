
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation/stack';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

const Stack = createStackNavigator();


export default  function App () {
  return (
    <NavigationContainer>
  <Stack.Navigator  screenOptions={{
        header:()=> null
      }}>
  <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Aboutus" component={Aboutus}/>
  </Stack.Navigator>

    </NavigationContainer>
)
}


