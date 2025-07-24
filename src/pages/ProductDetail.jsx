import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        Product not found!
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-20 bg-zinc-950 text-white flex justify-center items-center">
      <motion.div
        className="max-w-4xl w-full bg-zinc-900 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-contain bg-white p-6 rounded-lg"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-rose-400 font-bold text-xl mb-2">${product.price}</p>
          <p className="text-sm text-zinc-400 mb-4">Category: {product.category}</p>
          <p className="text-zinc-300 mb-6">{product.description}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-semibold transition-all"
              onClick={() => alert("Added to cart (dummy for now)")}
            >
              🛒 Add to Cart
            </button>
            <button
              className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-full font-semibold transition-all"
              onClick={() => navigate("/products")}
            >
              🔙 Back to Products
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDetail;
