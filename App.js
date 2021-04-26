import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Components/MainScreen/HomeScreen";
import SettingsScreen from "./Components/MainScreen/SettingsScreen";
import Community_1 from "./Components/CommunityScreen/Community_1";
import CreateTopic from "./Components/CRUD_File/CreateTopic";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Alert } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "WEB7 Community",
        }}
      />
      <Stack.Screen
        name="Details"
        component={Community_1}
        options={(props) => ({
          title: "WEB Board",
          headerRight: () => {
            const { navigation } = props;
            return (
              <Button
                onPress={() => navigation.navigate("Create Topic")}
                type="clear"
                icon={<Icon name="pencil" size={30} color="white" />}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name="Create Topic"
        component={CreateTopic}
        options={{
          title: "Create Topic",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-home";
            } else if (route.name === "Settings") {
              iconName = "ios-settings";
            }

            if (focused === true) {
              size = 25;
            } else if (focused === false) {
              size = 18;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato", // 탭 활성
          inactiveTintColor: "gray", // 탭 비활성
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
