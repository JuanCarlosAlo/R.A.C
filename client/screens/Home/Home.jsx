import { ScrollView, View } from "react-native";
import Banner from "../../components/banner/Banner";
import { SECTIONS } from "../../constants/sections";
import Section from "../../components/section/Section";
import { CARDS } from "../../constants/cards";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Banner />
        {SECTIONS.map((section, index) => (
          <Section
            key={section._id}
            section={section}
            cards={CARDS[index]?.data}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
