import ScrollIcon from "../../../components/ScrollIcon";
import LimitationLine from "../../../components/shared/LimitationLine";
import MovieContainer from "../../../components/shared/movieContainer/MovieContainer";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import MoviesByCategorieDecoration from "./MoviesByCategoryDecoration";

const MoviesByCategorie = () => (
  <MoviesByCategorieDecoration>
    <LimitationLine />
    <TitleCategory>Nouveautés</TitleCategory>
    <MovieContainer />
    <ScrollIcon positionY="2%" positionX="5%" />
  </MoviesByCategorieDecoration>
);
export default MoviesByCategorie;
