import OTPInputView from "@twotalltotems/react-native-otp-input";
import { StyleSheet, View, Dimensions, Text, Linking } from "react-native";
import { Button } from "@rneui/base";
import styles from "./style";

type HeaderComponentProps = {
  title: string,
  view?: string,
};

type ParamList = {
  Detail: {
    openDrawer: void,
  },
};
const NavigateToLogin = (props) => {
  props.navigation.navigate("login");
};

const NavigateToHome = (props) => {
  props.navigation.navigate("home");
};

const Otp: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.OtpContainer}>
      {/* OTP Container */}
      <View style={styles.OtpInput}>
        <Text style={styles.subHeading}>
          Enter the OTP sent to +91 9999999999
        </Text>
        <OTPInputView
          style={styles.otpInputView}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad={false}
          keyboardType="number-pad"
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <View style={styles.requestOtp}>
          <Text>Didn't receive OTP? </Text>
          <Text
            style={styles.requestAgain}
            onPress={() => Linking.openURL("http://google.com")}
          >
            Request Again
          </Text>
        </View>
      </View>
      {/* Verify Button */}
      <View style={styles.buttonsContainer}>
        <Button
          title="Verify and continue"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyles}
          titleStyle={styles.buttonValue}
          onPress={() => NavigateToHome(props)}
        />
      </View>
    </View>
  );
};

export default Otp;
