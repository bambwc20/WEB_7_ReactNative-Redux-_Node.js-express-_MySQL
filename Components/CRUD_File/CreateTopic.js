import * as React from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

function WriteTopics() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>WriteTopics</Text>
      <Button
        title="AJAX 실험"
        onPress={() => {
          axios
            .get("https://bambwc20.loca.lt/api/topics")
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      />
    </View>
  );
}

export default WriteTopics;
