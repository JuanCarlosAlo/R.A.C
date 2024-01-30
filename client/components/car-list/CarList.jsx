import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { CARS_URLS } from "../../constants/urls";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/colors";
import {
  StyledBottomTag,
  StyledBottomTagContainer,
  StyledCarCard,
  StyledInfoCard,
  StyledPriceCard,
  StyledPriceContainer,
  StyledTitleCard,
} from "./styles";


const CarList = () => {
  const { loading, error, data } = useFetch({ url: CARS_URLS.ALL_CARS });
  const navigation = useNavigation();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      </View>
    );
  }
  if (error) return <Text>Error</Text>;

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        padding: 14,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {data.map((car) => (
        <StyledCarCard
          onPress={() => navigation.navigate("Details",{id: car._id})}
          key={car._id}
        >
          <Image
            source={{ uri: car.imgs[0]}}
            style={{
              width: "100%",
              height: 280,
              objectFit: "contain",
            }}
          />
          <StyledInfoCard>
            <View>
              <StyledTitleCard>
                {car.brand} {car.model}
              </StyledTitleCard>
              <Text>
                {car.details.engine} ({car.details.power}cv)
              </Text>
            </View>
            <StyledPriceContainer>
              <StyledPriceCard>{car.price}€</StyledPriceCard>
              <Text>/mes</Text>
            </StyledPriceContainer>
          </StyledInfoCard>
          <StyledBottomTagContainer>
            <StyledBottomTag>{car.fuel}</StyledBottomTag>
            <StyledBottomTag>{car.type}</StyledBottomTag>
            <StyledBottomTag>{car.details.transmition}</StyledBottomTag>
          </StyledBottomTagContainer>
        </StyledCarCard>
      ))}
    </ScrollView>
  );
};

export default CarList;
