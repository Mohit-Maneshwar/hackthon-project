import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Smart Watch",
    description: "Stay connected, track fitness, and look stylish.",
    image: "https://via.placeholder.com/300x200.png?text=Smart+Watch",
  },
  {
    id: 2,
    title: "Wireless Earbuds",
    description: "Enjoy wireless freedom with amazing sound.",
    image: "https://via.placeholder.com/300x200.png?text=Earbuds",
  },
  {
    id: 3,
    title: "Gaming Headset",
    description: "Crystal-clear audio for immersive gaming.",
    image: "https://via.placeholder.com/300x200.png?text=Headset",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Products
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-zinc-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
