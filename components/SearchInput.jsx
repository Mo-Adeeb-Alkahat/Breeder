import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { usePathname, router } from "expo-router";

const SearchInput = ({
  initialQuery,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="w-full h-16 px-4 border-2 border-black-100 bg-blue-950 rounded-2xl focus:border-[#38aecc] items-center flex-row space-x-4 ">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="ابحث عن زوج"
        placeholderTextColor="#ffffff"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert("Missing Params", "الرجاء تعبئة الحقل");
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <FontAwesome5 name="search" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
