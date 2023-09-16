import React from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Toast from "react-native-toast-message";
import { toastConfig } from "../../../utils/toast";
import { ColorManager } from "../../../core/resources/color_manager";

const AuthLayout = ({ children, large = true }) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" />
      {large && (
        <Image
          source={require("../../../assets/images/vector-1.png")}
          style={styles.main}
        />
      )}
      <Image
        source={require("../../../assets/images/vector-2.png")}
        style={styles.main}
      />
      <Image
        source={require("../../../assets/images/vector-3.png")}
        style={styles.main}
      />

      <KeyboardAvoidingView
        style={styles.pageContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>{children}</ScrollView>
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

export default AuthLayout;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    overflow: "hidden",
    position: "relative",
    backgroundColor: ColorManager.white,
  },
  background: {
    height: 150,
  },
  main: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
  },
  pageContainer: {
    height: "100%",
    position: "absolute",
    top: 50,
    right: 0,
    left: 0,
    paddingHorizontal: 0,
  },
});
