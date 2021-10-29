import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const onPressItem = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

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
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles.menu}>{isOpen ? "Close" : "Menu"}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{selected || "Home"}</Text>
    </View>
  );
}

// create styles for header component   //
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop:38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
