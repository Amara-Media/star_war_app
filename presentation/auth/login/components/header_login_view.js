import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LogoIcon from "../../../../assets/icons/logo_icon";
import BoldText from "../../../../components/base/text/bold_text";
import SizeBox from "../../../../components/base/custom/size_box";
import RegularText from "../../../../components/base/text/regular_text";

const HeaderLoginView = () => {
  return (
    <View style={styles.container}>
      <SizeBox height={30} />
      <LogoIcon />
      <SizeBox height={80} />
      <BoldText name="Welcome back!" fontSize={26} />
      <RegularText name="Login to your account" fontSize={16} />
    </View>
  );
};

export default HeaderLoginView;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  welcomeTxt: {
    fontSize: 26,
    fontWeight: "600",
  },
  subTxt: {
    fontSize: 16,
    fontWeight: "400",
  },
});
