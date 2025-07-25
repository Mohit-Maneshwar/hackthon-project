import { motion } from "framer-motion";
import FloatingGeometries from "../components/FloatingGeometries";
import TestimonialsSection from "../components/TestimonialsSection";

const About = () => {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <FloatingGeometries />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold font-playfair mb-4"
        >
          About ManeStore
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto"
        >
          We’re more than just a store — we’re your one-stop lifestyle
          destination. At{" "}
          <span className="text-white font-semibold">ManeStore</span>, we
          offer a wide range of products — from fashion and electronics to home
          essentials — all designed to deliver{" "}
          <span className="text-white font-semibold">
            quality, style, and convenience
          </span>{" "}
          in one seamless shopping experience.
        </motion.p>
      </div>
    </section>

      {/* Story Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-4">
            Our Story
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Founded in 2024, we started with a simple vision — to blend comfort
            with style. With passion and attention to detail, we’ve built a
            brand that values trust, quality, and innovation. Whether you're
            dressing up or keeping it casual, we’ve got you covered.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="About Illustration"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-8">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality First",
                desc: "We never compromise on product quality.",
              },
              {
                title: "Customer Love",
                desc: "Our customers are our top priority.",
              },
              {
                title: "Fast Delivery",
                desc: "Lightning-fast shipping across India.",
              },
              {
                title: "Secure Payment",
                desc: "Trusted gateways for smooth checkout.",
              },
              {
                title: "Style-Driven",
                desc: "Trendy, modern, and made to impress.",
              },
              {
                title: "Sustainability",
                desc: "We care for the planet, always.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 bg-gray-800/50 rounded-lg border border-white/10 shadow transition"
              >
                <h3 className="text-lg font-semibold mb-2">{val.title}</h3>
                <p className="text-sm text-gray-400">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-10">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Mohit Maneshwar",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Priya Singh",
              role: "Creative Director",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Ravi Verma",
              role: "Tech Lead",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-gray-800/40 p-5 rounded-xl shadow"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <TestimonialsSection />

      {/* Achievements */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-8">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-yellow-400">
          {[
            { number: "5K+", label: "Happy Customers" },
            { number: "1K+", label: "Orders Delivered" },
            { number: "500+", label: "Product SKUs" },
            { number: "99%", label: "Positive Feedback" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-sm text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-gray-950 text-center border-t border-gray-800">
        <h2 className="text-2xl font-semibold font-playfair mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Stay updated with exclusive offers, product launches & more!
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
      
    </div>
  );
};

export default About;
