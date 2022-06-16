import {
  View,
  StyleSheet,
  FlatList,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListStaff } from "../components/ListStaff";
import { AddStaff } from "../components/AddStaff";
import { deleteById, findAll, insert } from "../database/DataBase";

const Staff = ({ navigation, dbInitialized }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    findAll().then((res) => setItems(res));
  }, [dbInitialized]);

  const deleteStaff = (id) => {
    deleteById(id);
    delete { id };
    setItems((resList) => {
      return resList.filter((item) => item.id != id);
    });
  };

  const addStaff = (name, info) => {
    if (!name) {
      alert("please add a name");
    } else {
      insert({ name: name, info: info || 'nothing added yet' })
        .then((res) => findAll())
        .then((resList) => setItems(resList))
        .catch((err) => console.log(err));
    }
  };

  return (
    <View>
      <AddStaff addStaff={addStaff} />
      <FlatList
        onPress={() => handleClick(items)}
        data={items}
        renderItem={({ item }) => (
          <ListStaff item={item} deleteStaff={deleteStaff} />
        )}
      />
      <View style={styles.center}>
        <Image
          style={styles.image}
          source={require("../assets/first.jpg")}
          resizeMode="cover"
        ></Image>
      </View>
      <Button title="Back to Homepage" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "cadetblue",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  text: {
    borderRadius: 20,
    margin: 20,
    color: "black",
    fontSize: 14,
    backgroundColor: "gray",
    textAlign: "center",
  },
  center: {
    paddingLeft: 100,
    backgroundColor: "cadetblue",
  },
  button: {
    marginBottom: 16,
    fontSize: 20,
    textAlign: "center",
    height: 40,
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    marginBottom: 40,
    marginTop: 20,
  },
});
export default Staff;
