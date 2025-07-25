import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingGrid from "./FloatingGrid";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/products");
  };

  return (
    <section className="relative min-h-screen w-full text-white bg-black overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <FloatingGrid />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight"
        >
          MANESTORE <br className="block md:hidden" />
          <span className="font-semibold"> & FREEDOM</span>
        </motion.h1>

        <p className="max-w-lg text-sm sm:text-base text-gray-300 leading-relaxed">
          Explore Independent Style by Embracing Creativity with Our Exclusive Designer Apparel
        </p>

        <button
          onClick={handleLearnMore}
          className="mt-4 sm:mt-6 border border-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
        >
          Shop Now
        </button>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 md:px-20">
        {[
          {
            title: "INDEPENDENCY",
            desc: "Explore the creativity of independent designers...",
          },
          {
            title: "UNIQUITY",
            desc: "Discover the charm of unique pieces that stand out effortlessly.",
          },
          {
            title: "QUALITY",
            desc: "Experience unparalleled craftsmanship and premium fabrics.",
          },
          {
            title: "SUSTAINABILITY",
            desc: "Embrace eco-conscious fashion choices for a better tomorrow.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] p-4 sm:p-5 rounded-lg shadow text-left hover:bg-[#222] transition"
          >
            <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
