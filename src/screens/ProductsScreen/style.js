import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width / 2 - 16;

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  screen: {
    paddingHorizontal: 10,
  },
  textSubheader: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textHeader: {
    fontSize: 38,
    color: colors.green,
    fontWeight: "bold",
  },
  searchIcon: {
    marginHorizontal: 10,
    color: colors.grey,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
    paddingRight: 15,
  },
  categoryTextSelected: {
    color: colors.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: colors.green,
  },
  productColumns: {
    justifyContent: "space-between",
  },
  productsContainer: {
    marginTop: 10,
    paddingBottom: 50,
  },
  card: {
    height: 225,
    backgroundColor: colors.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 8,
    padding: 15,
  },
  statusContainer: {
    alignItems: "flex-end",
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: colors.dark,
  },
  storeCategoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  storeCategoryImageContainer: {
    alignContent: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  productStatus: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  storeCategoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: colors.light,
    borderWidth: 2,
    padding: 20,
    backgroundColor: colors.light,
    alignSelf: "center",
  },
  imageContainer: {
    height: 100,
    alignItems: "center",
  },
  productImage: {
    flex: 1,
    resizeMode: "contain",
  },
  productName: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  productPrice: {
    fontSize: 19,
    fontWeight: "bold",
  },
  storeCategoryImageActive: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: colors.green,
    borderWidth: 2,
    padding: 10,
    backgroundColor: colors.light,
    resizeMode: "contain",
    alignSelf: "center",
  },
  storeCategoryText: {
    alignSelf: "center",
    marginTop: 6,
  },
});
