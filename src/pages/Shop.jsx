import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { allProducts } from "../assets/mockData";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    if (products.products.length === 0) {
      dispatch(setProducts(allProducts));
    }
  }, [dispatch, products.products.length]);

  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.products.map((popularProduct, index) => (
          <ProductCard product={popularProduct} key={index} />
        ))}
      </div>
    </div>
  );
}
