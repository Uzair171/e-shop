import { Categories } from "../assets/mockData";
import heroSection from "../assets/images/hero-section.jpg";
import InfoSection from "../components/InfoSection.jsx";
import CategorySection from "../components/CategorySection.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProducts } from "../assets/mockData";
import { setProducts } from "../redux/productSlice.jsx";
import ProductCard from "../components/productCard.jsx";
import Shop from "./Shop.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(allProducts));
  }, []);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="spave-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium "
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0  relative">
          <img
            src={heroSection}
            alt="Shopping lady"
            className="h-full w-full"
          />
          <div className="absolute top-16 left-8 ">
            <h2 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold">
              WELCOME TO e-SHOP
            </h2>
            <p className="text-sm mt-2.5 font-bold text-gray-800">
              MILLION+ PRODUCTS
            </p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div>
        <InfoSection />
        <CategorySection />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center ">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.products.slice(0, 5).map((popularProduct, index) => {
            return <ProductCard product={popularProduct} key={index} />;
          })}
        </div>
      </div>
      <Shop />
    </div>
  );
}
