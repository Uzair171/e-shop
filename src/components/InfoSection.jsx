import { infoItems } from "../assets/infoData.jsx";

export default function InfoSection() {
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((infoCard, index) => {
          return (
            <div
              key={index}
              className="flex flex-col text-center p-4 items-center border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {infoCard.icon}
              <h3 className="mt-4 text-xl font-semibold "> {infoCard.title}</h3>
              <p className="mt-4 text-gray-600">{infoCard.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
