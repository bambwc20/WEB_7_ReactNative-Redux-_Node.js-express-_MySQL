import "react-native-gesture-handler";
import * as React from "react";
import HomeScreen from "../MainScreen/HomeScreen";
import Community_1 from "../CommunityScreen/Community_1";
import CreateTopic from "../CRUD_File/CreateTopic";
import ReadDetailTopic from "../CRUD_File/ReadDetailTopic";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Alert, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { CraeteTopicOfDB } from "../../Redux/action";

const Stack = createStackNavigator();

function HomeStackScreen(props) {
  const { dispatch } = props;

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
            // console.log(title);
            // console.log(desc);

            return (
              <Button
                title="Write"
                type="clear"
                onPress={() => {
                  switch (title !== undefined && desc !== undefined) {
                    case true:
                      navigation.goBack();
                      dispatch(title, desc);
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
            );
          },
        })}
      />
      <Stack.Screen
        name="Read Detail Topic"
        component={ReadDetailTopic}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
}

const mapDispatchToProps = (Dispatch) => {
  return {
    dispatch: (title, desc) => {
      Dispatch(CraeteTopicOfDB(title, desc));
    },
  };
};

export default connect(null, mapDispatchToProps)(HomeStackScreen);
