import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AnimalCard = ({
  animal: {
    name,
    image,
    desc,
    bodycount,
    location,
    type,
    breed,
    dob,
    sex,
    owner: { avatar, username },
  },
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-sm font-psemibold text-white"
              numberOfLines={1}
            >
              {name}
            </Text>

            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </View>
      </View>

      {play ? (
        <Text>playing</Text>
      ) : (
        <TouchableOpacity
          className="w-full h-60  rounded-xl mt-3 relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <Image
            className="w-full h-full rounded-xl mt-3 "
            resizeMode="stretch"
            source={{ uri: image }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AnimalCard;
