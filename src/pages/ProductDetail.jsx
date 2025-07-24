import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-zinc-950 text-white">
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-white rounded-xl p-8"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-rose-400 font-semibold text-xl mb-4">${product.price}</p>
          <p className="text-zinc-400 mb-6">{product.description}</p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-rose-500 hover:bg-rose-600 transition px-6 py-2 rounded-md text-white font-semibold shadow-md"
            >
              Add to Cart 🛒
            </button>

            <Link
              to="/products"
              className="border border-zinc-400 hover:bg-zinc-800 transition px-6 py-2 rounded-md text-white font-medium"
            >
              ← Back to Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetail;
