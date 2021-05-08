import HeroSectionCinema from "../components/shared/cinema/heroSection/HeroSection";
import Footer from "../layouts/home/footer/Footer";
import MoviesByCategory from "../layouts/cinema/moviesByCategorie/MoviesByCategory";
import NavBarCategory from "../components/shared/navBarCategory/NavBarCategory";

const Movies = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeroSectionCinema />
      <NavBarCategory />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <MoviesByCategory titleCategory="Bay" />
      <MoviesByCategory titleCategory="Bey" displayScroll= "none" />
      <Footer />
    </div>
  );
};

export default Movies;
