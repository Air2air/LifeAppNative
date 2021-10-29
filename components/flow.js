import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Flow({ submitHandler }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.buttonWrapper}>
        <View style={styles.button1}></View>
        <View style={styles.button2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
  },
  content: {
    flex: 0.5,
    backgroundColor: "#ddd",
  },
  buttonWrapper: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "gold",
  },
  button1: {
    flex: 1,
    backgroundColor: "orange",
  },
  button2: {
    flex: 1,
    backgroundColor: "red",
  },
});
