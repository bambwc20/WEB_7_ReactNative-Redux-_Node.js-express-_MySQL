import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import ReadDetailTopic from "./ReadDetailTopic";

export default ReadTopic = ({ title, desc, created, navigation }) => {
  let cutDescLength = (desc) => {
    if (desc.length > desc.slice(0, 90).length) {
      return `${desc.slice(0, 90)}...`;
    } else {
      return desc;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Read Detail Topic", {
          title,
          desc,
          created,
        });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{cutDescLength(desc)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    // backgroundColor: "#f9c2ff",
    borderBottomWidth: 1,
    borderColor: "#c9c9c9",
    marginVertical: 8,
    marginTop: 10,
    marginHorizontal: 10,
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 25,
    paddingBottom: 10,
  },
  desc: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    paddingBottom: 25,
  },
});
