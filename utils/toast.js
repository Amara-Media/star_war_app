import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { ColorManager } from "../core/resources/color_manager";

export const showToast = ({ title, desc, type = "error" }) => {
  Toast.show({
    type: type,
    text1: title,
    text2: desc,
    autoHide: true,
    visibilityTime: 3000,
    topOffset: [50],
  });
};

export const toastConfig = {
  success: (props) => (
    <View
      style={[styles.toastContainer, { borderLeftColor: ColorManager.primary }]}
    >
      <Ionicons
        name="checkmark-circle"
        size={24}
        color={ColorManager.primary}
      />
      <View style={styles.rowContainer}>
        <View style={{ width: "88%", marginLeft: 5 }}>
          <Text style={styles.toastTitle}>Success!</Text>

          <Text style={styles.toastDesc}>
            <Text style={{ fontWeight: "600" }}>{props.text1}</Text>
            {props.text2}
          </Text>
        </View>
        <TouchableOpacity onPress={() => Toast.hide()}>
          <AntDesign
            name="close"
            size={20}
            color={ColorManager.black}
            style={{ opacity: 0.5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  ),

  info: (props) => (
    <View
      style={[styles.toastContainer, { borderLeftColor: ColorManager.info }]}
    >
      <Ionicons name="alert-circle" size={24} color={ColorManager.info} />
      <View style={styles.rowContainer}>
        <View style={{ width: "88%", marginLeft: 5 }}>
          <Text style={styles.toastTitle}>Info</Text>

          <Text style={styles.toastDesc}>
            <Text style={{ fontWeight: "600" }}>{props.text1}</Text>
            {props.text2}
          </Text>
        </View>
        <TouchableOpacity onPress={() => Toast.hide()}>
          <AntDesign
            name="close"
            size={20}
            color={ColorManager.black}
            style={{ opacity: 0.5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  ),

  error: (props) => (
    <View
      style={[styles.toastContainer, { borderLeftColor: ColorManager.error }]}
    >
      <Ionicons name="alert-circle" size={24} color={ColorManager.error} />
      <View style={styles.rowContainer}>
        <View style={{ width: "88%", marginLeft: 5 }}>
          <Text style={styles.toastTitle}>Apologies !</Text>
          <Text style={styles.toastDesc}>
            <Text style={{ fontWeight: "600" }}>{props.text1}</Text>
            {props.text2}
          </Text>
        </View>
        <TouchableOpacity onPress={() => Toast.hide()}>
          <AntDesign
            name="close"
            size={20}
            color={ColorManager.black}
            style={{ opacity: 0.5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    display: "flex",
    flexDirection: "row",
    width: "96%",
    backgroundColor: ColorManager.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    borderLeftWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "96%",
  },
  toastTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  toastDesc: {
    fontSize: 14,
    fontWeight: "400",
  },
});
