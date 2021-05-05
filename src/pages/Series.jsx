import HeroSectionSeries from "../components/shared/cinema/heroSection/HeroSectionSeries";
import Footer from "../layouts/home/footer/Footer";
import MoviesByCategory from "../layouts/home/moviesByCategorie/MoviesByCategory";

const Movies = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeroSectionSeries />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" />
      <Footer />
    </div>
  );
};

export default Movies;
