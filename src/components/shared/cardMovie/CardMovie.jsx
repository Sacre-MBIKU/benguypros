import { FaInfoCircle } from "react-icons/fa";
import CardMovieDecoration from "./CardMovieDecoration";
import ImageMovie from "./ImageMovie";
import TitleMovie from "./TitleMovie";
const infoIcon = <FaInfoCircle />;

const CardMovie = ({
  urlImageMovie,
  widthImage,
  widthTitle,
  heightImage,
  cardHeight,
  positionXTitle,
  positionYTitle,
  cardWidth,
  isMovieDisplayed,
}) => {
  return (
    <CardMovieDecoration
      isMovieDisplayed={isMovieDisplayed}
      cardWidth={cardWidth}
      cardHeight={cardHeight}
    >
      <ImageMovie
        isMovieDisplayed={isMovieDisplayed}
        width={widthImage}
        height={heightImage}
        urlImageMovie={urlImageMovie}
        titleMovie="Spiderman HomeComing"
        isTitleMovieDisplayed
      />
      <TitleMovie
        positionYTitle={positionYTitle}
        positionXTitle={positionXTitle}
        width={widthTitle}
        sizeTitle="2rem"
        isTitleMovieDisplayed
      >
        {" "}
        {infoIcon}
      </TitleMovie>
    </CardMovieDecoration>
  );
};

export default CardMovie;
