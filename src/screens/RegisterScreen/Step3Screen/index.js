import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Switch,
} from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import { Button } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import {
  RichTextEditor,
  RichTextViewer,
  ActionMap,
} from "@siposdani87/expo-rich-text-editor";
import colors from "../../../config/colors";
import styles from "./style";

const htmlStr =
  "<p><i><u>Underline italic text</u></i> <b>bold word</b> normal words</p>";

const ProfileStep3Screen = ({ navigation }) => {
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

  const [selected, setSelected] = useState([]);

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

  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
              <Text style={styles.ratingsHeader2}>Step 3</Text>
            </View>
            {/* Categories */}
            <View style={styles.formGroup}>
              <Text style={styles.dropdownLabel}>Store Categories</Text>
              <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                search
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select categories"
                searchPlaceholder="Search..."
                value={selected}
                onChange={(item) => {
                  setSelected(item);
                }}
                selectedStyle={styles.selectedStyle}
              />
            </View>
            {/* Editor */}
            <Text style={styles.inputLabel}>Description (128 characters)</Text>
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

            {/* Store Status */}
            <View style={styles.statusContainer}>
              <View style={styles.statusLabel}>
                <Text style={styles.inputLabel}>Store Status</Text>
                <Text style={styles.statusLabel}>Active/Inactive</Text>
              </View>
              <View style={styles.statusSwitch}>
                <Switch
                  trackColor={{ false: colors.grey, true: colors.primary }}
                  thumbColor={isEnabled ? colors.white : colors.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            <View style={styles.footerButtons}>
              <View style={styles.footerButtonsLeft}>
                <Button
                  title="Previous Step"
                  containerStyle={[styles.buttonContainer, styles.buttonOrange]}
                  buttonStyle={[styles.buttonStyles, styles.buttonOrange]}
                  titleStyle={styles.buttonValue}
                  onPress={() => navigation.navigate("step2")}
                />
              </View>
              <View style={styles.footerButtonsRight}>
                <Button
                  title="Save"
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.buttonStyles}
                  titleStyle={styles.buttonValue}
                  onPress={() => navigation.navigate("Settings")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileStep3Screen;
