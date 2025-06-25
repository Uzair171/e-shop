import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Model from "./model";
import Login from "./login";
import Register from "./Register";

export default function Navbar() {
  const items = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const closeModal = () => {
    setIsModelOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 md:px-14 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to={"/"}>e-Shop</Link>
        </div>

        {/* SEARCH */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex-1 mx-4 flex"
        >
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border py-2 px-4"
          />
          <button type="submit">
            <FaSearch className="absolute top-3 right-3 text-red-500 cursor-pointer" />
          </button>
        </form>

        {/* ICONS */}
        <div className="flex items-center space-x-4">
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="text-lg" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block" onClick={openLogin}>
            Login/Register
          </button>
          <button className="block md:hidden">
            <FaUser onClick={openLogin} />
          </button>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to={"/shop"} className="hover:underline">
          Shop
        </Link>
        <Link to={"/about"} className="hover:underline">
          About
        </Link>
        <Link to={"/contact"} className="hover:underline">
          Contact
        </Link>
      </div>

      <Model isModelOpen={isModelOpen} setIsModelOpen={closeModal}>
        {isLogin ? (
          <Login openSignUp={openSignUp} closeModal={closeModal} />
        ) : (
          <Register openLogin={openLogin} closeModal={closeModal} />
        )}
      </Model>
    </nav>
  );
}
