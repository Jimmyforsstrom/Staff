import { Text, StyleSheet, Image, ScrollView } from "react-native";

const AnimalDetail = ({ route }) => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: route.params.imageUrl }} />
      <Text style={styles.text}>{route.params.name}</Text>
      <Text style={styles.longtext}>{route.params.longDescription}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "bisque",
    flex: 1,
  },
  image: {
    height: 230,
    resizeMode: "contain",
    marginTop: 20,
  },
  text: {
    color: "cadetblue",
    fontSize: 40,
    textAlign: "center",
    marginTop: 5,
  },
  longtext: {
    padding: 10,
    fontSize: 15,
    margin: 10,
    color: "black",
  },
});

export default AnimalDetail;
