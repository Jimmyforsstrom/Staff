import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Animals = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const nav = useNavigation();

  const handleNavigate = (data) => {
    nav.navigate("AnimalDetail", (data = data));
  };

  const url2 = "https://animals.azurewebsites.net/api/animals/";

  useEffect(() => {
    fetch(url2)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Down below is our animals, click on one for more details...
      </Text>
      {loading ? (
        <Text></Text>
      ) : (
        data.map((data) => (
          <View key={data.id} style={styles.container}>
            <TouchableOpacity onPress={() => handleNavigate(data)}>
              <Text style={styles.text}>
                {data.id}. {data.name}, {data.yearOfBirth}, {data.latinName}
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    padding: 10,
    fontSize: 20,
    color: "cadetblue",
    fontWeight: "bold",
    borderWidth: 1
  },
  container: { 
    paddingLeft: 5, 
    textAlign: "center", 
    borderBottomWidth: 0.25,
    marginTop: 5
  },
    text: {
    marginTop: 10,
    fontSize: 16,
    padding: 6,
  },
});
export default Animals;
