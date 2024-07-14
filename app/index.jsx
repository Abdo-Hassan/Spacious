import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-psemibold">Aora</Text>
      <StatusBar barStyle="light-content" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
};

export default App;
