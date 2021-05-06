import Footer from "../layouts/home/footer/Footer";
import HeroSection from "../layouts/home/heroSection/HeroSection";
import MoviesByCategory from "../layouts/home/homeMoviesByCategorie/MoviesByCategory";

const Home = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeroSection />
      <MoviesByCategory
        widthImage="100%"
        widthTitle="100%"
        heightImage="350px"
        titleCategory="Nouveautés"
      />
      <MoviesByCategory
        widthImage="100%"
        widthTitle="100%"
        heightImage="350px"
        titleCategory="Populaires"
      />
      <MoviesByCategory
        widthImage="100%"
        widthTitle="100%"
        heightImage="350px"
        titleCategory="A venir"
        displayScroll="none"
      />
      
      <Footer />
    </div>
  );
};

export default Home;
