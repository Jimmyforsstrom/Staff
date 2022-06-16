import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class Contacts extends Component {
  state = {
    email: "",
    phone: "",
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePhone = (text) => {
    this.setState({ phone: text });
  };
  send = (email, phone) => {
    this.setState({email: '', phone: ''})
    alert(
      "email: " +
        email +
        " phone: " +
        phone +
        " sent to the developer, thank you"
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.submitButtonText}>Developer Jimmy</Text>
        <Image
          style={styles.image}
          source={require("../assets/profile.jpg")}
          resizeMode="cover"
        ></Image>

        <TextInput 
          style={styles.input}
          placeholder="Email"
          onChangeText={this.handleEmail}
          value={this.state.email}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          onChangeText={this.handlePhone}
          value={this.state.phone}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.send(this.state.email, this.state.phone)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <Text style={styles.submitButtonText}>www.sendMeAnEmail.now</Text>
      </View>
    );
  }
}
export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "bisque",
    alignItems: "center",
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 100,
  },
  submitButton: {
    backgroundColor: "white",
    padding: 10,
    margin: 15,
    borderRadius: 30,
  },
  submitButtonText: {
    color: "gray",
    margin: 5,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 1000,
    borderWidth: 1,
    marginBottom: 40,
    marginTop: 20,
  },
});
