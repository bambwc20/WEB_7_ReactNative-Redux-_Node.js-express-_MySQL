import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import axios from "axios";
import ReadTopic from "../CRUD_File/ReadTopic";
import { connect } from "react-redux";
import {
  DATA_RESPONSE,
  DATA_RESPONSE_END,
  STORE_DATAS,
  CLEAR_DATAS,
} from "../../Redux/action";

const DetailsScreen1 = (props) => {
  const getData = async () => {
    try {
      return await axios.get("https://bambwc20.loca.lt/api/topics");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData()
      .then((res) => {
        props.DataSet(STORE_DATAS, res.data); //몇개를 바꾸던 디스패치를 동시에 하면 한번만 랜더가 되네
        props.setIsLoading(DATA_RESPONSE);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      props.DataSet(CLEAR_DATAS, null);
      props.setIsLoading(DATA_RESPONSE_END);
    };
  }, []);

  return (
    <>
      {props.IsLoading === true ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading</Text>
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={props.community1_datas}
            renderItem={({ item }) => {
              return (
                <ReadTopic
                  title={item.title}
                  desc={item.description}
                  created={item.created}
                  navigation={props.navigation}
                />
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    IsLoading: state.reducer.IsLoading,
    community1_datas: state.reducer.community1_datas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DataSet: (type, community1_datas) => {
      dispatch({ type: type, community1_datas: community1_datas });
    },
    setIsLoading: (type) => {
      dispatch({ type: type });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen1);
