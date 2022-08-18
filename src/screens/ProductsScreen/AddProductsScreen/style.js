import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  safeContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  screen: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageDisplay: {
    paddingVertical: 20,
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
    fontSize: 17,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
    // alignSelf: "center",
  },
  switchContainers: {
    justifyContent: "space-between",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
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
  addVariantInfo: {
    flexDirection: "row",
    marginTop: 15,
  },
  addVariantInfoLeft: {
    flexBasis: "50%",
    paddingRight: 5,
  },
  addVariantInfoRight: {
    flexBasis: "50%",
    paddingLeft: 5,
  },
  variantListContainer: {
    marginTop: 15,
    borderTopWidth: 0.5,
    borderColor: colors.grey,
  },
  variantList: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
    backgroundColor: colors.light,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  variantListName: {
    fontSize: 17,
    fontWeight: "600",
  },
  primaryColor: {
    color: colors.primary,
  },
  variantListPrice: {
    fontSize: 17,
    fontWeight: "600",
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  actionContainerLeft: {
    flexBasis: "50%",
  },
  actionContainerRight: {
    flexBasis: "50%",
  },
  buttonContainer: {
    width: "95%",
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonStyles: {
    backgroundColor: colors.red,
    borderRadius: 25,
    paddingVertical: 15,
    width: "100%",
  },
  approveButton: {
    backgroundColor: colors.primary,
  },
  buttonValue: {
    fontSize: 17,
    fontWeight: "700",
  },
});
