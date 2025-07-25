import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { useEffect } from "react";
import { initLenis } from "./utils/lenis";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
