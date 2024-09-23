import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium  ">{title}</Text>
      <View className="w-full h-16 px-4 border-2 border-black-100 bg-blue-950 rounded-2xl focus:border-[#38aecc] items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base w-full text-center"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#ffffff"
          onChangeText={handleChangeText}
          secureTextEntry={title === "كلمة السر" && !showPassword}
        />
        {title === "كلمة السر" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome5
              name={!showPassword ? "eye" : "eye-slash"}
              size={20}
              color="white"
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
