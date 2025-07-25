import { motion } from "framer-motion";

const FAQs = () => {
  return (
    <motion.div
      className="w-full min-h-screen px-4 py-16 bg-black text-white mt-[2rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 font-playfair text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-white">What products do you offer?</h2>
            <p className="text-gray-400 mt-2">
              ManeStore offers a wide variety of lifestyle essentials — from fashion and electronics to accessories and homeware.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">How can I track my order?</h2>
            <p className="text-gray-400 mt-2">
              Once your order ships, we send a tracking link to your registered email. You can also check the status from your account dashboard.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Do you offer international shipping?</h2>
            <p className="text-gray-400 mt-2">
              At the moment, we only ship within India. International shipping will be launched soon!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">What payment methods are accepted?</h2>
            <p className="text-gray-400 mt-2">
              We accept UPI, credit/debit cards, net banking, wallets, and Cash on Delivery (COD) at selected pincodes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">What is your return policy?</h2>
            <p className="text-gray-400 mt-2">
              Products can be returned or exchanged within 7 days of delivery, if they are unused and in original condition.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">How can I contact customer support?</h2>
            <p className="text-gray-400 mt-2">
              You can reach us via our <a href="/contact" className="text-blue-400 underline">Contact Page</a> or email us at <span className="text-blue-400">support@manestore.com</span>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQs;
