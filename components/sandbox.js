import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Sandbox({ submitHandler }) {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#333",
  },
  boxOne: {
    backgroundColor: "#ddd",
    padding: 10,
  },
  boxTwo: {
    backgroundColor: "violet",
    padding: 20,
  },
  boxThree: {
    backgroundColor: "gold",
    padding: 30,
  },
  boxFour: {
    backgroundColor: "blue",
    padding: 40,
  },

});
