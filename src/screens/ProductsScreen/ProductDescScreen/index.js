import { Button } from "@rneui/base";
import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../../config/colors";
import styles from "./style";

const ProductDescScreen = ({ navigation, route }) => {
  const product = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.screen}>
          <View style={styles.productHeader}>
            <TouchableOpacity
              style={styles.productRatings}
              onPress={() => navigation.navigate("productRatings")}
            >
              <Text style={styles.productRatingValue}>3.0</Text>
              <View style={styles.ratingsStar}>
                <Icon name="star" size={20} color={colors.orange} />
              </View>
              <Text style={styles.productRatingUsers}>(300 Reviews)</Text>
            </TouchableOpacity>
            <View
              style={[
                styles.productStatus,
                {
                  backgroundColor: product.status
                    ? "rgba(245, 42, 42,0.2)"
                    : "rgba(0,0,0,0.2) ",
                },
              ]}
            >
              <Icon
                name="check-circle"
                size={18}
                color={product.status ? colors.green : colors.dark}
              />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={product.img} style={styles.productImage} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.productCategory}>
              <Text style={styles.productCategoryValue}>Grocery</Text>
            </View>
            <View style={styles.productNameAmount}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.productPriceContainer}>
                <Text style={styles.productPrice}>₹{product.price}</Text>
              </View>
            </View>
            <View style={styles.productDescContainer}>
              <Text style={styles.productDescLabel}>Description</Text>
              <Text style={styles.productDesc}>{product.description}</Text>

              <View style={styles.productVarients}>
                <View style={styles.borderBtn}>
                  <Text style={styles.borderBtnText}>1PK</Text>
                </View>
                <View style={styles.borderBtn}>
                  <Text style={styles.borderBtnText}>10PK</Text>
                </View>
              </View>

              <Button
                title="Edit Product"
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyles}
                titleStyle={styles.buttonValue}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDescScreen;
