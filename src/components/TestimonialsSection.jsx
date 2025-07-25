import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Mehta",
    review:
      "Absolutely loved the quality! Fast delivery and awesome customer service. Will shop again!",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    review:
      "Stylish and comfortable products at reasonable prices. Highly recommend this store!",
    rating: 4,
  },
  {
    name: "Raj Verma",
    review:
      "Great experience. The products matched the description and looked even better in person!",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
          Happy Customers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <p className="italic text-lg mb-4">“{testimonial.review}”</p>
              <div className="flex gap-1 justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
