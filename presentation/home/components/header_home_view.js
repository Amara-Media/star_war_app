import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { ColorManager } from "../../../core/resources/color_manager";
import ProfileIcon from "../../../assets/icons/profile_icon";
import SizeBox from "../../../components/base/custom/size_box";

const HeaderHomeView = ({ navigation }) => {
  const userData = useSelector((state) => state.user.userData);
  console.log("user", userData.username);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.rowContainer}>
            <Image
              source={{ uri: `https://picsum.photos/200/300?random=1` }}
              style={styles.image}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.welcomeTxt}>Welcome !</Text>
              <Text style={styles.nameTxt}>{userData?.username}</Text>
            </View>
          </View>
          <MaterialIcons
            name="logout"
            size={28}
            color="#fff"
            onPress={() => {}}
          />
        </View>
        <SizeBox height={13} />
        <Text style={styles.dateTxt}>
          {dayjs(new Date()).format("dddd, Do MMMM YYYY")}
        </Text>
      </View>
    </View>
  );
};

export default HeaderHomeView;
const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeTxt: {
    color: ColorManager.white,
    fontSize: 12,
    fontWeight: "500",
  },
  nameTxt: {
    color: ColorManager.white,
    fontSize: 20,
    fontWeight: "600",
  },
  dateTxt: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});
