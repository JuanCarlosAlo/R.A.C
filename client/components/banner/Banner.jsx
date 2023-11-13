import PrimaryButton from "../primary-button/PrimaryButton";
import { StyledBanner, StyledBannerText } from "./styles";

const Banner = () => {
  return (
    <StyledBanner source={require("../../assets/images/banner.webp")}>
      <StyledBannerText>No compres coche. Hazte un REVEL.</StyledBannerText>
      <StyledBannerText>
        Suscríbete a un coche con todo incluido. Di adiós a las largas
        permanencias. Entrega a domicilio. Prueba 15 días sin compromiso.
        Conducción neutra de CO₂.
      </StyledBannerText>
      <PrimaryButton />
    </StyledBanner>
  );
};

export default Banner;
