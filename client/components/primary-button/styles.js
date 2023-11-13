import { styled } from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../constants/colors";


const StyledPrimaryButton = styled(TouchableOpacity)`
justify-content: center;
align-items: center;
padding: 16px;
width: 350px;
border-radius: 16px;
color: ${COLORS.WHITE};
background-color: ${COLORS.PRIMARY};
`

const StyledPrimaryButtonText = styled(Text)`
  color: ${COLORS.WHITE};
`;



export { StyledPrimaryButton, StyledPrimaryButtonText }