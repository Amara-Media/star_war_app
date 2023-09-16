import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { toastConfig } from "../../../utils/toast";
import Toast from "react-native-toast-message";
import HeaderVector from "../../../assets/icons/header_vector";
import { ColorManager } from "../../../core/resources/color_manager";

const MainLayout = ({ large = false, children }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <HeaderVector style={{ position: "absolute", top: 0, right: 0 }} />
      <View style={[styles.main, { top: large ? 150 : 100 }]} />
      <KeyboardAvoidingView style={styles.pageContainer}>
        {children}
      </KeyboardAvoidingView>
      <Toast
        ref={(ref) => {
          Toast.setRef(ref);
        }}
        config={toastConfig}
        style={{ zIndex: 1000 }}
      />
    </View>
  );
};

export default MainLayout;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    overflow: "hidden",
    position: "relative",
    backgroundColor: ColorManager.primary,
  },
  main: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: ColorManager.bgColor,
  },
  pageContainer: {
    height: "100%",
    position: "absolute",
    top: 50,
    right: 0,
    left: 0,
    paddingHorizontal: 0,
    paddingBottom: 52,
  },
});
