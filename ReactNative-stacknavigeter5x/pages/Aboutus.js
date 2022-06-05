import React from 'react';
import {Text, View,StyleSheet,Pressable} from 'react-native';


export default function Aboutus({navigation}){
    const onPressHandler = () =>{
      navigation.navigate('Home');
    }
    return(
      <View style={styles.body}>
        <Text  style={styles.text}>
        Aboutus
        </Text>
        <Pressable
        onPress={
          onPressHandler
        }
        style={({pressed})=>({ backgroundColor:pressed ? '#ddd' : '#0f0'})}>
        <Text  style={styles.text}>Go to Home</Text>
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
      fontWeight:"bold",
  margin: 10
    }
  })