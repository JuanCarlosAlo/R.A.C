import { Dimensions, StatusBar } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const statusBarHeight = StatusBar.currentHeight || 0;