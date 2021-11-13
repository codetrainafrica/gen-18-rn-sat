import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

function App() {
  let students = [
    { name: "Prince", age: 43, profile: require("./assets/1.png") },
    { name: "Mark", age: 90, profile: require("./assets/1.png") },
  ];

  const [email, setEmail] = useState("");

  const handleChange = (text) => {
    setEmail(text);
  };

  const handlePress = () => {
    console.log("Hello");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome
          style={{ flex: 10 }}
          name="chevron-left"
          size={24}
          color="black"
        />
        <View style={{ flex: 90 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Edit Profile
          </Text>
        </View>
      </View>
      <View style={styles.profileContainer}></View>
      <View style={styles.inputContainer}></View>
      <View style={styles.submitContainer}></View>
      <TouchableOpacity
        style={{ padding: 16, backgroundColor: "red" }}
        onPress={handlePress}
      >
        <Text>Click me</Text>
      </TouchableOpacity>

      <FlatList
        data={students}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Image source={item.profile} style={{ height: 50, width: 50 }} />
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Feather name="phone-forwarded" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
}

//item.kofi
//{item: kofi}
//item.item.kofi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  header: {
    flex: 15,
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
  },

  profileContainer: {
    flex: 30,
    backgroundColor: "blue",
  },

  inputContainer: {
    flex: 40,
    backgroundColor: "red",
  },

  submitContainer: {
    flex: 15,
    backgroundColor: "green",
  },

  // textStyle: {
  //   borderWidth: 2,
  //   padding: 8,
  // },

  // listItem: {
  //   padding: 16,
  //   marginVertical: 2,
  //   flexDirection: "row",
  // },
});

export default App;
