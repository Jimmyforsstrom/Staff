import { Text, Image, StyleSheet, ScrollView, Button } from "react-native";

const Checkout = ({ route }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{route.params.item.name}</Text>
      <Text style={styles.semiText}>id: {route.params.item.id} </Text>
      <Text style={styles.semiText}>{route.params.item.info}</Text>
      <Image style={styles.image} source={require("../assets/Pet.jpg")}></Image>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cadetblue",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 40,
  },
  semiText: {
    fontSize: 20,
    padding: 5,
    textAlign: "center",
  },
  image: {
    width: 220,
    height: 220,
    marginTop: 50,
    marginLeft: 100,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 110,
  },
});

export default Checkout;
