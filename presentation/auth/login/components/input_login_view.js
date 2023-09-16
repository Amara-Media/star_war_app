import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ColorManager } from "../../../../core/resources/color_manager";
import SizeBox from "../../../../components/base/custom/size_box";
import { Ionicons } from "@expo/vector-icons";
import PrimaryCheckBox from "../../../../components/base/radio/primary_check_box";
import PrimaryBtn from "../../../../components/base/btn/primary_btn";
import { login } from "../../../../data/auth/auth";
import { EmailValidation } from "../../../../utils/email_validation";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../../stores/user";
import CustomLoading from "../../../../components/base/custom/custom_loading";

const InputLoginView = ({ setToken }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);

  const handleLogin = async () => {
    setLoading(true);
    const response = login({ username: email, password: password });
    if (response.data) {
      const { jwt } = response.data;
      if (rememberMe) {
        const user = {
          email: email,
          username: "Than Soe Oo",
        };
        SecureStore.setItemAsync("user", JSON.stringify(user));
        await dispatch(setUserData(user));
        SecureStore.setItemAsync("token", jwt);
        setToken(jwt);
        setLoading(false);
      } else {
        setToken("One Time Login");
        SecureStore.setItemAsync("user", JSON.stringify(user));
        await dispatch(setUserData(user));
        setLoading(false);
      }
    } else {
      setErrMsg(response.error?.message);
      setLoading(false);
    }
  };

  const emailTextChange = (text) => {
    setEmail(text);
    const emailValid = EmailValidation(text);
    setEmailValidation(emailValid);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textInputWrapper,
          {
            borderColor:
              !emailValidation || errMsg
                ? ColorManager.error
                : ColorManager.primary,
          },
        ]}
      >
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor={ColorManager.hintColor}
          style={styles.input}
          value={email}
          onChangeText={(text) => emailTextChange(text)}
          autoCapitalize="none"
        />
      </View>
      {!emailValidation && (
        <Text style={styles.errorText}>{"Email format is not correct"}</Text>
      )}
      <SizeBox height={20} />
      <View
        style={[
          styles.textInputWrapper,
          {
            borderColor: errMsg ? ColorManager.error : ColorManager.primary,
          },
        ]}
      >
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          placeholderTextColor={ColorManager.hintColor}
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Ionicons
              name="eye-outline"
              size={20}
              color={ColorManager.secondaryFontColor}
              style={styles.eyeIcon}
            />
          ) : (
            <Ionicons
              name="eye-off-outline"
              size={20}
              color={ColorManager.secondaryFontColor}
              style={styles.eyeIcon}
            />
          )}
        </TouchableOpacity>
      </View>
      {errMsg && <Text style={styles.errorText}>{errMsg}</Text>}
      <SizeBox height={20} />

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <PrimaryCheckBox
          title="Remember me"
          active={rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotTxt}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <SizeBox height={30} />
      {loading ? (
        <CustomLoading />
      ) : (
        <PrimaryBtn title="Log In" onPress={handleLogin} />
      )}
    </View>
  );
};

export default InputLoginView;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputWrapper: {
    height: 46,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    color: ColorManager.primaryFontColor,
    fontSize: 14,
    borderRadius: 10,
    flex: 1,
  },
  eyeIcon: {
    marginRight: 15,
  },
  forgotTxt: {
    fontSize: 14,
    fontWeight: "500",
    color: ColorManager.primaryFontColor,
  },
  errorText: {
    marginTop: 5,
    color: ColorManager.error,
    fontSize: 12,
    fontWeight: "400",
  },
});
