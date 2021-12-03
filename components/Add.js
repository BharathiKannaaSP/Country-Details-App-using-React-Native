import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Add() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        position:"fixed",
        bottom:60,
        marginLeft:300,
        color:"green"
        
      }}
    >
      
      <Icon icon="plus"  />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity >
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
            color:"white",
            backgroundColor:"teal",
            marginBottom: 3,
            padding:15,
            borderRadius:50,
          alignSelf: "center",
        }}
      />
    
    </View>
  </TouchableOpacity>
);