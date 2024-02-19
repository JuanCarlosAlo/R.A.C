import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Register from "../screens/Register/Register";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      {/* <Stack.Screen name="Register" component={Register} options={{
          headerShown: true, 
        }}/>
            <Stack.Screen name="Login" component={Login} options={{
          headerShown: true, 
        }}/> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
