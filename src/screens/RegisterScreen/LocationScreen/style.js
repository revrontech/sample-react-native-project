import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  formGroup: {
    position: "absolute",
    top: 50,
    marginBottom: 16,
    backgroundColor: colors.white,
    width: "90%",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  input: {
    paddingHorizontal: 0,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: "600",
  },
});
