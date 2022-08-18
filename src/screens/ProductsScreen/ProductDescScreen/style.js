import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingBottom: 100,
    backgroundColor: colors.white,
  },

  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productRatings: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  ratingsStar: {
    flexDirection: "row",
    alignItems: "center",
  },
  productRatingValue: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 5,
    alignSelf: "center",
  },
  productRatingUsers: {
    marginLeft: 5,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
  productStatus: {
    width: 30,
    height: 30,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: colors.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingVertical: 30,
  },
  productCategory: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  productCategoryValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.green,
  },
  productNameAmount: {
    marginLeft: 20,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
    width: 200,
  },
  productPriceContainer: {
    backgroundColor: colors.green,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  productPrice: {
    marginLeft: 20,
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  productDescContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  productDescLabel: {
    fontSize: 17,
    fontWeight: "bold",
  },
  productDesc: {
    color: colors.grey,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
  productVarients: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
    marginRight: 10,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 16 },

  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 35,
    paddingVertical: 5,
    fontWeight: "600",
    marginTop: 40,
  },
  buttonStyles: {
    width: "100%",
    backgroundColor: colors.primary,
  },
  buttonValue: {
    fontSize: 18,
    fontWeight: "600",
  },
});
