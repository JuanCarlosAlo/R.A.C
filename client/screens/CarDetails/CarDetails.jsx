import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Image,
} from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { CARS_URLS } from "../../constants/urls";
import Swiper from "react-native-swiper";
import SearchBanner from "../../components/search-banner/SearchBanner";
import CarDetailsDescription from "../../components/car-details-description/CarDetailsDescription";
import PrimaryButton from "../../components/primary-button/PrimaryButton";
import CardComponent from "../../components/card-component/CardComponent";
import { StyledBottomContainer } from "./styles";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import { getSpecsCards } from "../../utils/getSpecsCards";
import useRefresh from "../../hooks/useRefresh";

const CarDetails = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data, setFetchInfo } = useFetch({
    url: CARS_URLS.GET_CAR_BY_ID + id,
  });
  const { refreshing, onRefresh } = useRefresh(setFetchInfo, {
    url: CARS_URLS.GET_CAR_BY_ID + id,
  });
  console.log(data)
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (error)
    return (
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Error</Text>
      </ScrollView>
    );
  const images = data.imgs.map((image) => ({
    uri: image,
  }));

  const specsCards = getSpecsCards(data);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text>
        {data.brand} {data.model}
      </Text>
      <Swiper
        style={{ height: 350 }}
        dotStyle={{ backgroundColor: "rgba(0,0,0,.2)", marginBottom: 0 }}
        activeDotStyle={{ backgroundColor: "#000", marginBottom: 0 }}
      >
        {images.map((image, index) => (
          <View key={index} style={{ height: 150 }}>
            <Image
              source={image}
              style={{ width: "100%", height: 300, resizeMode: "contain" }}
            />
          </View>
        ))}
      </Swiper>
      <View style={{ padding: 16, gap: 16 }}>
        <SearchBanner />
        <View style={{ gap: 16 }}>
          {specsCards.map((card, index) => (
            <CardComponent card={card} key={index} />
          ))}
        </View>
        <CarDetailsDescription
          carInfo={`${data.brand} ${data.model}  ${data.fuel}  (${data.fuel})`}
          carDescription={data.details.description}
        />
      </View>
      <StyledBottomContainer>
        <Text>{data.price}€ /mes</Text>
        <SecondaryButton text={"Continuar"} urlToNavigate={"Home"} />
      </StyledBottomContainer>
    </ScrollView>
  );
};

export default CarDetails;
