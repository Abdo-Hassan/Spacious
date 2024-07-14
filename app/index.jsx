import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-psemibold">Aora</Text>
      <StatusBar barStyle="light-content" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to profilell
      </Link>
    </View>
  );
};

export default RootLayout;
