import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyle } from "../../../style/global_styles";
import { Ionicons } from "@expo/vector-icons";
import { ColorManager } from "../../../core/resources/color_manager";
import BoldText from "../../../components/base/text/bold_text";
import RegularText from "../../../components/base/text/regular_text";

const PaginationView = ({
  page = 1,
  setPage = () => {},
  forwardEnable = true,
}) => {
  return (
    <View style={[GlobalStyle.card, styles.container]}>
      <TouchableOpacity onPress={() => setPage(page - 1)} disabled={page == 1}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={page != 1 ? ColorManager.primary : ColorManager.gray02}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <RegularText name={"Page "} fontSize={14} />
        <BoldText name={page} fontSize={14} />
      </View>
      <TouchableOpacity
        onPress={() => setPage(page + 1)}
        disabled={!forwardEnable}
      >
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={forwardEnable ? ColorManager.primary : ColorManager.gray02}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PaginationView;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
