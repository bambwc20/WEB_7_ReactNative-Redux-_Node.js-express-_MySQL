import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const ReadDetailTopic = (props) => {
  const { route, community1_datas } = props;
  const { id } = route.params;
  const dataObject = community1_datas.find((data) => data.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{dataObject.title}</Text>
      <Text style={styles.desc}>{dataObject.description}</Text>
      <Text style={styles.created}>{dataObject.created.slice(0, 10)}</Text>
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
  created: {
    flex: 1,
    fontSize: 15,
    padding: 20,
    color: "#555555",
  },
});

const mapStateToProps = (state) => {
  return {
    community1_datas: state.reducer.community1_datas,
  };
};

export default connect(mapStateToProps)(ReadDetailTopic);
