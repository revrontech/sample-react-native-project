import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
  ratingsHeader: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
  },
  overallRatingsContainer: {
    justifyContent: "center",
  },
  ratings: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
    alignSelf: "center",
  },
  ratingsStar: {
    flexDirection: "row",
    alignItems: "center",
  },
  overallRatingUsers: {
    fontSize: 13,
    color: colors.grey,
    alignSelf: "center",
    marginTop: 5,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 10,
  },
  ratingCard: {
    width: "100%",
    backgroundColor: colors.light,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 12,
    borderRadius: 8,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  ratingCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userRatings: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  userRatingsStar: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  userRatingText: {
    marginTop: 10,
  },
});
