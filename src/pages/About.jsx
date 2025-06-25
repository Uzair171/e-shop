import InfoSection from "../components/InfoSection";

export default function About() {
  return (
    <div className="min-h-screen  py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About e-Shop</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <span className="font-semibold text-red-600">e-Shop</span>, we are
          passionate about bringing you the best shopping experience right from
          the comfort of your home. Whether you're looking for the latest
          fashion, electronics, or daily essentials — we've got you covered with
          quality products and top-notch service.
        </p>
      </div>
      <div>
        <InfoSection />
      </div>
    </div>
  );
}
