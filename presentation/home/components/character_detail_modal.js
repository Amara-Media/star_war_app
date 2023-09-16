import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import BoldText from "../../../components/base/text/bold_text";
import { Ionicons } from "@expo/vector-icons";
import SizeBox from "../../../components/base/custom/size_box";
import dayjs from "dayjs";
import CustomLoading from "../../../components/base/custom/custom_loading";

const CharacterDetailModal = ({ modal, onClose, data, homeWorld, loading }) => {
  const list_label = ({ title = "", value = "" }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginBottom: 5,
          width: "100%",
        }}
      >
        <Text style={[styles.valueTxt, { width: 85 }]}>{title}</Text>
        <Text style={styles.valueTxt}>:</Text>
        <Text style={[styles.valueTxt, { width: 150 }]}>{value}</Text>
      </View>
    );
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
            <View style={styles.rowContainer}>
              <BoldText name={data?.name} />
              <TouchableOpacity
                onPress={() => onClose()}
                style={{ width: "10%" }}
              >
                <Ionicons
                  name="close-outline"
                  size={30}
                  color="#2F4858"
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
            <SizeBox height={15} />
            {list_label({
              title: "Height",
              value: `${data?.height / 100 ?? 0} meters`,
            })}
            {list_label({
              title: "Mass",
              value: `${data?.mass ?? 0} kg`,
            })}
            {list_label({
              title: "Date",
              value:
                dayjs(data?.created).format("DD-MM-YYYY") ??
                dayjs().format("DD-MM-YYYY"),
            })}
            {list_label({
              title: "Films",
              value: `${data?.films?.length ?? 0} films`,
            })}
            {loading ? (
              <CustomLoading />
            ) : (
              <View style={{ width: "100%" }}>
                <View>
                  <BoldText name="HomeWorld" fontSize={16} />
                </View>
                <SizeBox height={5} />
                {list_label({
                  title: "Name",
                  value: homeWorld?.name ?? "",
                })}
                {list_label({
                  title: "Terrain",
                  value: homeWorld?.terrain ?? "",
                })}
                {list_label({
                  title: "Climate",
                  value: homeWorld?.climate ?? "",
                })}
                {list_label({
                  title: "Residents",
                  value: `${homeWorld?.residentsCount ?? 0} residents`,
                })}
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CharacterDetailModal;
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
    padding: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  valueTxt: {
    fontSize: 16,
    fontWeight: "400",
    marginRight: 15,
  },
});
