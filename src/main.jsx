import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initLenis } from "./utils/lenis";
import { CartProvider } from "./context/CartContext";

const Root = () => {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
