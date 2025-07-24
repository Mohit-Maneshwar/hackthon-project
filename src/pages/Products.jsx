import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Add this

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      {loading ? (
        <p className="text-center text-zinc-400">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <motion.div
                className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-contain bg-white p-4 rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-1 truncate">{item.title}</h3>
                <p className="text-rose-400 font-bold text-sm mb-1">${item.price}</p>
                <p className="text-zinc-400 text-sm line-clamp-2">{item.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
