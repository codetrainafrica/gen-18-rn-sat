import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

function App() {
  return (
    <View style={styles.parent}>
      <View style={styles.profileContainer}>
        <Image source={require("./assets/1.png")} style={styles.profileImg} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder={"Email"} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },

  profileContainer: {
    flex: 4.5,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flex: 4.5,
    justifyContent: "center",
  },

  btnContainer: {
    flex: 1,
  },

  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    padding: 16,
  },

  button: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "purple",
  },
});

export default App;
