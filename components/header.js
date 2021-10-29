import React, { useState } from "react";
import { Button, View, TouchableOpacity, StyleSheet } from "react-native";
import IconSmile from "react-native-vector-icons/Feather";
import IconScore from "react-native-vector-icons/MaterialIcons";

export default function Header({ navigation }) {
  const menuItems = [
    {
      name: "Home",
      icon: "home",
      onPress: () => navigation.navigate("Home"),
    },
    {
      name: "About",
      icon: "info",
      onPress: () => navigation.navigate("About"),
    },
    {
      name: "Contact",
      icon: "phone",
      onPress: () => navigation.navigate("Contact"),
    },
  ];




  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <IconScore name="bubble-chart" size={60} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconSmile name="smile" size={60} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 100,
    paddingTop: 20,
    backgroundColor: "rgba(100,155,155,1)",
  },
});
