import { useNavigation } from "@react-navigation/native";
import { StyledPrimaryButton, StyledPrimaryButtonText } from "./styles";

const SecondaryButton = ({text,urlToNavigate}) => {
  const navigation = useNavigation();
  return (
    <StyledPrimaryButton onPress={() => navigation.navigate(urlToNavigate)}>
      <StyledPrimaryButtonText>{text}</StyledPrimaryButtonText>
    </StyledPrimaryButton>
  );
};

export default SecondaryButton;
