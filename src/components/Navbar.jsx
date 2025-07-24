import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  // 🧮 Calculate cart item count safely
  const cartCount = (cart || []).reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* 🔰 Brand Logo */}
        <Link to="/" className="text-2xl font-bold text-rose-500">
          ShopifyX
        </Link>

        {/* 🖥️ Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                    : "hover:text-rose-400 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* 🛒 Cart Icon (Desktop) */}
          <li>
            <Link
              to="/cart"
              className="relative flex items-center hover:text-rose-400 transition"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-rose-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* 📱 Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Navigation Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-zinc-900 border-t border-zinc-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-500 border-b border-rose-500 pb-1"
                    : "hover:text-rose-400 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* 🛒 Cart Icon (Mobile) */}
          <li>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="relative flex items-center hover:text-rose-400 transition"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-rose-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
