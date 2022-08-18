import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "@rneui/themed";
import PhoneInput from "react-native-phone-number-input";
import colors from "../../../config/colors";
import styles from "./style";

const ProfileStep1Screen = ({ navigation }) => {
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

  const [value, setValue] = useState(null);

  // Mobile Number
  const [phoneNumber, SetPhoneNumber] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={styles.screen}>
            <View style={styles.headerContainer}>
              <Text style={styles.ratingsHeader1}>Store Details</Text>
              <Text style={styles.ratingsHeader2}>Step 1</Text>
            </View>
            {/* Image */}
            <Text style={styles.dropdownLabel}>Store Picture</Text>
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
            {/* Store Name */}
            <View style={styles.formGroup}>
              <Text style={styles.inputLabel}>Store Name</Text>
              <TextInput
                style={styles.input}
                value={Text}
                placeholder="Name of the Store"
              />
              <Text style={styles.inputError}>
                Please enter a correct value
              </Text>
            </View>
            {/* Number */}
            <View style={styles.formGroup}>
              <Text style={styles.inputLabel}>Contact Number</Text>
              <PhoneInput defaultValue={phoneNumber} layout="first" />
              <TouchableOpacity
                style={styles.test}
                onPress={() => {
                  Alert.alert(phoneNumber);
                }}
              ></TouchableOpacity>
            </View>
            {/* Contact Person */}
            <View style={styles.formGroup}>
              <Text style={styles.inputLabel}>Contact Person</Text>
              <TextInput
                style={styles.input}
                value={Text}
                placeholder="Contact Person"
              />
              <Text style={styles.inputError}>
                Please enter a correct value
              </Text>
            </View>
            {/* Email */}
            <View style={styles.formGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={Text}
                placeholder="a@b.com"
              />
              <Text style={styles.inputError}>
                Please enter a correct value
              </Text>
            </View>

            {/* Password */}
            <View style={styles.formGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                value={Text}
                secureTextEntry={true}
              />
              <Text style={styles.inputError}>
                Please enter a correct value
              </Text>
            </View>

            <Button
              title="Next Step"
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyles}
              titleStyle={styles.buttonValue}
              onPress={() => navigation.navigate("step2")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileStep1Screen;
