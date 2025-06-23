import { categories } from "../assets/categoryData";
export default function CategorySection() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="relative h-64 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={category.image}
              alt={categories.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-20 left-12">
              <p className="text-xl font-bold">{category.title}</p>
              <p className="text-gray-600 underline">View All</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
