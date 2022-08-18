import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Button } from "@rneui/themed";
import styles from "./style";

function OrderDetailsScreen(props) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.orderCard}>
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
          {/* Item */}
          <View style={styles.itemsContainer}>
            <View style={styles.itemDetailsContainer}>
              <Image
                source={require("../../../assets/product1.jpeg")}
                resizeMode="contain"
                style={styles.productImage}
              />
              <Text style={styles.itemDetails}>1 x Maggi 5PC</Text>
            </View>
            <View style={styles.itemPrice}>
              <Text style={styles.itemDetails}>₹100</Text>
            </View>
          </View>
          {/* Item */}
          <View style={styles.itemsContainer}>
            <View style={styles.itemDetailsContainer}>
              <Image
                source={require("../../../assets/product4.jpeg")}
                resizeMode="contain"
                style={styles.productImage}
              />
              <Text style={styles.itemDetails}>2 x Ghee 1 KG</Text>
            </View>
            <View style={styles.itemPrice}>
              <Text style={styles.itemDetails}>₹1100 </Text>
            </View>
          </View>
        </View>
        <View style={styles.orderCard}>
          <Text style={styles.titleText}>Shipping Details</Text>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.address}>
            3559 Roosevelt Wilson Lane San Bernardino, CA 92405
          </Text>
          <View style={styles.space15}></View>
          <Text style={styles.titleText}>Store Details</Text>
          <Text style={styles.name}>Royal Bakers</Text>
          <Text style={styles.address}>
            3559 Red Square San Bernardino, CA 92410
          </Text>
        </View>
        <View style={styles.orderCard}>
          <Text style={styles.orderExtras}>Discounts : ₹100</Text>
          <Text style={styles.orderExtras}>Taxes : ₹50</Text>
          <Text style={styles.orderAmount}>Total amount : ₹1150</Text>
        </View>
        <View style={styles.orderCard}>
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
        </View>
      </View>
    </ScrollView>
  );
}

export default OrderDetailsScreen;
