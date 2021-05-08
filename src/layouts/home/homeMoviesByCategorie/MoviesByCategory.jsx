import ScrollIcon from "../../../components/ScrollIcon";
import MovieContainer from "../../../components/shared/homeMovieContainer/MovieContainer";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import scrollTo from "../../../controllers/scrollTo";
import MoviesByCategorieDecoration from "./MoviesByCategoryDecoration";

  const scrollToNextSection = (e) => {
    scrollTo(1300);
  };

const MoviesByCategorie = ({ titleCategory, displayScroll, widthImage, widthTitle, heightImage }) => (
  <MoviesByCategorieDecoration>
    <TitleCategory TitleCategorySecondary>{titleCategory}</TitleCategory>
    <MovieContainer widthImage = {widthImage} widthTitle = {widthTitle} heightImage = {heightImage}/>
    <ScrollIcon onClick = {scrollToNextSection} positionY="2%"  displayScroll={displayScroll} />
  </MoviesByCategorieDecoration>
);
export default MoviesByCategorie;
