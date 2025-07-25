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
            <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Shop</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">About</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-playfair">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition duration-300 cursor-pointer">FAQs</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-playfair">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition duration-300 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400 transition duration-300 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300 text-lg">
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
