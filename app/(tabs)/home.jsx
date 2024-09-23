import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import AnimalCard from "../../components/AnimalCard";
import { useGlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);

  const { data: LatestPosts } = useAppwrite(getLatestPosts);

  const { user } = useGlobalContext();

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <AnimalCard animal={item} />}
        ListHeaderComponent={() => (
          <View className="flex mb-6 px-4 space-y-6 bg-primary">
            <View className="flex justify-between items-start flex-row-reverse mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  مرحباً
                </Text>
                <Text className="font-psemibold text-2xl text-white">
                  {user?.username}
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  className="w-12 h-10"
                  source={images.logoSmall}
                  resizeMode="contain"
                ></Image>
              </View>
            </View>
            <SearchInput></SearchInput>
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3 ">
                شائع
              </Text>
              <Trending posts={LatestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="لم يتم العثور" subtitle="الكثير قادم قريبا" />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
