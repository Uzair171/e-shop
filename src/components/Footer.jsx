import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearchQuery } from "../redux/searchSlice";

export default function Footer() {
  const dispatch = useDispatch();

  const clearSearch = () => {
    dispatch(clearSearchQuery());
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p className="mt-4">
            Your one-stop for all your needs. Shop with us and experience the
            best online shopping experience.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to={"/"} onClick={clearSearch} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/shop"}
                onClick={clearSearch}
                className="hover:underline"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={clearSearch}
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={clearSearch}
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg border cursor-pointer hover:bg-red-700"
              onClick={(e) => e.preventDefault()}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 e-Shop. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
