import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6 bg-zinc-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Elevate Your Style with <span className="text-rose-500">Tech</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-8">
          Discover gadgets that fit your lifestyle.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-rose-500 px-6 py-3 rounded-xl hover:bg-rose-600 transition">
            Shop Now
          </button>
          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
