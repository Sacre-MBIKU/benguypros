import HeroSectionDecoration from "../../../../layouts/home/heroSection/HeroSectionDecoration";
import bannerSection from "../../../../assets/backgrounds/hero 2.jpg";
import HeaderCinema from "../../../../layouts/HeaderCinema";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import TitlePage from "../../../titlePage/TitlePage";
import ScrollIcon from "../../../ScrollIcon";
const HeroSectionSeries = () => (
  <HeroSectionDecoration banner={bannerSection}>
    <HeaderCinema />
    <Link to="/movies">
      <Button positionY="89%" size="15px">
      FILMS
      </Button>
    </Link>
    <Link to="/">
      <Button bgSecondary="#080A16" positionX="16%" positionY="89%" size="15px">
        ACCUEIL
      </Button>
    </Link>

    <TitlePage>
        SERIES    
    </TitlePage>
    <ScrollIcon />
  </HeroSectionDecoration>
);
export default HeroSectionSeries;
