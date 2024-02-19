import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import SearchStack from "./SearchStack";
import CustomHeader from "../components/custom-header/CustomHeader";

import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation }) => <CustomHeader navigation={navigation} />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Find your car" component={SearchStack} />
   
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
