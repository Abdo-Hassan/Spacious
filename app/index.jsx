import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Spacious</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RootLayout;
