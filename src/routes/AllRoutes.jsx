import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import FAQs from "../pages/FAQs";
import Returns from "../pages/Returns";
import Terms from "../pages/TermsOfService";
import PolicyPage from "../pages/PolicyPage"; // ✅ renamed
import NotFound from "../pages/NotFound"; // 404 page

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/faq" element={<FAQs />} />
      <Route path="/shipping-returns" element={<Returns />} />
      <Route path="/terms-of-service" element={<Terms />} />
      <Route path="/privacy-policy" element={<PolicyPage />} /> {/* ✅ updated */}
      <Route path="*" element={<NotFound />} /> {/* 404 */}
    </Routes>
  );
};

export default AllRoutes;
