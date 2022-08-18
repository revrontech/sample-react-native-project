import React from "react";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../../config/colors";
import styles from "./style";

const ProductRatingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.ratingsHeader}>
          <View>
            <Image
              source={require("../../../assets/product1.jpeg")}
              resizeMode="contain"
              style={styles.productImage}
            />
            <Text style={styles.productName}>John Does</Text>
          </View>
          <View style={styles.overallRatingsContainer}>
            <Text style={styles.ratings}>4.0</Text>
            <View style={styles.ratingsStar}>
              <Icon name="star" size={20} color={colors.orange} />
              <Icon name="star" size={20} color={colors.orange} />
              <Icon name="star" size={20} color={colors.orange} />
              <Icon name="star" size={20} color={colors.orange} />
              <Icon name="star" size={20} color={colors.grey} />
            </View>

            <Text style={styles.overallRatingUsers}>365reviews</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Card */}
          <View style={styles.ratingCard}>
            <View style={styles.ratingCardHeader}>
              <View style={styles.userDetails}>
                <Image
                  source={require("../../../assets/user.jpg")}
                  resizeMode="cover"
                  style={styles.userImage}
                />
                <Text style={styles.userName}>John Does</Text>
              </View>
              <View>
                <Text>Jul 26</Text>
              </View>
            </View>
            <View style={styles.userRatings}>
              <Text style={styles.ratings}>3.0</Text>
              <View style={styles.userRatingsStar}>
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.grey} />
                <Icon name="star" size={20} color={colors.grey} />
              </View>
            </View>
            <View>
              <Text style={styles.userRatingText}>
                Quality given in take away is always incomplete. This is what I
                get i one plate of French fries and they didn't give you time to
                check it, they are like mam please give space, we gave u all and
                bla bla. And on top they haven't shared their contact details so
                that we can contact them.
              </Text>
            </View>
          </View>

          {/* Card */}
          <View style={styles.ratingCard}>
            <View style={styles.ratingCardHeader}>
              <View style={styles.userDetails}>
                <Image
                  source={require("../../../assets/user.jpg")}
                  resizeMode="cover"
                  style={styles.userImage}
                />
                <Text style={styles.userName}>John Does</Text>
              </View>
              <View>
                <Text>Jul 26</Text>
              </View>
            </View>
            <View style={styles.userRatings}>
              <Text style={styles.ratings}>3.0</Text>
              <View style={styles.userRatingsStar}>
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.grey} />
                <Icon name="star" size={20} color={colors.grey} />
              </View>
            </View>
            <View>
              <Text style={styles.userRatingText}>
                Quality given in take away is always incomplete. This is what I
                get i one plate of French fries and they didn't give you time to
                check it, they are like mam please give space, we gave u all and
                bla bla. And on top they haven't shared their contact details so
                that we can contact them.
              </Text>
            </View>
          </View>

          {/* Card */}
          <View style={styles.ratingCard}>
            <View style={styles.ratingCardHeader}>
              <View style={styles.userDetails}>
                <Image
                  source={require("../../../assets/user.jpg")}
                  resizeMode="cover"
                  style={styles.userImage}
                />
                <Text style={styles.userName}>John Does</Text>
              </View>
              <View>
                <Text>Jul 26</Text>
              </View>
            </View>
            <View style={styles.userRatings}>
              <Text style={styles.ratings}>3.0</Text>
              <View style={styles.userRatingsStar}>
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.orange} />
                <Icon name="star" size={20} color={colors.grey} />
                <Icon name="star" size={20} color={colors.grey} />
              </View>
            </View>
            <View>
              <Text style={styles.userRatingText}>
                Quality given in take away is always incomplete. This is what I
                get i one plate of French fries and they didn't give you time to
                check it, they are like mam please give space, we gave u all and
                bla bla. And on top they haven't shared their contact details so
                that we can contact them.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductRatingsScreen;
