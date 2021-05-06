import HeroSectionSeries from "../components/shared/cinema/heroSection/HeroSectionSeries";
import Footer from "../layouts/home/footer/Footer";
import MoviesByCategory from "../layouts/cinema/moviesByCategorie/MoviesByCategory";

const Movies = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeroSectionSeries />
      <MoviesByCategory titleCategory="Beauté" />
      <MoviesByCategory titleCategory="Poupée" />
      <MoviesByCategory titleCategory="Beauté" />
      <MoviesByCategory titleCategory="Poupée" />
      <MoviesByCategory titleCategory="Beauté" />
      <MoviesByCategory titleCategory="Poupée" />
      <MoviesByCategory titleCategory="Beauté" />
      <MoviesByCategory titleCategory="Poupée" />
      <MoviesByCategory titleCategory="Beauté" />
      <MoviesByCategory titleCategory="Poupée" />
      <MoviesByCategory titleCategory="Beauté" />
      <MoviesByCategory titleCategory="Poupée" />
      <Footer />
    </div>
  );
};

export default Movies;
