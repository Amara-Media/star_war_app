import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ColorManager } from "../../../core/resources/color_manager";
import BoldText from "../../../components/base/text/bold_text";
import { Ionicons } from "@expo/vector-icons";
import { showToast } from "../../../utils/toast";

const FilterView = ({
  selectedFilter = "Name",
  setSelectedFilter,
  extraAction = () => {},
}) => {
  const [expand, setExpand] = useState(false);
  const items = ["Home World", "Film", "Species", "Name"];

  const handleMenu = (value) => {
    extraAction();
    setSelectedFilter(value);
    setExpand(false);
    showToast({
      desc: `Let's search with ${
        value == items[3] ? "Character" : value
      }'s name`,
      type: "info",
    });
  };
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 20,
            width: 60,
          }}
          onPress={() => setExpand(!expand)}
        >
          <BoldText
            name="Filters"
            fontSize={12}
            color={!expand ? ColorManager.primary : ColorManager.darkGray}
          />
          <Ionicons
            name={
              expand
                ? "chevron-up-circle-outline"
                : "chevron-down-circle-outline"
            }
            size={14}
            color={!expand ? ColorManager.primary : ColorManager.darkGray}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: ColorManager.primary,
            paddingHorizontal: 6,
            paddingVertical: 3,
            borderRadius: 8,
            marginLeft: 15,
          }}
        >
          <BoldText
            name={selectedFilter}
            fontSize={10}
            color={ColorManager.white}
          />
        </View>
      </View>
      {expand && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                style={
                  selectedFilter == item
                    ? styles.selectedBtn
                    : styles.unSelectedBtn
                }
                key={index}
                onPress={() => handleMenu(item)}
              >
                <Text
                  style={{
                    color:
                      selectedFilter == item
                        ? ColorManager.primary
                        : ColorManager.darkGray,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default FilterView;
const styles = StyleSheet.create({
  selectedBtn: {
    height: 30,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: ColorManager.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
  unSelectedBtn: {
    height: 30,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: ColorManager.darkGray,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
});
