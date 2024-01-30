import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { CARS_URLS } from "../../constants/urls";
import Swiper from "react-native-swiper";
import SearchBanner from "../../components/search-banner/SearchBanner";
import CarDetailsDescription from "../../components/car-details-description/CarDetailsDescription";
import PrimaryButton from "../../components/primary-button/PrimaryButton";
import CardComponent from "../../components/card-component/CardComponent";

const CarDetails = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useFetch({
    url: CARS_URLS.GET_CAR_BY_ID + id,
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (error) return <Text>Error</Text>;

  const images = data.imgs.map((image) => ({
    uri: image,
  }));
  const specsCards = [
    { title: "Año de vehículo", text: data.details.year },
    { title: "Tipo de vehículo", text: data.type },
    { title: "Asientos", text: data.details.seats },
    { title: "Puertas", text: data.details.doors },
    { title: "Potencia", text: data.details.power + "cv" },
    { title: "Combustible", text: data.details.fuel },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
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
          <View style={{  gap: 16 }}>
            {specsCards.map((card, index) => (
              <CardComponent card={card} key={index} />
            ))}
          </View>
          <CarDetailsDescription
            carInfo={`${data.brand} ${data.model}  ${data.fuel}  (${data.fuel})`}
            carDescription={data.details.description}
          />
        </View>
      </ScrollView>
      <View>
        <Text>{data.price}€ /mes</Text>
        <PrimaryButton />
      </View>
    </View>
  );
};

export default CarDetails;
