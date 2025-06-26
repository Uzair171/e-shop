import { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Model from "./Model";
import Login from "./Login.jsx";
import Register from "./Register";
import { setSearchQuery, clearSearchQuery } from "../redux/searchSlice";

export default function Navbar() {
  const items = useSelector((state) => state.cart.products);
  const query = useSelector((state) => state.search.query);

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  useEffect(() => {
    dispatch(setSearchQuery(searchTerm));
    if (searchTerm.trim() && location.pathname !== "/product") {
      navigate("/product");
    }
  }, [searchTerm, dispatch, navigate, location.pathname]);

  const clearSearch = () => {
    setSearchTerm("");
    dispatch(clearSearchQuery());
  };

  const openSignUp = () => {
    clearSearch();
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    clearSearch();
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const closeModal = () => {
    setIsModelOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 md:px-14 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to={"/"} onClick={clearSearch}>
            e-Shop
          </Link>
        </div>

        {/* SEARCH */}
        <div className="relative flex-1 mx-4">
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border py-2 px-4"
          />
          <FaSearch className="absolute top-3 right-3 text-red-500" />
        </div>

        {/* ICONS */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              clearSearch();
              navigate("/cart");
            }}
            className="relative"
          >
            <FaShoppingCart className="text-lg" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>

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
        <Link to={"/"} onClick={clearSearch} className="hover:underline">
          Home
        </Link>
        <Link to={"/shop"} onClick={clearSearch} className="hover:underline">
          Shop
        </Link>
        <Link to={"/about"} onClick={clearSearch} className="hover:underline">
          About
        </Link>
        <Link to={"/contact"} onClick={clearSearch} className="hover:underline">
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
