import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth_navigator";
import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { setUserData } from "../stores/user";
import HomeNavigator from "./home_navigator";
import dayjs from "dayjs";
import "react-native-get-random-values";

const AppNavigator = () => {
  var advancedFormat = require("dayjs/plugin/advancedFormat");
  dayjs.extend(advancedFormat);
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const fetchData = async () => {
    const jwt = await SecureStore.getItemAsync("token");
    console.log("jwt", jwt);
    if (jwt) {
      setToken(jwt);
      const userData = await SecureStore.getItemAsync("user");
      const data = JSON.parse(userData);
      await dispatch(setUserData(data));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      {token ? (
        <HomeNavigator setToken={setToken} />
      ) : (
        <AuthNavigator setToken={setToken} />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
