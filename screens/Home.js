import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {  

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>

        <Image
          style={styles.image}
          source={require("../assets/start.jpg")}
          resizeMode="cover"
        ></Image>

      <View style={styles.flex}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Animals")}
        >
          <Text style={styles.text}>Animals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Staff")}
        >
          <Text style={styles.text}>Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Contacts")}
        >
          <Text style={styles.text}>Contacts</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cadetblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
  },
  button: {
    color: "darkgray",
    paddingTop: 30,
    textAlign: "center",
    justifyContent: "center",
    padding: 20,
  },
  flex: {
    flexDirection: "row",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    marginBottom: 40,
  }, contact: {
    backgroundColor: 'red',
    marginLeft: 250,
    marginTop: 80
  }
});

export default Home;
