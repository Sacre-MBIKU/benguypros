import CardMovie from "../cardMovie/CardMovie";
import MovieContainerDecoration from "./MovieContainerDecoration";

const MovieContainer = () => {
  return <MovieContainerDecoration>
      <CardMovie/>
      <CardMovie/>
      <CardMovie/>
  </MovieContainerDecoration>;
};

export default MovieContainer;
