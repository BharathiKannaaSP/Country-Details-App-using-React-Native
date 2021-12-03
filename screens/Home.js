import React ,{useEffect, useState}from 'react'
import { View, Text ,SafeAreaView, ScrollView,FlatList,Image,TouchableOpacity} from 'react-native'
import Appp from "./App"
import HeaderTabs from "../components/HeaderTabs"
import Categories from "../components/Categories"
import Add from "../components/Add"
import Swipeable  from 'react-native-gesture-handler/Swipeable'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const URL="https://restcountries.com/v3.1/all";

export default function Home() {
    const RightActions=()=>{
    return(
      <Icon icon="trash-alt"   />
    )
  }
  const [data,setdata] = React.useState([]);
  const deleteitem= id =>{
    const arr=[...data];
    arr.splice(id,1);
    setdata(arr)
  }
  useEffect(() => {
     fetch(URL).then((res) => res.json())
      .then((data)=> setdata(data));
      
  },[]);

console.log(data)
    return (
    
      
      <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
      <HeaderTabs/>
     <ScrollView showsVerticalScrollIndicator={false}>
     <Appp/>
     <Categories/>
     

      </ScrollView>
     
       <FlatList style={{ marginTop: 5, padding: 10, backgroundColor: "#E9EEE" }} 
       data={data} 
       keyExtractor={({id},index)=>id}
       
         onSwipeFromRight={()=>alert("swipped from right")}
         onLeftPress={()=>alert ("pressed left")}

      renderItem={({item})=>{
        
       return(
         <>
          <Swipeable renderRightActions={RightActions} keyExtractor={({flag},index)=>id} handleDelete={()=>deleteitem(id)}>
      <View
            style={{ marginTop: 10, padding:2, backgroundColor: "white" }}
          >
        <View style={{flexDirection:"row",padding:20}}>
        <Image style={{
          width:50,height:50,borderRadius:50,flexDirection:"row"}} source={item.flags.svg}/>
        
          <View style={{flexDirection:"column",marginLeft:0}}>
              <View style={{flexDirection:"row"}}>

</View>
         <Text style={{marginLeft:5,fontSize:18,color:"black",fontWeight:500,flexDirection:"row"}}>{item.name.common}
        <Text style={{ fontSize: 18, fontWeight:400,color:"teal",marginLeft:100,flexDirection:"column"}}>{item.area}km²</Text>
         </Text>
          <Text style={{marginLeft:5,fontSize:15,color:"gray",flexDirection:"row"}}>{item.capital}
        <Text style={{ fontSize: 15, fontWeight:400,color:"gray",marginLeft:100}}>{item.latlng}NS</Text>
</Text>

          </View>
</View>       
        <View>
        </View>
</View>
 </Swipeable>
    </>
      );
      }
    }
    
        />
       
        <Add/>
    </SafeAreaView>
  );
}

const Icon = (props) => (
  <TouchableOpacity onPress={props.handleDelete} >
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        
        style={{
          justifyContent:"center",
          padding:40,
          color:"red",
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      
    </View>
  </TouchableOpacity>
);