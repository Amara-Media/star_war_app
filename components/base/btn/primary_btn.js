import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { ColorManager } from "../../../core/resources/color_manager";

const PrimaryBtn = ({
  enableIcon = false,
  icon,
  onPress = () => {},
  title = "Confirm",
  height = 45,
  isOutline = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          alignItems: "center",
          justifyContent: enableIcon ? "flex-start" : "center",
          paddingHorizontal: !enableIcon ? 0 : 20,
          height: height,
          backgroundColor: isOutline
            ? ColorManager.white
            : ColorManager.primary,
          borderWidth: 2,
        },
      ]}
    >
      {enableIcon && <View style={{ width: 25 }}>{icon()}</View>}
      {enableIcon && <SizeBox width={15} />}
      <Text
        style={[
          styles.btnTxt,
          {
            color: isOutline ? ColorManager.primary : ColorManager.white,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderColor: ColorManager.primary,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "600",
  },
});
