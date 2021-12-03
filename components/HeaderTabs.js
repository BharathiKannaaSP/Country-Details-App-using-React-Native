import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'


export default function Categories() {
    return (
        <View style={{margin:0,padding:50,backgroundColor:"rgb(24, 165, 138)"}}>
          <Text style={{
            color:"white",
            fontSize:"40px",
            textAlign:"left",
            marginLeft:"-20px",
           
          }}>Countries</Text>
          <span style={{
            fontSize:"20px",
            color:"white",
            marginLeft:"-20px",

          }}>Country information at a glance</span>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        </ScrollView>
        </View>
    )
}

