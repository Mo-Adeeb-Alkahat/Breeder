import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormField from "../../components/FormField";
import * as DocumentPicker from "expo-document-picker";
import CustomButton from "../../components/CustomButton";
import { createAnimalPost } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";

const Create = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    name: "test",
    image: null,
    desc: "test",
    bodycount: 1,
    location: "test",
    type: "test",
    breed: "test",
    dob: "2021-10-10",
    sex: "test",
  });

  const openPicker = async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type: selectType === "image" ? "image/*" : ["video/mp4", "video/gif"],
    });

    if (!result.canceled) {
      if (selectType === "image") {
        setForm({
          ...form,
          image: result.assets[0],
        });
      }
    } else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };

  const submit = async () => {
    if (
      !form.name |
      !form.image |
      !form.desc |
      !form.bodycount |
      !form.location |
      !form.type |
      !form.breed |
      !form.dob |
      !form.sex
    ) {
      return Alert.alert("Please provide all fields");
    }

    setUploading(true);
    try {
      await createAnimalPost({
        ...form,
        bodycount: parseInt(form.bodycount),
        userId: user.$id,
      });

      Alert.alert("Success", "Post uploaded successfully");
      router.push("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    } finally {
      /* setForm({
        name: "",
        image: null,
        desc: "",
        bodycount: 0,
        location: "",
        type: "",
        breed: "",
        dob: "",
        sex: "",
      }); */

      setUploading(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView className="px-4 my-6">
        <Text className="text-white text-2xl font-psemibold">انشر طلب</Text>

        <FormField
          title="اسم الحيوان"
          value={form.name}
          placeholder="ضع اسم حيوانك الاليف"
          handleChangeText={(e) => setForm({ ...form, name: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">الصورة</Text>
          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.image ? (
              <Image
                source={{ uri: form.image.uri }}
                className="w-full h-64 rounded-2xl"
                resizeMode="stretch"
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary flex justify-center items-center">
                  <FontAwesome5
                    name="cloud-upload-alt"
                    size={35}
                    color="white"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="التفاصيل"
          value={form.desc}
          placeholder="اكتب تفاصيل حيوانك الاليف"
          handleChangeText={(e) => setForm({ ...form, desc: e })}
          otherStyles="mt-7"
        />

        <FormField
          title="عدد مرات التزاوج"
          value={form.bodycount}
          placeholder="اكتب عدد مرات تزاوج حيوانك الاليف"
          handleChangeText={(e) => setForm({ ...form, bodycount: e })}
          otherStyles="mt-7"
        />

        <FormField
          title="الموقع"
          value={form.location}
          placeholder="اكتب تفاصيل موقعك "
          handleChangeText={(e) => setForm({ ...form, location: e })}
          otherStyles="mt-7"
        />

        <FormField
          title="النوع"
          value={form.type}
          placeholder="كلب او قطة  الخ"
          handleChangeText={(e) => setForm({ ...form, type: e })}
          otherStyles="mt-7"
        />

        <FormField
          title="الفصيلة"
          value={form.breed}
          placeholder="فصيلة الحيوان"
          handleChangeText={(e) => setForm({ ...form, breed: e })}
          otherStyles="mt-7"
        />

        <FormField
          title="تاريخ الولادة"
          value={form.dob}
          placeholder="اكتب تاريخ ميلاد حيوانك الاليف"
          handleChangeText={(e) => setForm({ ...form, dob: e })}
          otherStyles="mt-7"
        />

        <FormField
          title="الجنس"
          value={form.sex}
          placeholder="اكتب جنس حيوانك الاليف"
          handleChangeText={(e) => setForm({ ...form, sex: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="نشر الطلب"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
