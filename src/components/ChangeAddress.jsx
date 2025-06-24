import React from "react";

export default function ChangeAddress({
  isModelOpen,
  setIsModelOpen,
  address,
  setAddress,
}) {
  const [newaddress, SetNewAddress] = React.useState(address);

  if (!isModelOpen) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          New Address
        </label>
        <input
          type="text"
          value={newaddress}
          placeholder="Enter your address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => SetNewAddress(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-3 mt-2">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => {
            setAddress(newaddress);
            setIsModelOpen(false);
          }}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
