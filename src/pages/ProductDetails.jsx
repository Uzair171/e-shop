import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function ProductDetails() {
  const query = useSelector((state) => state.search.query);
  const allProducts = useSelector((state) => state.product.products);

  const filteredProducts = allProducts.filter(
    (product) =>
      typeof product.name === "string" &&
      product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">
        Search Results for:{" "}
        <span className="text-red-600">"{query || "All Products"}"</span>
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No matching products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
