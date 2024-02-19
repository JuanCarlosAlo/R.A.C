import React, { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { statusBarHeight } from "../../constants/measurements";
import { AuthContext } from "../../context/Auth.context";

const CustomHeader = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);
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
      {!currentUser ? (
        <>
          <TouchableOpacity onPress={() =>  navigation.navigate("Register")}>
          <Text>Register</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() =>  navigation.navigate("Login")}>
         <Text>Login</Text>
       </TouchableOpacity>
       </>
      ):(
        <TouchableOpacity onPress={() => console.log(currentUser)}>
        <Text>👤</Text>
      </TouchableOpacity>

      )}
     
    </SafeAreaView>
  );
};

export default CustomHeader;
