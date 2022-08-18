import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  settingsItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 80,
    backgroundColor: colors.white,
    marginBottom: 1,
  },
  settingsItemLeft: {
    flexBasis: "20%",
    paddingLeft: 20,
  },
  itemIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsItemCenter: {
    flexBasis: "70%",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.darkGrey,
  },
  settingsItemRight: {
    flexBasis: "10%",
    alignItems: "flex-end",
    paddingRight: 20,
  },
});
