import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Button } from "@rneui/themed";
import colors from "../../../config/colors";
import styles from "./style";

const AddCategoryScreen = ({ navigation }) => {
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
            <Text style={styles.dropdownLabel}>Parent Category</Text>
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
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Category Name</Text>
            <TextInput style={styles.input} value={Number} />
            <Text style={styles.inputError}>Status</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.dropdownLabel}>Status</Text>
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
          <Button
            title="Create Category"
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyles}
            titleStyle={styles.buttonValue}
            onPress={() => navigation.navigate("productCategories")}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddCategoryScreen;
