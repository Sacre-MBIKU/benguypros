import ScrollIcon from "../../../components/ScrollIcon";
import MovieContainer from "../../../components/shared/homeMovieContainer/MovieContainer";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import MoviesByCategorieDecoration from "./MoviesByCategoryDecoration";

const MoviesByCategorie = ({ titleCategory, displayScroll, widthImage, widthTitle, heightImage }) => (
  <MoviesByCategorieDecoration>
    <TitleCategory>{titleCategory}</TitleCategory>
    <MovieContainer widthImage = {widthImage} widthTitle = {widthTitle} heightImage = {heightImage}/>
    <ScrollIcon positionY="2%"  displayScroll={displayScroll} />
  </MoviesByCategorieDecoration>
);
export default MoviesByCategorie;
