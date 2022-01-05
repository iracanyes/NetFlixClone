/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {
  ProfilePicture
} from "../components";
import {
  HomeScreen,
  ComingSoonScreen,
  SearchScreen,
  DownloadScreen, MovieDetailScreen
} from "../screens";
import { 
  BottomTabParamList, 
  HomeParamList, 
  ComingSoonParamList, 
  SearchParamList,
  DownloadParamList 
} from '../../types';
import { 
  Entypo,
  Feather,
  Octicons,
  Ionicons, MaterialCommunityIcons
 } from '@expo/vector-icons';
 import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
 import { useNavigation } from "@react-navigation/native";

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor={Colors[colorScheme].tint}
      barStyle={{
        backgroundColor: Colors.dark.background,
      }}
      labeled={true}      
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          //title: 'Netflix',
          tabBarLabel: 'Home',
          tabBarIcon:({ color }) => <Octicons name="home" color={color} size={24}/>,
          
        }}        
      />
      <BottomTab.Screen
        name="ComingSoon"
        component={ComingSoonNavigator}
        options={{
          title: 'Coming Soon',
          tabBarLabel: 'Coming Soon',
          tabBarIcon: ({ color }) => <Entypo name="folder-video" color={color} size={24}/>,
          tabBarBadge: 5
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="search" color={color} size={24}/>,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={DownloadNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-cloud-download" color={color} size={24}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator
      //headerMode={'none'}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name={"MovieDetail"}
        component={MovieDetailScreen}
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
}

const ComingSoonStack = createStackNavigator<ComingSoonParamList>();

function ComingSoonNavigator() {
  const navigation = useNavigation();
  return (
    <ComingSoonStack.Navigator>
      <ComingSoonStack.Screen
        name="ComingSoonScreen"
        component={ComingSoonScreen}
        options={{ 
          headerTitle: () => (
            <Text 
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: Colors.dark.tintFirst,
              }}
            >
              Coming Soon
            </Text>
          ),
          headerRight: () => (
            <ProfilePicture
              image={"https://www.fillmurray.com/640/360"}
              size={30}
              styles={{
                profileButton: {
                  borderWidth: 3,
                  backgroundColor: '#0000',
                  borderColor: Colors.dark.tintFirst,
                  borderRadius: 15,
                  padding: 5
                },
                profileImage: {},
              }}
              onPress={() => navigation.navigate('Profile')}
            />
          ),          
          headerRightContainerStyle: {
            marginRight: 15
          }, 
        }}
      />
    </ComingSoonStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator (){
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
    </SearchStack.Navigator>
  );
}

const DownloadStack = createStackNavigator<SearchParamList>();

function DownloadNavigator (){
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
    </DownloadStack.Navigator>
  );
}


const styles = StyleSheet.create({

});