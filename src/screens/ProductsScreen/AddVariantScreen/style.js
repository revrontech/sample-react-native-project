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
  formGroup: {
    marginBottom: 16,
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
  switchContainers: {
    justifyContent: "space-between",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
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
