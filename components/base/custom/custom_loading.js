import React from "react";
import { ActivityIndicator } from "react-native";
import { ColorManager } from "../../../core/resources/color_manager";

const CustomLoading = () => {
  return <ActivityIndicator size="small" color={ColorManager.primary} />;
};

export default CustomLoading;
