import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  closeModal: {
    position: "absolute",
    top: 60,
    right: 15,
    zIndex: 2,
    elevation: 2,
  },
});
