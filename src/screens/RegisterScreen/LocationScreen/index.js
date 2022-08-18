import React from "react";
import { Text, View, TextInput } from "react-native";
import MapView from "react-native-maps";
import styles from "./style";

const AddressSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={Text}
          placeholder="Search Location"
        />
      </View>
    </View>
  );
};

export default AddressSearchScreen;
