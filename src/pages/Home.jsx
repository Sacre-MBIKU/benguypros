import Footer from '../layouts/home/footer/Footer';
import HeroSection from '../layouts/home/heroSection/HeroSection';
import MoviesByCategory from '../layouts/home/moviesByCategorie/MoviesByCategory';

const Home = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
            <HeroSection />
            <MoviesByCategory titleCategory="Nouveautés"  />
            <MoviesByCategory titleCategory="Populaires" />
            <MoviesByCategory titleCategory="A venir" displayScroll = "none"/>
            <Footer />
    </div>
  );
};

export default Home;
