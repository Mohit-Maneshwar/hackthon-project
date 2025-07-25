import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";


const Home = () => {
  return (
    <div className="w-100 overflow-hidden">
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
