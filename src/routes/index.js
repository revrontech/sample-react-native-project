import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import OtpScreen from "../screens/OtpScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDescScreen from "../screens/ProductsScreen/ProductDescScreen";
import DocumentsScreen from "../screens/SettingsScreen/DocumentsScreen";
import AddDocumentsScreen from "../screens/SettingsScreen/AddDocumentsScreen";
import ViewDocumentScreen from "../screens/SettingsScreen/DocumentsScreen/ViewDocumentsScreen";
import ProductCategoryScreen from "../screens/SettingsScreen/ProductCategoryScreen";
import AddCategoryScreen from "../screens/SettingsScreen/AddCategoryScreen";
import ProductRatingsScreen from "../screens/ProductsScreen/ProductRatingsScreen";
import OrderDetailsScreen from "../screens/OrdersScreen/OrderDetailsScreen";
import ProfileStep1Screen from "../screens/RegisterScreen/Step1Screen";
import ProfileStep2Screen from "../screens/RegisterScreen/Step2Screen";
import AddressSearchScreen from "../screens/RegisterScreen/LocationScreen";
import ProfileStep3Screen from "../screens/RegisterScreen/Step3Screen";
import AddVariantScreen from "../screens/ProductsScreen/AddVariantScreen";

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={OtpScreen}
          options={{ title: "Verify Details" }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="description"
          component={ProductDescScreen}
          options={{ title: "Product Description" }}
        />
        <Stack.Screen
          name="documents"
          component={DocumentsScreen}
          options={{ title: "Documents" }}
        />
        <Stack.Screen
          name="addDocument"
          component={AddDocumentsScreen}
          options={{ title: "Add Document" }}
        />
        <Stack.Screen
          name="viewDocument"
          component={ViewDocumentScreen}
          options={{ title: "View Document" }}
        />
        <Stack.Screen
          name="productCategories"
          component={ProductCategoryScreen}
          options={{ title: "Product Categories" }}
        />
        <Stack.Screen
          name="addCategories"
          component={AddCategoryScreen}
          options={{ title: "Add Product Category" }}
        />
        <Stack.Screen
          name="productRatings"
          component={ProductRatingsScreen}
          options={{ title: "Product Ratings" }}
        />
        <Stack.Screen
          name="orderDetails"
          component={OrderDetailsScreen}
          options={{ title: "Order Details" }}
        />
        <Stack.Screen
          name="step1"
          component={ProfileStep1Screen}
          options={{ title: "Store Information" }}
        />
        <Stack.Screen
          name="step2"
          component={ProfileStep2Screen}
          options={{ title: "Store Information" }}
        />
        <Stack.Screen
          name="mapSearch"
          component={AddressSearchScreen}
          options={{ title: "Location" }}
        />
        <Stack.Screen
          name="step3"
          component={ProfileStep3Screen}
          options={{ title: "Store Information" }}
        />
        <Stack.Screen
          name="addVariant"
          component={AddVariantScreen}
          options={{ title: "Add Product Variant" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}