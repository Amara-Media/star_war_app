import React, { useState } from "react";
import * as Font from "expo-font";
import * as Icon from "@expo/vector-icons";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./stores/user";
import AppNavigator from "./navigation/app_navigator";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox, View } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default function App() {
  const [loading, setLoading] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Inter-light": require("./assets/fonts/Inter-Light.ttf"),
      "Inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
      "Inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
      ...Icon.Ionicons.font,
      ...Icon.MaterialIcons.font,
    });
    setLoading(true);
  }
  loadFonts();
  if (loading) {
    return (
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
      </Provider>
    );
  }
}
