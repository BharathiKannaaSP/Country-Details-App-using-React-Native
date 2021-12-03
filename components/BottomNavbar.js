import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 100,
        justifyContent: "space-between",
        position:"fixed",
        bottom:0
      }}
    >
      <Icon icon="home" text="Dashboard"  />
      <Icon icon="globe-asia" text="Countries" />
      <Icon icon="tags" text="Products" />
      <Icon icon="store" text="Store" />
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
          color:"gray",
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text style={{
        color:"gray"
      }}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);