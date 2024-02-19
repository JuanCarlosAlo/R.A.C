import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";

import Search from "../screens/Search/Search";
import CarDetails from "../screens/CarDetails/CarDetails";
import Register from "../screens/Register/Register";
import Login from "../screens/Login/Login";

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
      <Stack.Screen name="Details" component={CarDetails} options={{
          headerShown: true, 
        }}/>
      {/* <Stack.Screen name="Register" component={Register} options={{
          headerShown: true, 
        }}/>
           <Stack.Screen name="Login" component={Login} options={{
          headerShown: true, 
        }}/> */}
    </Stack.Navigator>
  );
};

export default SearchStack;
