import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

function App() {
  const [email, setEmail] = useState("");

  const handleChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    console.log("Clicked");
  };

  let students = [
    "Prince",
    "Mark",
    "Tei",
    "Maya",
    "Randy",
    "Bill",
    "Tsotsoo",
    "Isaac",
    "Emmanuel",
    "Frank",
    "Orlando",
    "Prince",
    "Mark",
    "Tei",
    "Maya",
    "Randy",
    "Bill",
    "Tsotsoo",
    "Isaac",
    "Emmanuel",
    "Frank",
    "Orlando",
    "Prince",
    "Mark",
    "Tei",
    "Maya",
    "Randy",
    "Bill",
    "Tsotsoo",
    "Isaac",
    "Emmanuel",
    "Frank",
    "Orlando",
  ];

  return (
    <View style={styles.container}>
      {/* ScrollView */}
      <ScrollView>
        <View style={{ height: 30, backgroundColor: "red", width: 100 }}></View>
      </ScrollView>
      {/* Flatlist */}
      <FlatList
        data={students}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={(goat, index) => {
          return (
            <View
              style={{
                padding: 16,
                backgroundColor: "tomato",
                marginVertical: 2,
              }}
            >
              <Text ke>{goat.item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
