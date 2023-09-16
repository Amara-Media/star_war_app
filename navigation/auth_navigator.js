import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../presentation/auth/login/page/login_page";

const AuthNavigator = ({ setToken }) => {
  const Stack = createNativeStackNavigator();
  const stackScreenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={stackScreenOptions}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        initialParams={{
          setToken: setToken,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
