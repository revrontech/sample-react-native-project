import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  screen: {
    marginTop: 40,
    paddingHorizontal: 20,
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
  variationsContainer: {
    flexDirection: "row",
  },
  variationQuantity: {
    flexBasis: "40%",
    marginRight: 5,
  },
  variationPrice: {
    flexBasis: "40%",
  },
  addVariation: {
    flexBasis: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  addVariationIcon: {
    color: colors.primary,
  },
  removeVariationIcon: {
    color: colors.red,
  },
  variationInput: {
    width: "90%",
  },
  statusContainer: {
    flexDirection: "row",
    height: 80,
  },
  statusLabel: {
    flexBasis: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  statusSwitch: {
    flexBasis: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
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
  buttonValue: {
    fontSize: 18,
    fontWeight: "600",
  },
});
