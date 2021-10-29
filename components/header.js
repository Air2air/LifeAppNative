import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

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
      <TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      </TouchableOpacity>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}

// create styles for header component   //
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop:38,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  title: {
    textAlign: "center",
    color: "#ddd",
    fontSize: 20,
    fontWeight: "bold",
  },
});
