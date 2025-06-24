import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/productCard";

export default function Shop() {
  const products = useSelector((state) => state.product);
  return (
    <div className="m-5">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center px-4 md:px-16 lg:px-24 ">
          Shop
        </h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.products.map((popularProduct, index) => {
            return <ProductCard product={popularProduct} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
