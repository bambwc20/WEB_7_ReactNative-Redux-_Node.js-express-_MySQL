import React from "react";
import { View, Text, Button, Alert } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>Home!</Text> */}
      <Button
        title="WEB Board"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Love Board"
        onPress={() => Alert.alert("Error!", "This page is not prepared!")}
      />
    </View>
  );
}

export default HomeScreen;
