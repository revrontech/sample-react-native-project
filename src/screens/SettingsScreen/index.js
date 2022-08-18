import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../config/colors";
import styles from "./style";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        {/* Item */}
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => navigation.navigate("step1")}
        >
          <View style={styles.settingsItemLeft}>
            <View style={styles.itemIcon}>
              <Icon name="storefront" size={25} color={colors.grey} />
            </View>
          </View>
          <View style={styles.settingsItemCenter}>
            <Text style={styles.itemName}>Store Info</Text>
          </View>
          <View style={styles.settingsItemRight}>
            <Icon name="arrow-forward-ios" size={20} color={colors.grey} />
          </View>
        </TouchableOpacity>

        {/* Item */}
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => navigation.navigate("documents")}
        >
          <View style={styles.settingsItemLeft}>
            <View style={styles.itemIcon}>
              <Icon name="add-task" size={25} color={colors.grey} />
            </View>
          </View>
          <View style={styles.settingsItemCenter}>
            <Text style={styles.itemName}>Store Documents</Text>
          </View>
          <View style={styles.settingsItemRight}>
            <Icon name="arrow-forward-ios" size={20} color={colors.grey} />
          </View>
        </TouchableOpacity>

        {/* Item */}
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => navigation.navigate("productCategories")}
        >
          <View style={styles.settingsItemLeft}>
            <View style={styles.itemIcon}>
              <Icon name="toc" size={25} color={colors.grey} />
            </View>
          </View>
          <View style={styles.settingsItemCenter}>
            <Text style={styles.itemName}>Product Categories</Text>
          </View>
          <View style={styles.settingsItemRight}>
            <Icon name="arrow-forward-ios" size={20} color={colors.grey} />
          </View>
        </TouchableOpacity>

        {/* Item */}
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => navigation.navigate("otp")}
        >
          <View style={styles.settingsItemLeft}>
            <View style={styles.itemIcon}>
              <Icon name="verified-user" size={25} color={colors.grey} />
            </View>
          </View>
          <View style={styles.settingsItemCenter}>
            <Text style={styles.itemName}>Change Password</Text>
          </View>
          <View style={styles.settingsItemRight}>
            <Icon name="arrow-forward-ios" size={20} color={colors.grey} />
          </View>
        </TouchableOpacity>

        {/* Item */}
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => navigation.navigate("login")}
        >
          <View style={styles.settingsItemLeft}>
            <View style={styles.itemIcon}>
              <Icon name="exit-to-app" size={25} color={colors.grey} />
            </View>
          </View>
          <View style={styles.settingsItemCenter}>
            <Text style={styles.itemName}>Logout</Text>
          </View>
          <View style={styles.settingsItemRight}>
            <Icon name="arrow-forward-ios" size={20} color={colors.grey} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
