import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import { connect } from "react-redux";

function UpdateTopic(props) {
  const { navigation, route, community1_datas } = props;
  const id = route.params?.id;
  const dataObject = community1_datas.find((data) => data.id === id);

  const [title, setTitle] = useState(dataObject.title);
  const [desc, setDesc] = useState(dataObject.description);

  useEffect(() => {
    navigation.navigate("Update Topic", {
      title,
      desc,
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        placeholder="title"
        onChangeText={(title) => {
          setTitle(title);
          navigation.navigate("Update Topic", {
            title,
          });
        }}
        value={title}
        numberOfLines={1}
        // multiline={true}
        // placeholder="Email"
        // placeholderTextColor="#9a73ef"
        // autoCapitalize="none"
      />
      <TextInput
        style={styles.input2}
        placeholder="description"
        maxLength={240}
        multiline={true}
        numberOfLines={7}
        onChangeText={(desc) => {
          setDesc(desc);
          navigation.navigate("Update Topic", {
            desc,
          });
        }}
        value={desc}
      />
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
    // alignContent: "flex-start",
    margin: 10,
    // marginVertical: 20,
    // paddingTop: 0,
    // paddingBottom: 0,
    textAlignVertical: "top",
    // textAlign: "center",
    // backgroundColor: "#dadada",
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

const mapStateToProps = (state) => {
  return {
    community1_datas: state.reducer.community1_datas,
  };
};

export default connect(mapStateToProps)(UpdateTopic);
