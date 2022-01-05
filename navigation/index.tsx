/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, TouchableOpacity, View} from 'react-native';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ProfileBottomTabNavigator from './ProfileBottomTabNavigator';
import {
  LoginScreen,
  SubscribeScreen,
  MovieDetailScreen,
  NotFoundScreen, ConfirmSignUpScreen
} from "../screens";
import {
  Entypo
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const navigationRef = React.createRef();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      // @ts-ignore
      ref={navigationRef}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  
  return (
    <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"Subscribe"} component={SubscribeScreen} />
      <Stack.Screen name={"ConfirmSignUp"} component={ConfirmSignUpScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="Profile"
        component={ProfileBottomTabNavigator}
      />
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}


