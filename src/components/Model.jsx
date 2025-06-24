export default function Model({ isModelOpen, setIsModelOpen, children }) {
  if (!isModelOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-700 text-3xl hover:text-red-500"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
