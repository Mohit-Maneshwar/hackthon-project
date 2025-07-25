import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Contact = () => {
  return (
    <div className="pt-[3rem]">
      <section className="min-h-screen bg-gray-950 text-white py-16 px-6 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 font-playfair">
              Contact ManeStore
            </h2>
            <p className="text-gray-400 mb-8">
              We'd love to hear from you! Whether you have a question about
              products, pricing, or anything else — our team is ready to help.
            </p>

            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white">📍 Address</h4>
                <p>123 Mane Street, Delhi, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">📞 Phone</h4>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">✉️ Email</h4>
                <p>support@manestore.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-1 text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
