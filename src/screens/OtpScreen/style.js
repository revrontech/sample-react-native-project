import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: colors.black,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingHorizontal: 20,
  },
  subheaderText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  OtpContainer: {
    flex: 1,
  },
  OtpInput: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  otpInputView: {
    width: "80%",
    height: 200,
  },
  requestOtp: {
    display: "flex",
    flexDirection: "row",
  },
  subHeading: {
    color: colors.grey,
    fontSize: 14,
    alignSelf: "center",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: colors.black,
    fontSize: 18,
    borderColor: colors.black,
  },

  underlineStyleHighLighted: {
    borderColor: colors.black,
  },
  requestAgain: {
    color: "green",
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 35,
    paddingVertical: 6,
    fontWeight: "600",
    marginTop: 20,
  },
  buttonStyles: {
    width: "100%",
    backgroundColor: colors.primary,
  },
  buttonValue: {
    fontSize: 18,
    fontWeight: "600",
  },
});
