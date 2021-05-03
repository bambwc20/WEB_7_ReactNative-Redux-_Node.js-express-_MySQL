import "react-native-gesture-handler";
import * as React from "react";
import HomeScreen from "../MainScreen/HomeScreen";
import Community_1 from "../CommunityScreen/Community_1";
import CreateTopic from "../CRUD_File/CreateTopic";
import ReadDetailTopic from "../CRUD_File/ReadDetailTopic";
import UpdateTopic from "../CRUD_File/UpdateTopic";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Alert, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import {
  CraeteTopicOfDB,
  DeleteTopicOfDB,
  UpdateTopicOfDB,
} from "../../Redux/action";
import OptionsMenu from "react-native-option-menu";

const Stack = createStackNavigator();

function HomeStackScreen(props) {
  const { CraeteDB, DeleteDB, UpdateDB } = props;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "WEB7 Community",
        }}
      />
      <Stack.Screen
        name="Details"
        component={Community_1}
        options={(props) => ({
          title: "WEB Board",
          headerRight: () => {
            const { navigation } = props;
            return (
              <Button
                onPress={() =>
                  navigation.navigate("Create Topic", {
                    title: undefined,
                    desc: undefined,
                  })
                }
                type="clear"
                icon={<Icon name="pencil" size={30} color="white" />}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name="Read Detail Topic"
        component={ReadDetailTopic}
        options={(props) => ({
          title: "",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerRight: () => {
            const id = props.route.params?.id;
            const { navigation } = props;

            const editPost = () => {
              navigation.navigate("Update Topic", {
                id,
              });
            };

            const deletePost = () => {
              navigation.goBack();
              DeleteDB(id);
            };

            return (
              <View style={{ margin: 20 }}>
                <OptionsMenu
                  customButton={
                    <Icon name="ellipsis-v" size={30} color="black" />
                  }
                  destructiveIndex={1}
                  options={["Edit", "Delete", "Cancel"]}
                  actions={[editPost, deletePost]}
                />
              </View>
            );
          },
        })}
      />
      <Stack.Screen
        name="Create Topic"
        component={CreateTopic}
        options={(props) => ({
          title: "Create Topic",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerRight: () => {
            const { navigation } = props;
            let title = props.route.params?.title;
            let desc = props.route.params?.desc;

            return (
              <>
                <Button
                  title="Write"
                  type="clear"
                  onPress={() => {
                    switch (title !== undefined && desc !== undefined) {
                      case true:
                        CraeteDB(title, desc, (redirectId) => {
                          navigation.goBack();
                          // navigation.navigate("Read Detail Topic", {
                          //   id: redirectId,
                          // });
                        });
                        break;

                      default:
                        Alert.alert("Error", "Please don't let blank exist!");
                        break;
                    }
                  }}
                  containerStyle={{
                    backgroundColor: "red",
                    // shadowRadius: 50,
                    borderRadius: 12,
                    margin: 3,
                  }}
                  titleStyle={{ color: "white", fontSize: 18 }}
                  // icon={<Icon name="pencil" size={30} color="red" />}
                />
              </>
            );
          },
        })}
      />
      <Stack.Screen
        name="Update Topic"
        component={UpdateTopic}
        options={(props) => ({
          title: "Update Topic",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerRight: () => {
            const { navigation } = props;
            let id = props.route.params?.id;
            let title = props.route.params?.title;
            let desc = props.route.params?.desc;
            // console.log(id);
            // console.log(title);
            // console.log(desc);
            return (
              <>
                <Button
                  title="Update"
                  type="clear"
                  onPress={() => {
                    switch (title !== "" && desc !== "") {
                      case true:
                        UpdateDB(id, title, desc, () => {
                          navigation.goBack();
                        });
                        break;

                      default:
                        Alert.alert("Error", "Please don't let blank exist!");
                        break;
                    }
                  }}
                  containerStyle={{
                    backgroundColor: "red",
                    // shadowRadius: 50,
                    borderRadius: 12,
                    margin: 3,
                  }}
                  titleStyle={{ color: "white", fontSize: 18 }}
                  // icon={<Icon name="pencil" size={30} color="red" />}
                />
              </>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
}

const mapDispatchToProps = (Dispatch) => {
  return {
    CraeteDB: (title, desc, callback) => {
      Dispatch(CraeteTopicOfDB(title, desc, callback));
    },
    DeleteDB: (id) => {
      Dispatch(DeleteTopicOfDB(id));
    },
    UpdateDB: (id, title, desc, callback) => {
      Dispatch(UpdateTopicOfDB(id, title, desc, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(HomeStackScreen);
