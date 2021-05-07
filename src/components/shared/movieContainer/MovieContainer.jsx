import CardMovie from "../cardMovie/CardMovie";
import MovieContainerDecoration from "./MovieContainerDecoration";
import newMovie from "../../../assets/backgrounds/releaser.jpg";

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
        urlImageMovie={newMovie}
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Free Guy"
        urlImageMovie={newMovie}
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="1917"
        urlImageMovie={newMovie}
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Spiderman Homecoming"
        urlImageMovie={newMovie}
      />
    </MovieContainerDecoration>
  );
};

export default MovieContainer;
