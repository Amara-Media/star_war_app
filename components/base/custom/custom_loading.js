import React from "react";
import { ActivityIndicator, View } from "react-native";
import { ColorManager } from "../../../core/resources/color_manager";
import BoldText from "../text/bold_text";

const CustomLoading = () => {
  return (
    <View>
      <ActivityIndicator size="small" color={ColorManager.primary} />
      <BoldText name="loading" fontSize={12} isCenter={true} />
    </View>
  );
};

export default CustomLoading;
