import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Switch,
  KeyboardAvoidingView,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Button } from "@rneui/themed";
import colors from "../../../config/colors";
import styles from "./style";

const AddVariantScreen = () => {
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
  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={styles.screen}>
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
              <View style={styles.actionContainer}>
                <View style={styles.actionContainerLeft}>
                  <Button
                    title="Delete Variant"
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddVariantScreen;
