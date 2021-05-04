import HeroSectionStyled from "./HeroSectionDecoration";
import Logo from "../../../components/Logo";
import circleYellow from "../../../assets/icons/Ellipse 1.svg";
import circleBlack from "../../../assets/icons/Ellipse 2.svg";
import Circle from "../../../components/Circle";
import Button from "../../../components/shared/button/Button";
import ButtonSearch from "../../../components/shared/buttonSearch/ButtonSearch";
import ScrollIcon from "../../../components/ScrollIcon";

const HeroSection = () => {
  return (
    <>
      <HeroSectionStyled>
        <ButtonSearch />
        <Circle src={circleYellow} />
        <Circle
          src={circleBlack}
          circlePositionY="25%"
          circlePositionX={"65%"}
        />
        <Logo />

        <Button>SERIES</Button>
        <Button bgSecondary="#080A16" positionX="22%">
          FILMS{" "}
        </Button>
        <ScrollIcon />
      </HeroSectionStyled>
    </>
  );
};

export default HeroSection;
