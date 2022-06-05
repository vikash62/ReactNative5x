import React from 'react';
import {Text, View,StyleSheet,Pressable} from 'react-native';
export default function Home({navigation}){
    const onPressHandler = () =>{
      navigation.navigate('Aboutus');
    }
   
  
    return(
      <View style={styles.body}>
        <Text  style={styles.text}>
          Home
        </Text>
        <Pressable
        onPress={
          onPressHandler
        }
        style={({pressed})=>({ backgroundColor:pressed ? '#ddd' : '#0f0'})}>
        <Text  style={styles.text}>Go to about us</Text>
        </Pressable>
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
      fontSize:40,
      // fontWeight:"bold",
  margin: 10,
  fontFamily:'AbrilFatface-Regular'
    }
  })