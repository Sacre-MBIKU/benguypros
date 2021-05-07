import CardMovie from "../../../components/shared/cardMovie/CardMovie";
import MovieContainerDecoration from "../../../components/shared/movieContainer/MovieContainerDecoration";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import SimilarCinemaDecoration from "./SimilarCinemaDecoration";
import newMovie from "../../../assets/backgrounds/project 32.jpg";
import newMovie2 from "../../../assets/backgrounds/project 33.jpg";
import newMovie3 from "../../../assets/backgrounds/project 34.jpg";
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
          urlImageMovie={newMovie2}
        />
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle = "10%"
          positionXTitle = "10%"
          titleMovie="Free Guy"
          urlImageMovie={newMovie3}
        />
      </MovieContainerDecoration>
      <ArrowRight />
    </SimilarCinemaDecoration>
  );
};

export default SimilarCinema;
