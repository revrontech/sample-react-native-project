import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../config/colors";
import products from "../../config/products";
import styles from "./style";

const width = Dimensions.get("window").width / 2 - 16;

const ProductsScreen = ({ navigation }) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  // Store Category
  const StoreCategory = () => {
    return (
      <View style={styles.storeCategoryContainer}>
        <ScrollView horizontal={true}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.storeCategoryImageContainer}>
              <Image
                source={require("../../assets/product1.jpeg")}
                style={[styles.storeCategoryImageActive]}
              />
              <Text style={[styles.storeCategoryText]}>Grocery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.storeCategoryImageContainer}>
              <Image
                source={require("../../assets/product2.jpeg")}
                style={[styles.storeCategoryImage]}
              />
              <Text style={[styles.storeCategoryText]}>Butcher</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.storeCategoryImageContainer}>
              <Image
                source={require("../../assets/product3.jpeg")}
                style={[styles.storeCategoryImage]}
              />
              <Text style={[styles.storeCategoryText]}>Bakery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.storeCategoryImageContainer}>
              <Image
                source={require("../../assets/product4.jpeg")}
                style={[styles.storeCategoryImage]}
              />
              <Text style={[styles.storeCategoryText]}>Shoes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.storeCategoryImageContainer}>
              <Image
                source={require("../../assets/product5.jpeg")}
                style={[styles.storeCategoryImage]}
              />
              <Text style={[styles.storeCategoryText]}>Sanitary</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.storeCategoryImageContainer}>
              <Image
                source={require("../../assets/product6.jpeg")}
                style={[styles.storeCategoryImage]}
              />
              <Text style={[styles.storeCategoryText]}>Restaurant</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.storeCategoryImageContainer}>
              <Image
                source={require("../../assets/product1.jpeg")}
                style={[styles.storeCategoryImage]}
              />
              <Text style={[styles.storeCategoryText]}>Grocery</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  const categories = [
    "POPULAR",
    "ORGANIC",
    "INDOORS",
    "SYNTHETIC",
    "POPULAR",
    "ORGANIC",
    "INDOORS",
    "SYNTHETIC",
  ];

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}
            >
              <Text
                style={[
                  styles.categoryText,
                  catergoryIndex === index && styles.categoryTextSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const Card = ({ product }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("description", product)}
      >
        <View style={styles.card}>
          <View style={styles.statusContainer}>
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
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.productName}
          >
            {product.name}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>₹{product.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.header}>
            <View>
              <Text style={styles.textSubheader}>Welcome to</Text>
              <Text style={styles.textHeader}>Royal Bakry</Text>
            </View>
          </View>
          <StoreCategory />

          <View style={styles.searchContainer}>
            <Icon name="search" size={25} style={styles.searchIcon} />
            <TextInput placeholder="Search Product" style={styles.input} />
          </View>

          <CategoryList />

          <FlatList
            columnWrapperStyle={styles.productColumns}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
            numColumns={2}
            data={products}
            renderItem={({ item }) => {
              return <Card product={item} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;
