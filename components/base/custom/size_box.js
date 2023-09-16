import { View } from "react-native";
import React from "react";

const SizeBox = ({ width = 10, height = 0 }) => {
  return <View style={{ height: height, width: width }}></View>;
};

export default SizeBox;
