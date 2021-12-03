import React from 'react'
import { View, Text, Image, ScrollView ,TouchableOpacity} from 'react-native'
import  { useState } from 'react'

export default function Categories() {
   const [activeTab,setactiveTab]=useState("Area");
    return (
           <View style={{flexDirection:"row",alignSelf:"center",marginRight:"10px",backgroundColor:"#E9EEEE"}}>
            <HeaderButton 
            text="Area" 
            btnColor="gray"
            textColor="#E9EEEE" 
            activeTab={activeTab} 
            setactiveTab={setactiveTab}
            />
            <HeaderButton 
            text="Population"   
            btnColor="#E9EEEE"
            textColor="#E9EEEE"
            activeTab={activeTab} 
            setactiveTab={setactiveTab}
            />
          <HeaderButton 
            text="Alphabetical"   
            btnColor="#E9EEEE"
            textColor="#E9EEEE"
            activeTab={activeTab} 
            setactiveTab={setactiveTab}
            />  <HeaderButton 
            text="Economy"   
            btnColor="#E9EEEE"
            textColor="#E9EEEE"
            activeTab={activeTab} 
            setactiveTab={setactiveTab}
            />
        </View>
    )
}
const HeaderButton =(props) =>

    <TouchableOpacity style={{
        backgroundColor:props.activeTab==props.text ? "white":"white",
        paddingVertical:6,
        paddingHorizontal:10,
        marginRight:10,
        alignItems:'center',
        borderRadius:10
    }}
    onPress={()=>props.setactiveTab(props.text)}
    >
     <Text style={{
         color:props.activeTab==props.text ? "rgb(24, 165, 138)":"gray",
         fontSize:15,fontWeight:"400"
         }}>{props.text}</Text>
     </TouchableOpacity>
