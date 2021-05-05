import HeroSectionDecoration from "../../../../layouts/home/heroSection/HeroSectionDecoration";
import bannerSection from "../../../../assets/backgrounds/hero1.png";
import HeaderCinema from "../../../../layouts/HeaderCinema";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
const HeroSectionCinema = () => (
  <HeroSectionDecoration banner={bannerSection}>
    <HeaderCinema />
    <Link to="/series">
      <Button positionY="89%" size="15px">
        SERIES
      </Button>
    </Link>
    <Link to="/movies">
      <Button bgSecondary="#080A16" positionX="16%" positionY="89%" size="15px">
        ACCUEIL
      </Button>
    </Link>
  </HeroSectionDecoration>
);
export default HeroSectionCinema;
