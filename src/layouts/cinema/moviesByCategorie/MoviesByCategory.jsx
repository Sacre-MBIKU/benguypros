import Button from "../../../components/shared/button/Button";
import MovieContainer from "../../../components/shared/movieContainer/MovieContainer";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import MoviesByCategorieDecoration from "./MoviesByCategoryDecoration";

const MoviesByCategorie = ({ titleCategory}) => (
  <MoviesByCategorieDecoration>
    <TitleCategory>{titleCategory}</TitleCategory>
    <MovieContainer />
    <Button positionX = "45%" positionY = "5%" size = "14px">voir plus</Button>
  </MoviesByCategorieDecoration>
);
export default MoviesByCategorie;
