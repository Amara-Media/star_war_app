import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { GlobalStyle } from "../../../style/global_styles";
import BoldText from "../../../components/base/text/bold_text";
import SizeBox from "../../../components/base/custom/size_box";
import { ColorManager } from "../../../core/resources/color_manager";
import CharacterDetailModal from "./character_detail_modal";
const CharacterItem = ({ data, index }) => {
  const [hover, setHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}
      onPress={() => setModalOpen(true)}
    >
      <View
        style={[
          GlobalStyle.card,
          styles.container,
          {
            backgroundColor: hover
              ? data?.eye_color.split("-")[0]
              : ColorManager.white,
            transform: hover ? "scale(1)" : "scale(0.9)",
          },
        ]}
      >
        <Image
          source={{
            uri: `https://picsum.photos/200/300?random=${index}`,
          }}
          style={styles.image}
        />
        <SizeBox height={20} />
        <BoldText
          name={data?.name}
          fontSize={14}
          isCenter={true}
          color={
            hover
              ? data?.eye_color.split("-")[0] == "white"
                ? ColorManager.primaryFontColor
                : ColorManager.gray02
              : ColorManager.primaryFontColor
          }
        />
        <CharacterDetailModal
          modal={modalOpen}
          onClose={() => setModalOpen(false)}
          data={data}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharacterItem;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
