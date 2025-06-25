import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Model from "./model";
import Login from "./login";
import Register from "./Register";

export default function Navbar() {
  const items = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false); // Set to false initially
  const [isLogin, setIsLogin] = useState(true);

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  return (
    <nav className="bg-white shadow-xl">
      <div className="container mx-auto px-4 md:px-14 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to={"/"}>e-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search Products"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="text-lg" />
            {items.length > 0 && (
              <span className="absolute top-4 text-xs font-bold rounded-full text-red-600">
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

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to={"/shop"} className="hover:underline">
          Shop
        </Link>
        <Link to={"/"} className="hover:underline">
          About
        </Link>
        <Link to={"/"} className="hover:underline">
          Contact
        </Link>
      </div>

      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login
            openSignUp={openSignUp}
            closeModal={() => setIsModelOpen(false)}
          />
        ) : (
          <Register
            openLogin={openLogin}
            closeModal={() => setIsModelOpen(false)}
          />
        )}
      </Model>
    </nav>
  );
}
