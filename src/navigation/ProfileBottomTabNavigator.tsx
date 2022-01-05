import React from "react";
import { createMaterialBottomTabNavigator  } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens";
import { ProfilePicture } from "../components";
import useColorScheme from '../hooks/useColorScheme';
import Colors from "../constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { ProfileBottomTabParamList } from "../../types";

const ProfileBottomTab = createMaterialBottomTabNavigator<ProfileBottomTabParamList>();

export default function ProfileBottomTabNavigator(){
  const colorScheme = useColorScheme();

  return (
    <ProfileBottomTab.Navigator
      initialRouteName="Profile"
      activeColor={Colors[colorScheme].tint}
      barStyle={{
        backgroundColor: Colors.dark.background,
      }}
      labeled={true}
    >
      <ProfileBottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <AntDesign name="user" color={color} size={24}/>
        }}
      />
    </ProfileBottomTab.Navigator>
  );
}