import { Link } from "react-router-dom";
import Button from "../components/shared/button/Button";
import ContainerCinemaCard from "../components/shared/containerCinemaCards/ContainerCinemaCards";
import NavBarCategory from "../components/shared/navBarCategory/NavBarCategory";
import PaginationNavBar from "../components/shared/paginationNavBar/PaginationNavBar";
import HeaderCinema from "../layouts/HeaderCinema";

const MovieCategory = () => {
  return (
    <>
    
    <HeaderCinema borderStyle logoSecondary={true} bgColor="#f9bf2c" />
    <Link to="/series">
      <Button positionY="89%" size="12px" bgSecondary="#080A16">
        SERIES
      </Button>
    </Link>
    <Link to="/">
      <Button bgSecondary="#080A16" positionX="16%" positionY="89%" size="12px">
        ACCUEIL
      </Button>
    </Link>
    <NavBarCategory />

    <ContainerCinemaCard />
    <PaginationNavBar />
    </>
  );
};

export default MovieCategory;
