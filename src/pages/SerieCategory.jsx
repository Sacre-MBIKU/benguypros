import { Link } from "react-router-dom";
import Button from "../components/shared/button/Button";
import HeaderCinema from "../layouts/HeaderCinema";

const SerieCategory = () => {
  return (
    <>
    
    <HeaderCinema borderStyle logoSecondary={true} bgColor="#f9bf2c" />
    <Link to="/movies">
      <Button positionY="89%" size="12px" bgSecondary="#080A16">
        FILMS
      </Button>
    </Link>
    <Link to="/">
      <Button bgSecondary="#080A16" positionX="16%" positionY="89%" size="12px">
        ACCUEIL
      </Button>
    </Link>
    </>
  );
};

export default SerieCategory;
