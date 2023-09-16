import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ColorManager } from "../../../core/resources/color_manager";

const NoResultContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>No Results</Text>
    </View>
  );
};

export default NoResultContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "600",
    color: ColorManager.gray02,
  },
});
