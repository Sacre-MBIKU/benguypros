import CardMovie from "../../../components/shared/cardMovie/CardMovie";
import MovieContainerDecoration from "../../../components/shared/movieContainer/MovieContainerDecoration";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import SimilarCinemaDecoration from "./SimilarCinemaDecoration";
import newMovie from "../../../assets/backgrounds/releaser.jpg";
import ArrowLeft from "../../../components/shared/paginationNavBar/ArrowLeft";
import ArrowRight from "../../../components/shared/paginationNavBar/ArrowRight";

const SimilarCinema = () => {
  return (
    <SimilarCinemaDecoration>
      <TitleCategory positionX="0" positionY="0" size="22px">
        Affiches smilaires
      </TitleCategory>
      <ArrowLeft />
      <MovieContainerDecoration similarCinema>
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle = "10%"
          positionXTitle = "10%"
          titleMovie="Game of Thrones"
          urlImageMovie={newMovie}
        />
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle = "10%"
          positionXTitle = "10%"
          titleMovie="Us"
          urlImageMovie={newMovie}
        />
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle = "10%"
          positionXTitle = "10%"
          titleMovie="Free Guy"
          urlImageMovie={newMovie}
        />
      </MovieContainerDecoration>
      <ArrowRight />
    </SimilarCinemaDecoration>
  );
};

export default SimilarCinema;
