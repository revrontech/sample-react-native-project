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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
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
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  viewer: {
    // borderColor: "green",
    // borderWidth: 1,
    // padding: 5,
  },
  editor: {
    padding: 5,
    fontSize: 18,
    backgroundColor: colors.light,
  },
  toolbar: {
    paddingVertical: 5,
  },
  link: {
    color: colors.primary,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
  },
  statusLabel: {
    color: colors.grey,
  },
});
