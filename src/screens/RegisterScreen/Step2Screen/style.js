import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  screen: {
    paddingTop: 20,
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 40,
  },
  ratingsHeader1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  ratingsHeader2: {
    fontSize: 38,
    color: colors.green,
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonActions: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -10,
  },
  imageDisplay: {
    padding: 30,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  dropdownLabel: {
    fontWeight: "bold",
    color: colors.grey,
    fontSize: 14,
    marginBottom: -15,
  },
  dropdown: {
    marginTop: 16,
    height: 50,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputLabel: {
    fontWeight: "bold",
    color: colors.grey,
    fontSize: 14,
  },
  input: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    paddingHorizontal: 0,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: "600",
  },
  inputMultiline: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    paddingHorizontal: 0,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: "600",
    textAlignVertical: "top",
    minHeight: 50,
  },
  inputError: {
    color: colors.red,
    fontSize: 12,
    marginTop: 5,
  },
  seperatorHeading: {
    color: colors.black,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  statusSwitch: {
    flexBasis: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  searchAddressContainer: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
  },
  searchAddress: {
    paddingHorizontal: 0,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: "600",
    color: colors.grey,
  },
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerButtonsLeft: {
    flexBasis: "45%",
  },
  footerButtonsRight: {
    flexBasis: "45%",
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 35,
    paddingVertical: 5,
    fontWeight: "600",
    marginTop: 40,
  },
  buttonStyles: {
    width: "100%",
    backgroundColor: colors.primary,
  },
  buttonOrange: {
    backgroundColor: colors.orange,
  },
  buttonValue: {
    fontSize: 18,
    fontWeight: "600",
  },
});
