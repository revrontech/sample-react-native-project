import React from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../../../config/colors";
import styles from "./style";

const ViewDocumentScreen = ({ navigation }) => {
  const images = [
    {
      // Simplest usage.
      // url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",

      // width: number
      // height: number
      // Optional, if you know the image size, you can set the optimization performance

      // You can pass props to <Image />.
      props: {
        source: require("../../../../assets/user.jpg"),
      },
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Icon
            name="close"
            size={100}
            color={colors.white}
            style={styles.closeModal}
          />
          <Modal visible={true} transparent={true}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ visibleModal: false });
              }}
            ></TouchableOpacity>
            <Icon
              name="close"
              size={40}
              color={colors.white}
              style={styles.closeModal}
              onPress={() => navigation.navigate("documents")}
            />
            <ImageViewer imageUrls={images} />
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewDocumentScreen;
