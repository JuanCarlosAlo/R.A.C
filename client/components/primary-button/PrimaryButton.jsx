import { useNavigation } from "@react-navigation/native";
import { StyledPrimaryButton, StyledPrimaryButtonText } from "./styles";

const PrimaryButton = () => {
  const navigation = useNavigation();
  return (
    <StyledPrimaryButton onPress={() => navigation.navigate("Find your car")}>
      <StyledPrimaryButtonText>Encuentra tu coche</StyledPrimaryButtonText>
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
