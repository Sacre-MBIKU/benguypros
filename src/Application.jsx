import HeroSection from "./layouts/home/heroSection/HeroSection";
import MoviesByCategory from "./layouts/home/moviesByCategorie/MoviesByCategory";

const Application = () => {
  return (
    <div style = {{
        overflowX : "hidden"
    }}>
      <HeroSection />
      <MoviesByCategory />
      <MoviesByCategory />
    </div>
  );
};

export default Application;
