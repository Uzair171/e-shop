import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { clearSearchQuery } from "../redux/searchSlice";
import { useState } from "react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addtoCart(product));
    dispatch(clearSearchQuery());

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price + "$"}</p>

      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all cursor-pointer"
        onClick={handleAddToCart}
      >
        <span className="group-hover:hidden">{isAdded ? "✓" : "+"}</span>
        <span className="hidden group-hover:block">
          {isAdded ? "Added" : "Add to Cart"}
        </span>
      </div>
    </div>
  );
}
