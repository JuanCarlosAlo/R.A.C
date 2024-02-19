import { styled } from "styled-components";
import { TouchableOpacity, Text, Platform } from "react-native";
import { COLORS } from "../../constants/colors";


const StyledPrimaryButton = styled(TouchableOpacity)`
justify-content: center;
align-items: center;
padding: 16px;
width: 100%;
max-width: 200px;
border-radius: 8px;
color: ${COLORS.WHITE};
background-color: ${COLORS.PRIMARY};
${Platform.OS === 'ios'
    ? `
      shadow-color: ${COLORS.PRIMARY};
      shadow-offset: { width: 0, height: 0 };
      shadow-opacity: 0.25;
      shadow-radius: 4;
    `
    : `
      elevation: 8;
      shadow-color: ${COLORS.PRIMARY};
    `
  }
`

const StyledPrimaryButtonText = styled(Text)`
  color: ${COLORS.WHITE};
`;



export { StyledPrimaryButton, StyledPrimaryButtonText }