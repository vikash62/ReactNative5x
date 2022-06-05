import React from 'react';
import { View ,Pressable,StyleSheet,Text} from 'react-native';

const Custombutton = (props) => {
  return(

    <Pressable onPress={props.onPressFunction}
    hitSlop={{top:10,bottom:10,right:10,left:10}}
    android_ripple={{color:"#00f"}}
    style={({pressed})=>[
      {backgroundColor:pressed ? '#dddddd' : '#00ff00'},
      styles.button
    ]}
    >
      <Text style={styles.text}>
        {props.title}
      </Text>
    </Pressable>

  ) 
};

const styles = StyleSheet.create({
  
    text:{
     fontSize:23,
     color: "#000000",
     margin: 10,
     alignItems:"center",
     textAlign:"center",
     
    },
    button:{
       width:150,
       height:50,
       alignItems:"center" 
    },
   
   });

export default Custombutton;
