import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    <SafeAreaView className=" h-full bg-primary text-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center h-[85vh] px-4">
          <Image
            className="w-[130px] h-[84px]"
            source={images.logo}
            resizeMode="contain"
          ></Image>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          ></Image>
          <View className="mt-5 relative">
            <Text className="text-3xl text-white font-bold text-center">
              الأمور صارت أسهل بكتير{" "}
              <Text className="text-secondary">Breeder</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            الطريقة الأكثر امان و سهولة لتلاقي الزوج المناسب لحيوانك الأليف
          </Text>
          <CustomButton
            title="متابعة لتسجيل الدخول"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
