import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  TouchableOpacity,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "react-native-element-dropdown";
import { Button } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  RichTextEditor,
  RichTextViewer,
  ActionMap,
} from "@siposdani87/expo-rich-text-editor";
import colors from "../../../config/colors";
import styles from "./style";

const htmlStr =
  "<p><i><u>Underline italic text</u></i> <b>bold word</b> normal words</p>";

const AddProductsScreen = ({ navigation }) => {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState("");

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  // Dropdown
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  // const [value, setValue] = useState(null);

  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Text Editor
  const [value, setValue] = useState("");

  const getColor = (selected: boolean): string => {
    return selected ? "red" : "black";
  };

  const getActionMap = (): ActionMap => {
    const size = 32;

    return {
      undo: ({ selected }) => (
        <MaterialIcons name="undo" size={size} color={getColor(selected)} />
      ),
      redo: ({ selected }) => (
        <MaterialIcons name="redo" size={size} color={getColor(selected)} />
      ),
      bold: ({ selected }) => (
        <MaterialIcons
          name="format-bold"
          size={size}
          color={getColor(selected)}
        />
      ),
      italic: ({ selected }) => (
        <MaterialIcons
          name="format-italic"
          size={size}
          color={getColor(selected)}
        />
      ),
      underline: ({ selected }) => (
        <MaterialIcons
          name="format-underlined"
          size={size}
          color={getColor(selected)}
        />
      ),
      unorderedList: ({ selected }) => (
        <MaterialIcons
          name="format-list-bulleted"
          size={size}
          color={getColor(selected)}
        />
      ),
      orderedList: ({ selected }) => (
        <MaterialIcons
          name="format-list-numbered"
          size={size}
          color={getColor(selected)}
        />
      ),
    };
  };

  const onValueChange = (v: string): void => {
    console.log("onValueChange", v);
    setValue(v);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={styles.screen}>
            {/* Store Category */}
            <View style={styles.formGroup}>
              <Text style={styles.dropdownLabel}>Select Store Category</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />
            </View>
            {/* Product Category */}
            <View style={styles.formGroup}>
              <Text style={styles.dropdownLabel}>Select Product Category</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />
            </View>
            {/* Product Name */}
            <View style={styles.formGroup}>
              <Text style={styles.inputLabel}>Product Name</Text>
              <TextInput
                style={styles.input}
                value={Number}
                placeholder="E.g. Bread"
              />
              <Text style={styles.inputError}>
                Please enter a correct value
              </Text>
            </View>
            <View style={styles.switchContainers}>
              {/* Product Status */}
              <View style={styles.statusContainer}>
                <Text style={styles.dropdownLabel}>Product Status</Text>
                <Switch
                  trackColor={{ false: colors.grey, true: colors.primary }}
                  thumbColor={isEnabled ? colors.white : colors.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            {/* Product Description */}
            <View style={styles.formGroup}>
              <Text style={styles.inputLabel}>Product Description</Text>
              <RichTextEditor
                minHeight={150}
                value={value}
                selectionColor="green"
                actionMap={getActionMap()}
                onValueChange={onValueChange}
                toolbarStyle={styles.toolbar}
                editorStyle={styles.editor}
              />

              {/* <RichTextViewer
              value={htmlStr}
              editorStyle={styles.viewer}
              linkStyle={styles.link}
            /> */}
            </View>
            {/* Adding Variants */}
            <Text style={styles.seperatorHeading}>Add Default Variant</Text>
            <View style={styles.variantContainer}>
              {/* Variant Image */}
              <View style={styles.imageContainer}>
                <View style={styles.imageDisplay}>
                  {pickedImagePath !== "" && (
                    <Image
                      source={{ uri: pickedImagePath }}
                      style={styles.image}
                    />
                  )}
                </View>
                <View style={styles.buttonActions}>
                  <Button
                    title="Select an image"
                    type="clear"
                    onPress={showImagePicker}
                  />
                  <Button
                    title="Select an image"
                    type="clear"
                    onPress={openCamera}
                  />
                </View>
              </View>
              {/* Variant Info */}
              <View style={styles.addVariantInfo}>
                <View style={styles.addVariantInfoLeft}>
                  {/* Variant Name */}
                  <View style={styles.formGroup}>
                    <Text style={styles.inputLabel}>Variant Name</Text>
                    <TextInput
                      style={styles.input}
                      value={Number}
                      placeholder="E.g. 500Gm"
                    />
                  </View>
                  {/* Stock */}
                  <View style={styles.formGroup}>
                    <Text style={styles.inputLabel}>Stock</Text>
                    <TextInput
                      style={styles.input}
                      value={Number}
                      placeholder="E.g. 100"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.addVariantInfoRight}>
                  {/* Discount*/}
                  <View style={styles.formGroup}>
                    <Text style={styles.inputLabel}>Discount</Text>
                    <TextInput
                      style={styles.input}
                      value={Number}
                      placeholder="E.g. $20"
                      keyboardType="numeric"
                    />
                  </View>
                  {/* Price */}
                  <View style={styles.formGroup}>
                    <Text style={styles.inputLabel}>Price</Text>
                    <TextInput
                      style={styles.input}
                      value={Number}
                      placeholder="E.g. $20"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>
              {/* Variant Status */}
              <View style={styles.statusContainer}>
                <Text style={styles.dropdownLabel}>Variant Status</Text>
                <Switch
                  trackColor={{ false: colors.grey, true: colors.primary }}
                  thumbColor={isEnabled ? colors.white : colors.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            <Text style={styles.seperatorHeading}>Additional Variants</Text>
            <View style={styles.variantListContainer}>
              <TouchableOpacity
                style={styles.variantList}
                onPress={() => navigation.navigate("addVariant")}
              >
                <Text style={styles.variantListName}>1kg</Text>
                <Text style={styles.variantListPrice}>$100</Text>
                <Icon name="edit" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.variantList}
                onPress={() => navigation.navigate("addVariant")}
              >
                <Text style={[styles.variantListName, styles.primaryColor]}>
                  Add more Variants
                </Text>
                <Icon name="add" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
            {/* Buttons */}
            <View style={styles.actionContainer}>
              <View style={styles.actionContainerLeft}>
                <Button
                  title="Delete Product"
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.buttonStyles}
                  titleStyle={styles.buttonValue}
                />
              </View>
              <View style={styles.actionContainerRight}>
                <Button
                  title="Update/Save"
                  containerStyle={styles.buttonContainer}
                  buttonStyle={[styles.buttonStyles, styles.approveButton]}
                  titleStyle={styles.buttonValue}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddProductsScreen;
