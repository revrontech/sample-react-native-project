import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingHorizontal: 15,
    paddingVertical: 17,
    fontSize: 17,
    fontWeight: "bold",
    borderBottomWidth: 2,
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 17,
    fontSize: 18,
    backgroundColor: colors.white,
    marginBottom: 2,
  },

  parentCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 17,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 17,
    backgroundColor: colors.white,
    marginBottom: 1,
  },
  parentCategoryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryText: {
    fontSize: 18,
  },

  categoryAdd: {
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
