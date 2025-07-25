import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle and pick 6 random products
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 6));
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <section className="relative min-h-screen px-6 py-20 text-white bg-black overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            Discover New Picks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 text-white rounded-xl overflow-hidden shadow-lg border border-white/10 backdrop-blur-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain bg-white p-4"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-zinc-300 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
