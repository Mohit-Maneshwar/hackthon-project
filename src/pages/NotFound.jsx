// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
      >
        Go to Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
