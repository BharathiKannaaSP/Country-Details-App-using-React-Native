import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const localCountries = [
  {
    name: `Kenya`,
    image_url:
      "https://flagcdn.com/w320/ke.png",
    area: 580367,
    capital:'Nairobi',
    currencies:"Kenya Shilling",
    latlng:["43.76666666","12.41666666"]
  },
  {
     name: `Kenya`,
    image_url:
      "https://flagcdn.com/w320/ke.png",
    area: 580367,
    capital:'Nairobi',
    latlng:["43.76666666","12.41666666"],
    currencies:"Kenya Shilling",

  },
  {
    name: `Kenya`,
    image_url:
      "https://flagcdn.com/w320/ke.png",
    area: 5555555,
    capital:'Nairobi',
    latlng:["43.76666666","12.41666666"],
    currencies:"Kenya Shilling"
  },
];

export default function Countries(props) {
  return (

    <>
      {localCountries.map((countries, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          
        >
          <View
            style={{ marginTop: 20, padding: 15, backgroundColor: "white" }}
          >
            <CountriesImage image={countries.image_url} />
            <CountriesInfo name={countries.name}  
            area={countries.area} 
            capital={countries.capital} 
            currencies={countries.currencies}
            latlng={countries.latlng}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const CountriesImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "10%", borderRadius:"50%",height:"60%" }}
    />
    
  </>
);

const CountriesInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 12,
    }}
  >
    <View >
      <Text style={{ fontSize: 15, fontWeight: "bold", }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.currencies}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.latlng}</Text>

    </View>
    <View
      style={{
        backgroundColor: "#eee",
     
        alignItems: "center",
        justifyContent: "center",
      
      }}
    >
      <Text style={{color:"teal",marginLeft:-100}}>{props.area}km²</Text>
    </View>
  </View>
);