import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div
      className="w-full min-h-screen px-6 py-16 bg-[#0f0f0f] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 font-playfair text-center">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-400 text-lg">
          <p>
            By accessing or using <span className="text-white font-medium">ManeStore</span>, you agree to comply with all applicable terms,
            conditions, and policies. These terms govern your use of our site and services.
          </p>

          <p>
            You must be at least 18 years old to place an order. By purchasing, you confirm that all information provided is accurate and truthful.
          </p>

          <p>
            All products and prices are subject to change without prior notice. We reserve the right to update, modify, or discontinue any service or item.
          </p>

          <p>
            Orders may be canceled at our discretion if fraudulent activity is suspected.
            Refunds and returns are subject to our Shipping & Returns policy.
          </p>

          <p>
            We are not liable for any delays, damages, or losses due to third-party shipping carriers or unforeseen circumstances.
          </p>

          <p>
            By using our platform, you accept these terms. For questions or concerns, please contact us through our <a href="/contact" className="text-blue-400 underline">Contact Page</a>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
