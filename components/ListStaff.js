import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const ListStaff = ({ item, deleteStaff }) => {
  const nav = useNavigation();
  const handleNavigate = (item) => {
    nav.navigate("Checkout", { item: item });
  };

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listView}>
        <TouchableOpacity onPress={() => handleNavigate(item)}>
          <View style={styles.listText}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteStaff(item.id)}
          ></Icon>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    backgroundColor: "#ddd",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  listView: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  listText: {
    fontSize: 16,
    justifyContent: "space-evenly",
  },
});

export default ListStaff;
