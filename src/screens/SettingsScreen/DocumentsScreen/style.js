import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  documentsItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 80,
    backgroundColor: colors.white,
    marginBottom: 1,
  },
  documentsItemLeft: {
    flexBasis: "50%",
    paddingLeft: 20,
  },
  documentName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.darkGrey,
  },
  documentsId: {
    color: colors.grey,
    fontSize: 14,
    marginTop: 4,
  },
  documentsItemRight: {
    flexBasis: "50%",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  documentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  documentAdd: {
    width: 150,
    height: 70,
    position: "absolute",
    bottom: 40,
    right: 20,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    paddingVertical: 11,
    fontSize: 140,
    fontWeight: "600",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
