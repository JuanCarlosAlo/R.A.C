import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";

import Search from "../screens/Search/Search";
import CarDetails from "../screens/CarDetails/CarDetails";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={CarDetails} />
    </Stack.Navigator>
  );
};

export default SearchStack;
