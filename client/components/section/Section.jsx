import { Text, View, Image } from "react-native";
import PrimaryButton from "../primary-button/PrimaryButton";
import CardComponent from "../card-component/CardComponent";

const Section = ({ section, cards }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ color: section?.color }}>{section?.title}</Text>
      <Text style={{ color: section?.color }}>{section?.text}</Text>
      {cards &&
        cards.map((card) => <CardComponent key={card._id} card={card} />)}
      {section.icons && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {section.icons.map((icon) => (
            <Image
              key={icon._id}
              source={icon.img}
              style={{
                width: 50,
                height: 50,
                margin: 5,
              }}
            />
          ))}
        </View>
      )}

      {section.button && <PrimaryButton />}
    </View>
  );
};
export default Section;
