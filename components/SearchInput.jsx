import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  handleTextChange,
  placeholder,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="border-2 border-black-200 rounded-2xl flex-row items-center focus:border-secondary w-full h-16 px-4 bg-black-100 space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleTextChange}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
