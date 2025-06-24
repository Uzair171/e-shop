import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
