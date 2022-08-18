import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Button } from "@rneui/themed";
import colors from "../../../config/colors";
import styles from "./style";

const DocumentsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        {/* Item */}
        <TouchableOpacity
          style={styles.documentsItem}
          onPress={() => navigation.navigate("viewDocument")}
        >
          <View style={styles.documentsItemLeft}>
            <Text style={styles.documentName}>Aadhar Card</Text>
            <Text style={styles.documentsId}>2232 2323 2322</Text>
          </View>
          <View style={styles.documentsItemRight}>
            <Image
              style={styles.documentImage}
              source={require("../../../assets/logo.png")}
            />
          </View>
        </TouchableOpacity>

        {/* Item */}
        <TouchableOpacity style={styles.documentsItem}>
          <View style={styles.documentsItemLeft}>
            <Text style={styles.documentName}>Pan Card</Text>
            <Text style={styles.documentsId}>CFKSN2234F</Text>
          </View>
          <View style={styles.documentsItemRight}>
            <Image
              style={styles.documentImage}
              source={require("../../../assets/user.jpg")}
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* Add Documents */}
      <Button
        title="Add Document"
        buttonStyle={styles.buttonContainer}
        containerStyle={styles.documentAdd}
        titleStyle={styles.buttonText}
        onPress={() => navigation.navigate("addDocument")}
      />
    </SafeAreaView>
  );
};

export default DocumentsScreen;
