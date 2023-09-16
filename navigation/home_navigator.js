import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../presentation/home/page/home_page";

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  const stackScreenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={stackScreenOptions} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
