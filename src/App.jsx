import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import { useState } from "react";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";

export default function App() {
  const [order, setOrder] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<CheckOut setOrder={setOrder} />} />
        <Route
          path={"/checkout/order-confirmation"}
          element={<OrderConfirmation order={order} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
