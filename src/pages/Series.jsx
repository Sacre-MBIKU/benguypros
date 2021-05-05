import Footer from "../layouts/home/footer/Footer";
import HeroSection from "../layouts/home/heroSection/HeroSection";
import MoviesByCategory from "../layouts/home/moviesByCategorie/MoviesByCategory";

const Series = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeroSection />
      <MoviesByCategory titleCategory="Séries" />
      <MoviesByCategory titleCategory="Séries" />
      <Footer />
    </div>
  );
};

export default Series;
