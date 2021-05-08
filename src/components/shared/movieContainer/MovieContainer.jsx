import CardMovie from "../cardMovie/CardMovie";
import MovieContainerDecoration from "./MovieContainerDecoration";
const newMovie =
"https://image.tmdb.org/t/p/w300//nj01hspawPof0mJmlgfjuLyJuRN.jpg";

const MovieContainer = () => {
  return (
    <MovieContainerDecoration>
      <CardMovie
        titleMovie="Game of Thrones"
        urlImageMovie={newMovie}
      />
      <CardMovie
        titleMovie="Us"
        urlImageMovie={
          newMovie
        }
      />
      <CardMovie
        titleMovie="Free Guy"
        urlImageMovie={
          newMovie
        }
      />
      <CardMovie
        titleMovie="1917"
        urlImageMovie={
          newMovie
        }
      />
      <CardMovie
        titleMovie="Spiderman Homecoming"
        urlImageMovie={newMovie}
      />
    </MovieContainerDecoration>
  );
};

export default MovieContainer;
