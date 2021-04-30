import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { reducer } from "./Redux/reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import HomeStackScreen from "./Components/StackScreen/HomeStackScreen";
import SettingStackScreen from "./Components/StackScreen/SettingStackScreen";

const Tab = createBottomTabNavigator();

const store = createStore(
  combineReducers({
    reducer,
  }),
  applyMiddleware(thunk)
);

export default function App() {
  return (
    <Provider store={store}>
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
          <Tab.Screen name="Settings" component={SettingStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
