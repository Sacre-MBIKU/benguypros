import CardMovieDecoration from "./CardMovieDecoration";
import ImageMovie from "./ImageMovie";
import TitleMovie from "./TitleMovie";
import newMovie from "../../../assets/card/newMovies.jpg";

const CardMovie = ({titleMovie, urlImageMovie}) => {
  return (
    <CardMovieDecoration>
      <ImageMovie urlImageMovie={newMovie} titleMovie="Spiderman HomeComing" />
      <TitleMovie>Game of Thrones</TitleMovie>
    </CardMovieDecoration>
  );
};

export default CardMovie;
