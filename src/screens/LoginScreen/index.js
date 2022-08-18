import { Button } from "@rneui/base";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { connect, useDispatch } from "react-redux";
import { kill, killed } from "../../redux/features/counter";
import { getLoading } from "../../redux/selector";
import styles from "./style";

const NavigateToOtp = (props) => {
  props.navigation.navigate("otp");
};

const LoginScreen = (props) => {
  const [phoneNumber, SetPhoneNumber] = useState("1273128783912");
  console.log(JSON.stringify(props))

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/login-background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        ></Image>
        <Text style={styles.logoTagline}>Delivering the best way</Text>
      </View>
      {/* Country Code Selector */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.countryMobileContainer}>
          <Text style={styles.countryMobilelabel}>
            Enter your mobile number
          </Text>
          <PhoneInput
            containerStyle={styles.inputContainer}
            defaultValue={phoneNumber}
            layout="first"
            textInputStyle={styles.textInputStyle}
          />
          <TouchableOpacity
            style={styles.test}
            onPress={() => {
              Alert.alert(phoneNumber);
            }}
          ></TouchableOpacity>
          <View style={styles.buttonFooter}>
            <Button
              title="Continue"
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyles}
              titleStyle={styles.buttonValue}
              onPress={() => {
                props.kill()
                setTimeout(() => {
                  props.killed()
                }, 3000);
                NavigateToOtp(props)
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      {/* Country Code Selector Ends*/}
    </ImageBackground>
  );
}

export default connect(state => ({ loading: getLoading(state) }), { kill, killed })(LoginScreen);
