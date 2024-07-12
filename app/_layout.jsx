import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View>
      <Text>Spacious</Text>
      <StatusBar barStyle="light-content" />
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

export default _layout;
