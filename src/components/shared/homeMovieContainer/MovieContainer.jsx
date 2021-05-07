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
        cardHeight="430px"
        positionXTitle="-9px"
        cardWidth="250px"
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Us"
        urlImageMovie={newMovie}
        cardHeight="430px"
        positionXTitle="-9px"
        cardWidth="250px"
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Free Guy"
        urlImageMovie={newMovie}
        cardHeight="430px"
        positionXTitle="-9px"
        cardWidth="250px"
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Free Guy"
        urlImageMovie={newMovie}
        cardHeight="430px"
        positionXTitle="-9px"
        cardWidth="250px"
      />
    </MovieContainerDecoration>
  );
};

export default MovieContainer;
