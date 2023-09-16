import React, { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { View } from "react-native";
import BoldText from "../../../components/base/text/bold_text";
import { MaterialIcons } from "@expo/vector-icons";
import { ColorManager } from "../../../core/resources/color_manager";
import SizeBox from "../../../components/base/custom/size_box";
import PrimaryBtn from "../../../components/base/btn/primary_btn";
import * as SecureStore from "expo-secure-store";

const LogOutModal = ({ modal, onClose, setToken }) => {
  const logOutHandler = () => {
    SecureStore.deleteItemAsync("token");
    SecureStore.deleteItemAsync("user");
    setToken();
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => onClose()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MaterialIcons
              name="remove-circle-outline"
              size={50}
              color={ColorManager.primary}
            />
            <SizeBox height={15} />
            <BoldText name="Oh no! You're leaving..." />
            <BoldText name="Are you sure?" />
            <SizeBox height={20} />
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: 90 }}>
                <PrimaryBtn title="Cancel" isOutline={true} onPress={onClose} />
              </View>
              <View style={{ width: 90 }}>
                <PrimaryBtn title="Logout" onPress={logOutHandler} />
              </View>
            </View>
            <SizeBox height={10} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LogOutModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
});
