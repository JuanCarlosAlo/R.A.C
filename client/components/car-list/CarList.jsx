import { Image, ScrollView, Text, View } from "react-native"
import { useFetch } from "../../hooks/useFetch"
import { CARS_URLS } from "../../constants/urls"

import { StyledBottomTag, StyledBottomTagContainer, StyledCarCard, StyledInfoCard, StyledPriceCard, StyledPriceContainer, StyledTitleCard } from "./styles"

const CarList =()=>{
    const {loading,error,data} = useFetch({url: CARS_URLS.ALL_CARS})
    
    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error</Text>

    return <ScrollView contentContainerStyle={{
      flex: 1,
      padding: 14,
      justifyContent: "flex-start",
      alignItems: "center"
    }}>
    {data.map(car => 
        <StyledCarCard key={car._id}>
          <Image 
          source={{ uri: car.img }}
          style={{
            width: '100%',
            height: 280,
            objectFit: "contain"
          }}
          />
          <StyledInfoCard>
            <View>
              <StyledTitleCard>{car.brand} {car.model}</StyledTitleCard>
              <Text>{car.details.engine} ({car.details.power}cv)</Text>
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
        
    )}
  </ScrollView>
}

export default CarList