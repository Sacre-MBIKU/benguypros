import HeroSectionStyled from "./HeroSectionDecoration";
import circleYellow from "../../../assets/icons/Ellipse 1.svg";
import circleBlack from "../../../assets/icons/Ellipse 2.svg";
import Circle from "../../../components/Circle";
import Button from "../../../components/shared/button/Button";
import ScrollIcon from "../../../components/ScrollIcon";
import HeroSlogan from "../../../components/heroSlogan/HeroSlogan";
import Header from "../../../components/shared/header/Header";

const HeroSection = () => {
  return (
    <>
      <HeroSectionStyled>
        <Header />
        <Circle src={circleYellow} />
        <Circle
          src={circleBlack}
          circlePositionY="25%"
          circlePositionX={"65%"}
        />
        <HeroSlogan />
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
