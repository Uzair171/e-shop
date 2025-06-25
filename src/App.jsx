import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { setProducts } from "./redux/productSlice";
import { allProducts } from "./assets/mockData.js";

export default function App() {
  const [order, setOrder] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(allProducts));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckOut setOrder={setOrder} />} />
        <Route
          path="/checkout/order-confirmation"
          element={<OrderConfirmation order={order} />}
        />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
