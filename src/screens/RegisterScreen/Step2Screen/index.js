import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Button } from "@rneui/themed";
import colors from "../../../config/colors";
import styles from "./style";

const ProfileStep2Screen = ({ navigation }) => {
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
        <ScrollView>
          <View style={styles.screen}>
            <View style={styles.headerContainer}>
              <Text style={styles.ratingsHeader1}>Store Details</Text>
              <Text style={styles.ratingsHeader2}>Step 2</Text>
            </View>
            {/* Country */}
            <View style={styles.formGroup}>
              <Text style={styles.dropdownLabel}>Country</Text>
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
            {/* State */}
            <View style={styles.formGroup}>
              <Text style={styles.dropdownLabel}>State</Text>
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
            {/* City */}
            <View style={styles.formGroup}>
              <Text style={styles.dropdownLabel}>City</Text>
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
            {/* Area */}
            <View style={styles.formGroup}>
              <Text style={styles.dropdownLabel}>Area</Text>
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
              <Text style={styles.inputError}>
                Please enter a correct value
              </Text>
            </View>
            {/* Address */}
            <TouchableOpacity
              style={styles.formGroup}
              onPress={() => navigation.navigate("mapSearch")}
            >
              <Text style={styles.inputLabel}>Address</Text>
              <View style={styles.searchAddressContainer}>
                <Text style={styles.searchAddress}>
                  Type and Search your address
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.footerButtons}>
              <View style={styles.footerButtonsLeft}>
                <Button
                  title="Previous Step"
                  containerStyle={[styles.buttonContainer, styles.buttonOrange]}
                  buttonStyle={[styles.buttonStyles, styles.buttonOrange]}
                  titleStyle={styles.buttonValue}
                  onPress={() => navigation.navigate("step1")}
                />
              </View>
              <View style={styles.footerButtonsRight}>
                <Button
                  title="Next Step"
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.buttonStyles}
                  titleStyle={styles.buttonValue}
                  onPress={() => navigation.navigate("step3")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileStep2Screen;
