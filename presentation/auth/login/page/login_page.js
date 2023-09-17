import React from "react";
import AuthLayout from "../../../../components/base/layout/auth_layout";
import HeaderLoginView from "../components/header_login_view";
import SizeBox from "../../../../components/base/custom/size_box";
import InputLoginView from "../components/input_login_view";

const LoginPage = ({ route, navigation }) => {
  const { setToken } = route.params;
  return (
    <AuthLayout>
      <HeaderLoginView />
      <SizeBox height={30} />
      <InputLoginView setToken={setToken} navigation={navigation} />
    </AuthLayout>
  );
};

export default LoginPage;
