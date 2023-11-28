// CustomHeader.js

import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { statusBarHeight } from "../../constants/measurements";

const CustomHeader = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        marginTop: statusBarHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        height: 50,
      }}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text>☰</Text>
      </TouchableOpacity>

      <Text>R.A.C</Text>

      <TouchableOpacity onPress={() => console.log("user")}>
        <Text>👤</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomHeader;
