import React from "react";
import { Text, StyleSheet } from "react-native";

const RegularText = ({ name = "Bold Text", fontSize = 16 }) => {
  return <Text style={[styles.txt, { fontSize: fontSize }]}>{name}</Text>;
};

export default RegularText;
const styles = StyleSheet.create({
  txt: {
    fontWeight: "400",
  },
});
