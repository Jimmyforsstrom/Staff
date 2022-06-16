import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export const AddStaff = ({ addStaff }) => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  const onChange = (textValue) => setText(textValue);
  const onChange1 = (textValue) => setText1(textValue);

  return (
    <View style={styles.addContainer}>
      <TextInput
        placeholder="Add name..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TextInput
        placeholder="Add info..."
        style={styles.input1}
        onChangeText={onChange1}
      />

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addStaff(text, text1)}
        >
          <Text style={styles.buttonText}>
            <Icon name="plus" size={20} /> Add staff
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    padding: 12,
    backgroundColor: "cadetblue",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  input: {
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
    height: 40,
  },
  input1: {
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    height: 75,
  },

  button: {
    textAlign: "center",
    paddingLeft: 70,
  },
  buttonText: {
    fontSize: 16,
  },
});
