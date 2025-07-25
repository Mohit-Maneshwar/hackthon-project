import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-playfair">About Us</h3>
          <p className="text-sm text-gray-400">
            We bring you modern, stylish, and quality products with smooth user experience and fast delivery.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition duration-300">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-playfair">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/faq" className="hover:text-white transition duration-300">FAQs</Link></li>
            <li><Link to="/shipping-returns" className="hover:text-white transition duration-300">Shipping & Returns</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-white transition duration-300">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-playfair">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/mohit.maneswar.7?mibextid=ZbWKwL" className="hover:text-blue-400 transition duration-300 text-lg">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/mohit__mane__145/" className="hover:text-pink-500 transition duration-300 text-lg">
              <FaInstagram />
            </a>
            <a href="https://x.com/" className="hover:text-sky-400 transition duration-300 text-lg">
              <FaTwitter />
            </a>
            <a href="https://github.com/Mohit-Maneshwar" className="hover:text-gray-300 transition duration-300 text-lg">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mane's Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
