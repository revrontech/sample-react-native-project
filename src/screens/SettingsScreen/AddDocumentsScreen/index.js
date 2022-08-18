import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "react-native-element-dropdown";
import { Button } from "@rneui/themed";
import colors from "../../../config/colors";
import styles from "./style";

const AddDocumentsScreen = ({ navigation }) => {
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

  const [value, setValue] = useState(null);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.screen}>
          <View style={styles.formGroup}>
            <Text style={styles.dropdownLabel}>Select Document Type</Text>
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

          <Text style={styles.dropdownLabel}>Select Document</Text>
          <View style={styles.imageContainer}>
            <View style={styles.imageDisplay}>
              {pickedImagePath !== "" && (
                <Image source={{ uri: pickedImagePath }} style={styles.image} />
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

          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Document ID</Text>
            <TextInput
              style={styles.input}
              value={Number}
              placeholder="E.g. Bread"
            />
            <Text style={styles.inputError}>Please enter a correct value</Text>
          </View>

          <Button
            title="Upload Document"
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyles}
            titleStyle={styles.buttonValue}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddDocumentsScreen;
