import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../screens/Home/Home";
import SearchStack from "./SearchStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Find your car" component={SearchStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
