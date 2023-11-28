import { Image, Text } from "react-native";
import { StyledCardComponent, StyledTitleContainer } from "./styles";
import PrimaryButton from "../primary-button/PrimaryButton";

const CardComponent = ({ card }) => {
  return (
    <StyledCardComponent>
      <StyledTitleContainer>
        {card.icon && (
          <Image
            source={card.icon}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: "cover",
            }}
          />
        )}
        <Text style={{ flexShrink: 1, fontSize: 18 }}>{card.title}</Text>
      </StyledTitleContainer>
      {card.text && <Text>{card.text}</Text>}
      {card.img && (
        <Image
          source={card.img}
          style={{
            width: "100%",
            height: 350,
            resizeMode: "cover",
            marginBottom: -60,
          }}
        />
      )}
      {card.button && <PrimaryButton />}
    </StyledCardComponent>
  );
};

export default CardComponent;
