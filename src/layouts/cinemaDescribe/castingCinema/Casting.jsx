import CardMovie from "../../../components/shared/cardMovie/CardMovie";
import MovieContainerDecoration from "../../../components/shared/movieContainer/MovieContainerDecoration";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import CastingDecoration from "./CastingDecoration";
import newMovie from "../../../assets/backgrounds/releaser.jpg";

const Casting = () => {
  return (
    <CastingDecoration>
      <TitleCategory positionX="0" positionY="0" size="22px">
        Casting
      </TitleCategory>
      <MovieContainerDecoration casting>
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle="10%"
          positionXTitle="10%"
          titleMovie="Game of Thrones"
          urlImageMovie={newMovie}
        />
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle="10%"
          positionXTitle="10%"
          titleMovie="Us"
          urlImageMovie={newMovie}
        />
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle="10%"
          positionXTitle="10%"
          titleMovie="Free Guy"
          urlImageMovie={newMovie}
        />
        <CardMovie
          widthTitle="170px"
          heightImage="230px"
          widthImage="170px"
          positionYTitle="10%"
          positionXTitle="10%"
          titleMovie="1917"
          urlImageMovie={newMovie}
        />
      </MovieContainerDecoration>
    </CastingDecoration>
  );
};

export default Casting;
