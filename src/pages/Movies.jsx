import HeroSectionCinema from "../components/shared/cinema/heroSection/HeroSection";
import HeaderCinema from "../layouts/HeaderCinema";
import Footer from "../layouts/home/footer/Footer";
import MoviesByCategory from "../layouts/home/moviesByCategorie/MoviesByCategory";

const Movies = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeroSectionCinema />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" />
      <Footer />
    </div>
  );
};

export default Movies;
