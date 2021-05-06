import CardMovie from "../cardMovie/CardMovie";
import MovieContainerDecoration from "./MovieContainerDecoration";
import newMovie from "../../../assets/card/newMovies4.jpg";
import newMovie2 from "../../../assets/card/newMovies2.jpg";
import newMovie3 from "../../../assets/card/newMovies3.jpg";

const MovieContainer = ({
  widthImage,
  widthTitle,
  heightImage,
}) => {
  return (
    <MovieContainerDecoration>
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Game of Thrones"
        urlImageMovie={newMovie}
        cardHeight = "430px"
        positionXTitle = "-9px"
        cardWidth = "250px"
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Us"
        urlImageMovie={newMovie2}
        cardHeight = "430px"
        positionXTitle = "-9px"
        cardWidth = "250px"
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Free Guy"
        urlImageMovie={newMovie3}
        cardHeight = "430px"
        positionXTitle = "-9px"
        cardWidth = "250px"
      />
      <CardMovie
        widthTitle={widthTitle}
        heightImage={heightImage}
        widthImage={widthImage}
        titleMovie="Free Guy"
        urlImageMovie={newMovie3}
        cardHeight = "430px"
        positionXTitle = "-9px"
        cardWidth = "250px"
      />
    </MovieContainerDecoration>
  );
};

export default MovieContainer;
