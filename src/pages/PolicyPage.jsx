import { motion } from "framer-motion";

const PolicyPage = () => {
  return (
    <motion.div
      className="w-full min-h-screen px-6 py-16 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 font-playfair text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-400 text-lg">
          <p>
            At <span className="text-white font-medium">ManeStore</span>, your privacy is extremely important to us.
            We collect only the minimum personal information required to provide a smooth shopping experience.
          </p>

          <p>
            This includes your name, email, shipping address, and payment details—
            all of which are securely processed and encrypted using industry-standard technology.
          </p>

          <p>
            We never sell, trade, or rent your personal data to third parties.
            Your information is used strictly for order processing, customer service, and improving our platform.
          </p>

          <p>
            We use cookies to personalize content, analyze traffic, and deliver a better user experience.
            You can manage cookie preferences in your browser settings.
          </p>

          <p>
            You may request access to your personal data or request deletion at any time.
            Just reach out to us via our <a href="/contact" className="text-blue-400 underline">Contact Page</a>.
          </p>

          <p>
            By using our website, you agree to the terms outlined in this Privacy Policy.
            We may update this policy occasionally, so please check back for the latest version.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PolicyPage;
