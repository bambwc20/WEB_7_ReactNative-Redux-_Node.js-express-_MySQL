import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Alert, SafeAreaView } from "react-native";

function SettingStackScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Text>This page only watch!</Text>
    </View>
  );
}

export default SettingStackScreen;
