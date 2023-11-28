import { ImageBackground, Text } from "react-native"
import { styled } from "styled-components"
import { COLORS } from "../../constants/colors";
import { screenHeight, statusBarHeight } from "../../constants/measurements";

const StyledBanner = styled(ImageBackground)`
justify-content: center;
align-items: center;
gap: 16px;
height: ${screenHeight - statusBarHeight}px;  
`

const StyledBannerText = styled(Text)`
  color: ${COLORS.WHITE};
`;


export { StyledBanner, StyledBannerText }