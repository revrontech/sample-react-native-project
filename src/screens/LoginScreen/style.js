import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  countryMobileContainer: {
    width: "100%",
    height: 190,
    backgroundColor: "colors.white",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  countryMobilelabel: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
  keyboardContainer: {
    width: "100%",
    backgroundColor: colors.white,
  },
  logoContainer: {
    position: "absolute",
    top: 300,
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 130,
  },
  loginButton: {
    marginTop: 10,
  },
  logoTagline: {
    color: colors.black,
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
  },
  inputContainer: {
    width: "95%",
  },
  textInputStyle: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.darkGrey,
  },
  buttonFooter: {
    paddingHorizontal: 20,
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
