import CardMovie from "../cardMovie/CardMovie";
import MovieContainerDecoration from "./MovieContainerDecoration";
import newMovie from "../../../assets/card/newMovies.jpg";
import newMovie2 from "../../../assets/card/newMovies2.jpg";
import newMovie3 from "../../../assets/card/newMovies3.jpg";
import newMovie4 from "../../../assets/card/newMovies4.jpg";
import newMovie5 from "../../../assets/card/newMovies5.png";

const MovieContainer = ({ widthImage, widthTitle, heightImage }) => {
  return (
    <MovieContainerDecoration>
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Game of Thrones"
        urlImageMovie={newMovie}
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Us"
        urlImageMovie={newMovie2}
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Free Guy"
        urlImageMovie={newMovie3}
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="1917"
        urlImageMovie={newMovie4}
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Spiderman Homecoming"
        urlImageMovie={newMovie5}
      />
    </MovieContainerDecoration>
  );
};

export default MovieContainer;
