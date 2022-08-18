import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  tabs: {
    flexBasis: "33.33%",
    justifyContent: "center",
    height: 50,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
  tabContent: {
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "center",
  },
  tabActive: {
    color: colors.primary,
    borderBottomWidth: 2,
    borderColor: colors.primary,
  },
  orderCard: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 20,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  orderCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderId: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.grey,
    marginBottom: 5,
  },
  orderStatus: {
    backgroundColor: colors.darkBlue,
    color: colors.white,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 5,
    overflow: "hidden",
  },
  orderDate: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.grey,
  },
  itemDetails: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: "800",
    marginVertical: 8,
  },
  seperator: {
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionContainer: {
    flexDirection: "row",
  },
  actionContainerLeft: {
    flexBasis: "50%",
  },
  actionContainerRight: {
    flexBasis: "50%",
  },
  buttonContainer: {
    width: "90%",
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonStyles: {
    backgroundColor: colors.red,
    borderRadius: 20,
    paddingVertical: 5,
    width: "100%",
  },
  approveButton: {
    backgroundColor: colors.green,
  },
  buttonValue: {
    fontSize: 16,
  },
});
