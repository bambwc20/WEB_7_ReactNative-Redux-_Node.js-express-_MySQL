import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ReadDetailTopic = ({ route, navigation }) => {
  const { title, desc, created } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topic: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    marginHorizontal: 10,
  },
  desc: {
    flex: 9,
    fontSize: 20,
    padding: 20,
  },
});
