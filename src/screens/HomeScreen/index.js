import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../config/colors";
import { Icon } from "@rneui/base";
import ProductsScreen from "../ProductsScreen";
import OrdersScreen from "../OrdersScreen";
import RatingsScreen from "../RatingsScreen";
import SettingsScreen from "../SettingsScreen";
import AddProductsScreen from "../ProductsScreen/AddProductsScreen";
import styles from "./style";

const Tab = createBottomTabNavigator();

// Custom bottom navigation
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.addProductButtonContainer} onPress={onPress}>
    <View style={styles.addProductButton}>{children}</View>
  </TouchableOpacity>
);

// Screen width
const screenWidth = Dimensions.get("window").width;

const Home = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.footerTabContainer,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <View style={styles.footerTab}>
              <Icon type="antdesign" name="home" color={color} size={size} />
              <Text style={{ color: color, fontSize: 12, marginTop: 4 }}>
                Home
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: "Orders",
          headerTitle: "Store Orders",
          tabBarIcon: ({ color, size }) => (
            <View style={styles.footerTab}>
              <Icon
                type="antdesign"
                name="shoppingcart"
                color={color}
                size={size}
              />
              <Text style={{ color: color, fontSize: 12, marginTop: 4 }}>
                Orders
              </Text>
            </View>
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Add Products"
        component={AddProductsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/plus.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: colors.white,
                }}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Ratings"
        component={RatingsScreen}
        options={{
          tabBarLabel: "Ratings",
          headerTitle: "Store Ratings",
          tabBarIcon: ({ color, size }) => (
            <View style={styles.footerTab}>
              <Icon type="antdesign" name="staro" color={color} size={size} />
              <Text style={{ color: color, fontSize: 12, marginTop: 4 }}>
                Ratings
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <View style={styles.footerTab}>
              <Icon type="antdesign" name="setting" color={color} size={size} />
              <Text style={{ color: color, fontSize: 12, marginTop: 4 }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
