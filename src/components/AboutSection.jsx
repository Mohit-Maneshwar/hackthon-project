import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RvcmV8ZW58MHx8MHx8fDA%3D"
            alt="About ManeStore"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            About ManeStore
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-inter leading-relaxed mb-4">
            ManeStore is where fashion-forward creativity meets premium quality.
            We blend minimalism, bold styles, and tech to deliver more than
            just products — we deliver experience.
          </p>
          <p className="text-zinc-300 text-base md:text-lg font-inter leading-relaxed mb-6">
            From everyday essentials to statement pieces, everything is designed
            with passion and precision to keep you moving boldly through life.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
