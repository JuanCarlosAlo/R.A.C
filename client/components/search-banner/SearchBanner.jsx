import { Text, View } from "react-native";
import { BANNER_SECTION } from "../../constants/sections";

const SearchBanner = () => {
  return (
    <View>
      <Text>{BANNER_SECTION.title}</Text>
      <Text>{BANNER_SECTION.text}</Text>
    </View>
  );
};

export default SearchBanner;
