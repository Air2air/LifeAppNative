import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addtodo";

import Flow from "./components/flow";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on the switch", key: 3 },
  ]);


  const [content, setContent] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on the switch", key: 3 },
  ]);




  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      //show an alert
      Alert.alert("Oops", "Todos must be over 3 characters long", [
        { text: "ok" },
        { onPress: () => console.log("ok pressed") },
      ]);
    }
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    // <Sandbox />

    <>
<Header />
<Flow />
</>


    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     console.log("dismissed");
    //     Keyboard.dismiss();
    //   }}
    // >
    //   <View style={styles.container}>
    //     {/* header */}
    //     <Header />
    //     <View style={styles.content}>
    //       <AddTodo submitHandler={submitHandler} />
    //       <View style={styles.list}>
    //         <FlatList
    //           data={todos}
    //           scrollEnabled={true}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} pressHandler={pressHandler} />
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  content: {},
  list: { marginTop: 20 },
});
