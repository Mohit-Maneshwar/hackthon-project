import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { useEffect } from "react";
import { initLenis } from "./utils/lenis";

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
