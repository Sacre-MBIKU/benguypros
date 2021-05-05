import ScrollIcon from "../../../components/ScrollIcon";
import LimitationLine from "../../../components/shared/LimitationLine";
import MovieContainer from "../../../components/shared/movieContainer/MovieContainer";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import MoviesByCategorieDecoration from "./MoviesByCategoryDecoration";

const MoviesByCategorie = ({ titleCategory, displayScroll }) => (
  <MoviesByCategorieDecoration>
    <LimitationLine />
    <TitleCategory>{titleCategory}</TitleCategory>
    <MovieContainer />
    <ScrollIcon positionY="2%"  displayScroll={displayScroll} />
  </MoviesByCategorieDecoration>
);
export default MoviesByCategorie;
