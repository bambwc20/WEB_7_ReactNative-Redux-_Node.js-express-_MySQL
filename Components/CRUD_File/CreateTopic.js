import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";

function WriteTopics({ navigation }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        placeholder="title"
        onChangeText={(title) => setTitle(title)}
        defaultValue={title}
        // multiline={true}

        // placeholder="Email"
        // placeholderTextColor="#9a73ef"
        // autoCapitalize="none"
      />
      <TextInput
        style={styles.input2}
        placeholder="description"
        onChangeText={(desc) => setDesc(desc)}
        defaultValue={desc}
        multiline={true}
      >
        {/* <Text style={styles.input2}>asd</Text> */}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input1: {
    flex: 1,
    // margin: 15,
    // height: 40,
    borderColor: "#c9c9c9",
    borderBottomWidth: 1,
    // paddingHorizontal: 10,
    marginHorizontal: 10,
    fontSize: 25,
  },
  input2: {
    flex: 7,
    // margin: 15,
    // height: 40,
    // width: 500,
    // borderColor: "#7a42f4",
    // borderWidth: 1,
    // paddingHorizontal: 10,
    fontSize: 20,
    alignContent: "flex-start",
    margin: 10,
    // marginVertical: 20,
    // paddingTop: 0,
    // paddingBottom: 0,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});

export default WriteTopics;
