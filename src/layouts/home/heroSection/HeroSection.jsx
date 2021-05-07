import HeroSectionDecoration from "./HeroSectionDecoration";
import circleYellow from "../../../assets/icons/Ellipse 1.svg";
import circleBlack from "../../../assets/icons/Ellipse 2.svg";
import Circle from "../../../components/Circle";
import Button from "../../../components/shared/button/Button";
import ScrollIcon from "../../../components/ScrollIcon";
import HeroSlogan from "../../../components/heroSlogan/HeroSlogan";
import Header from "../../../components/shared/header/Header";
import { Link } from "react-router-dom";
import scrollTo from "../../../controllers/scrollTo";

const HeroSection = () => {
  const scrollToNextSection = (e) => {
    scrollTo(650);
  };

  return (
    <>
      <HeroSectionDecoration>
        <Header />
        <Circle src={circleYellow} />
        <Circle
          src={circleBlack}
          circlePositionY="25%"
          circlePositionX={"65%"}
        />
        <HeroSlogan />
        <Link to="/series">
          <Button responsiveSerieButton540>SERIES</Button>
        </Link>
        <Link to="/movies">
          <Button
            responsiveButton768
            responsiveFilmButton540
            bgSecondary="#080A16"
            positionX="22%"
          >
            FILMS{" "}
          </Button>
        </Link>
        <ScrollIcon onClick={scrollToNextSection} />
      </HeroSectionDecoration>
    </>
  );
};

export default HeroSection;
