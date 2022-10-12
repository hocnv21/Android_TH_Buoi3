import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Button,
} from "react-native";
//import your components
import List from "./components/PokeList";
import { useState, useEffect } from "react";
//Export default the stateless component
function App() {
  const [nameInput, setNameInput] = useState("aa");
  const [arrData, setArrData] = useState([
    {
      id: Math.random(),
      nameValue: "Nguyen Viet Hoc",
    },
  ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{}}
          placeholder="Nhap ten "
          onChangeText={(text) => setNameInput(text)}
          value={nameInput}
        ></TextInput>
        <Button
          title={"Them " + arrData.length}
          onPress={() => {
            arrData.push({
              id: Math.random(),
              nameValue: nameInput,
            });
            setNameInput("");
          }}
        ></Button>
      </View>

      <View style={{ flex: 1, borderWidth: 1 }}>
        <List
          arr={arrData}
          onDeleteApp={(id) => {
            setArrData(arrData.filter((x) => x.id !== id));
          }}
        />
      </View>
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  pokeListHeader: {
    fontSize: 20,
    color: "#fff",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  col1: {
    width: 40,
  },
  col2: {
    flexGrow: 1,
  },
  col3: {
    width: 100,
  },
  header: {
    backgroundColor: "#555",
  },
});
