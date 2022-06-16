import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Staff from "./screens/Staff";
import Animals from "./screens/Animals";
import AnimalDetail from "./screens/AnimalDetail";
import Checkout from "./screens/Checkout";
import Contacts from "./components/Contacts";
import { useEffect, useState } from "react";
import { initDB } from "./database/DataBase";

const App = () => {
  const Stack = createNativeStackNavigator();

  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    initDB()
      .then((res) => {
        console.log(res);
        setDbInitialized(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Staff"
          component={Staff}
          initialParams={{ dbInitialized: dbInitialized }}
        />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Animals" component={Animals} />
        <Stack.Screen name="AnimalDetail" component={AnimalDetail} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
