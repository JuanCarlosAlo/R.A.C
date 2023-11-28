import { BANNER_SECTION } from "../../constants/sections";
import PrimaryButton from "../primary-button/PrimaryButton";
import { StyledBanner, StyledBannerText } from "./styles";

const Banner = () => {
  return (
    <StyledBanner source={require("../../assets/images/banner.webp")}>
      <StyledBannerText>{BANNER_SECTION.title}</StyledBannerText>
      <StyledBannerText>{BANNER_SECTION.text}</StyledBannerText>
      <PrimaryButton />
    </StyledBanner>
  );
};

export default Banner;
