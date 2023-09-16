import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ColorManager } from "../../../core/resources/color_manager";

const PrimaryCheckBox = ({ active = true, onPress = () => {}, title = "" }) => {
  return (
    <TouchableOpacity style={styles.rowContainer} onPress={onPress}>
      <View
        style={[
          styles.radio,
          {
            borderColor: active ? ColorManager.primary : ColorManager.hintColor,
          },
        ]}
      >
        {active && (
          <Ionicons
            name="checkmark-sharp"
            size={15}
            color={ColorManager.primary}
            style={styles.eyeIcon}
          />
        )}
      </View>
      <Text style={styles.radioTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryCheckBox;
const styles = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  activeRadio: {
    width: 10,
    height: 10,
    backgroundColor: ColorManager.primary,
    borderRadius: 5,
  },
  radioTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: ColorManager.primaryFontColor,
  },
});
