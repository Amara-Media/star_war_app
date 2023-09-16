import React from "react";
import { Text, StyleSheet } from "react-native";

const BoldText = ({
  name = "Bold Text",
  fontSize = 20,
  isCenter = false,
  color = "black",
}) => {
  return (
    <Text
      style={[
        styles.txt,
        {
          fontSize: fontSize,
          textAlign: isCenter ? "center" : "left",
          color: color,
        },
      ]}
    >
      {name}
    </Text>
  );
};

export default BoldText;
const styles = StyleSheet.create({
  txt: {
    fontWeight: "600",
  },
});
