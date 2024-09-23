import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarActiveBackgroundColor: "#38AECC",
          tabBarStyle: {
            backgroundColor: "#064789",
            borderTopWidth: 1,
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="home" size={24} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="bookmark" size={24} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="plus" size={24} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="dogs"
          options={{
            title: "Dogs",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="dog" size={24} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="cats"
          options={{
            title: "Cats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="cat" size={24} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="address-card" size={24} color="white" />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
