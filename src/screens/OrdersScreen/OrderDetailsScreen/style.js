import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  orderCard: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 10,
  },
  orderCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderId: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.grey,
    marginBottom: 10,
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
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemDetailsContainer: {
    flexDirection: "row",

    alignItems: "center",
  },
  productImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.grey,
    resizeMode: "cover",
  },
  itemDetails: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 10,
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: "800",
    marginVertical: 8,
    alignSelf: "flex-end",
  },
  orderExtras: {
    fontSize: 16,
    color: colors.grey,
    fontWeight: "600",
    marginVertical: 2,
    alignSelf: "flex-end",
  },
  seperator: {
    marginVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
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
    paddingVertical: 10,
    width: "100%",
  },
  approveButton: {
    backgroundColor: colors.green,
  },
  buttonValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  titleText: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.grey,
  },
  space15: {
    height: 15,
  },
});
