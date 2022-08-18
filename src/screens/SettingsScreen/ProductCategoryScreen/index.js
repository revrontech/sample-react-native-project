import { Button } from "@rneui/themed";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./style";

const ProductCategoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.screen}>
          <View style={styles.parentCategory}>
            <Text style={styles.parentCategoryText}>Parent category</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("addCategories")}
          >
            <View style={styles.category}>
              <Text style={styles.categoryText}>Category 1</Text>
              <Icon name="edit" size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("addCategories")}
          >
            <View style={styles.category}>
              <Text style={styles.categoryText}>Category 1</Text>
              <Icon name="edit" size={20} />
            </View>
          </TouchableOpacity>
          <View style={styles.parentCategory}>
            <Text style={styles.parentCategoryText}>Parent category</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("addCategories")}
          >
            <View style={styles.category}>
              <Text style={styles.categoryText}>Category 1</Text>
              <Icon name="edit" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Button
        title="Add Category"
        buttonStyle={styles.buttonContainer}
        containerStyle={styles.categoryAdd}
        titleStyle={styles.buttonText}
        onPress={() => navigation.navigate("addCategories")}
      />
    </SafeAreaView>
  );
};

export default ProductCategoryScreen;
