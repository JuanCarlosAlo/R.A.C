import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";
import { Platform } from "react-native";

const StyledCarCard = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  gap: 16px;
  width: 100%;

  ${Platform.OS === 'ios'
    ? `
      shadow-color: ${COLORS.PRIMARY};
      shadow-offset: { width: 2px, height: 2px };
      shadow-opacity: 0.25;
      shadow-radius: 4px;
    `
    : `
      elevation: 6;
      shadow-color: ${COLORS.PRIMARY};
      shadow-offset: 2px 2px; 
      shadow-opacity: 0.3;
      shadow-radius: 4px;
    `
  }
`;

const StyledInfoCard = styled.View`
flex-direction: row; 
  align-items: flex-start;
  justify-content: space-between;
`

const StyledTitleCard = styled.Text`
  font-size: 26px;

`;

const StyledPriceContainer= styled.View`
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 1px;
`;


const StyledPriceCard = styled.Text`
  font-size: 26px;
  color: ${COLORS.PRIMARY};
`;
const StyledBottomTagContainer = styled.View`
flex-direction: row; 
  align-items: flex-start;
  justify-content: space-between;
  borderTopWidth: 1px;
  padding-top: 8px;
  border-color: lightgray;
`

const StyledBottomTag = styled.Text`
padding:8px;
`

export { StyledCarCard ,StyledTitleCard,StyledPriceCard,StyledPriceContainer,StyledInfoCard,StyledBottomTag,StyledBottomTagContainer};
