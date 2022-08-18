import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "@rneui/themed";
import styles from "./style";

const OrdersScreen = ({ navigation }) => {
  // Order Cards
  const StoreOrders = () => {
    return (
      <TouchableOpacity
        style={styles.orderCard}
        onPress={() => navigation.navigate("orderDetails")}
      >
        <View style={styles.orderCardHeader}>
          <View>
            <Text style={styles.orderId}>ID: 23864009118</Text>
            <Text style={styles.orderStatus}>Waiting Approval</Text>
          </View>
          <View>
            <Text style={styles.orderDate}>Jul 26 | 6:30 PM</Text>
          </View>
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.itemsContainer}>
          <View>
            <Text style={styles.itemDetails}>1 x Maggi 5PC</Text>
            <Text style={styles.itemDetails}>2 x Ghee 1 KG</Text>
          </View>
          <View style={styles.itemPrice}>
            <Text style={styles.itemDetails}>₹100</Text>
            <Text style={styles.itemDetails}>₹1100 </Text>
          </View>
        </View>
        <View style={styles.seperator}></View>
        <Text style={styles.orderAmount}>Total bill: ₹1200</Text>
        <View style={styles.actionContainer}>
          <View style={styles.actionContainerLeft}>
            <Button
              title="Reject"
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyles}
              titleStyle={styles.buttonValue}
            />
          </View>
          <View style={styles.actionContainerRight}>
            <Button
              title="Approve"
              containerStyle={styles.buttonContainer}
              buttonStyle={[styles.buttonStyles, styles.approveButton]}
              titleStyle={styles.buttonValue}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // Tabs
  const OrderTabs = () => {
    return (
      <View style={styles.tabsContainer}>
        <View style={[styles.tabs, styles.tabActive]}>
          <Text style={[styles.tabContent, styles.tabActive]}>New Orders</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={[styles.tabContent]}>In Process</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={[styles.tabContent]}>Completed</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Tabs */}
      <OrderTabs />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.screen}>
          {/* Order */}
          <StoreOrders />
          <StoreOrders />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;
