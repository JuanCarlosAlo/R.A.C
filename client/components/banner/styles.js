import { ImageBackground, Text } from "react-native"
import { styled } from "styled-components"
import { COLORS } from "../../constants/colors";

const StyledBanner = styled(ImageBackground)`
justify-content: center;
align-items: center;
gap: 16px;
height: 100%;
width: 100%;

`

const StyledBannerText = styled(Text)`
  color: ${COLORS.WHITE};
`;


export { StyledBanner, StyledBannerText }