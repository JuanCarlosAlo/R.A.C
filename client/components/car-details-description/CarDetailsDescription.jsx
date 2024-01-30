import { Text, View } from "react-native"

const CarDetailsDescription = ({carInfo,carDescription}) =>{

    return <View>
        <Text>Descripción y equipamiento</Text>
        <Text>{carInfo}</Text>
        <Text>{carDescription}</Text>
    </View>
}

export default CarDetailsDescription