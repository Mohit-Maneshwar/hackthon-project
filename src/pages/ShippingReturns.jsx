import { motion } from "framer-motion";

const ShippingReturns = () => {
  return (
    <motion.div
      className="w-full min-h-screen px-4 py-16 bg-[#0f0f0f] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 font-playfair text-center">
          Shipping & Returns
        </h1>

        <div className="space-y-6 text-gray-400 text-lg">
          <div>
            <h2 className="text-xl font-semibold text-white">Shipping Policy</h2>
            <p className="mt-2">
              All orders are processed within <span className="text-white font-medium">1–2 business days</span>. 
              Estimated delivery time ranges between <span className="text-white font-medium">3–7 days</span> depending on your location.
            </p>
            <p className="mt-2">
              Once your package ships, you will receive a tracking number via email. 
              We currently ship only within India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mt-8">Return Policy</h2>
            <p className="mt-2">
              If you're not satisfied with your purchase, you may request a return within 
              <span className="text-white font-medium"> 7 days</span> of delivery.
            </p>
            <p className="mt-2">
              To be eligible for a return, items must be <span className="text-white font-medium">unused, in original packaging</span>, 
              and accompanied by a proof of purchase.
            </p>
            <p className="mt-2">
              Once your return is received and inspected, we will notify you about your refund or replacement process.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mt-8">Need Help?</h2>
            <p className="mt-2">
              Reach out to us via our <a href="/contact" className="text-blue-400 underline">Contact Page</a> 
              or email us directly at <span className="text-blue-400">support@manestore.com</span>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShippingReturns;
