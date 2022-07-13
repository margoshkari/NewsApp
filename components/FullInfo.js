import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, { marginBottom: "5%" }]}>
        {route.params.name}
      </Text>
      <Image
        style={{ borderRadius: 15 }}
        resizeMode="cover"
        source={{
          uri: route.params.img,
          width: "100%",
          height: 300,
        }}
      />
      <Text style={gStyle.title}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
