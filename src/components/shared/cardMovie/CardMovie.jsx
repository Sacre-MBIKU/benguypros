import CardMovieDecoration from "./CardMovieDecoration";
import ImageMovie from "./ImageMovie";
import TitleMovie from "./TitleMovie";

const CardMovie = ({
  titleMovie,
  urlImageMovie,
  widthImage,
  widthTitle,
  heightImage,
  cardHeight,
  positionXTitle, 
  cardWidth
}) => {
  return (
    <CardMovieDecoration cardWidth = {cardWidth} cardHeight={cardHeight}>
      <ImageMovie
        width={widthImage}
        height={heightImage}
        urlImageMovie={urlImageMovie}
        titleMovie="Spiderman HomeComing"
        
      />
      <TitleMovie positionXTitle= {positionXTitle} width={widthTitle}> {titleMovie}</TitleMovie>
    </CardMovieDecoration>
  );
};

export default CardMovie;
