import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ openLogin, closeModal }) {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // You can add validations here if needed

    if (closeModal) closeModal(); // Close the modal
    navigate("/"); // Redirect to home
  };

  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-5">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
        </h2>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Name</label>
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            required
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <button className="text-red-600 hover:underline" onClick={openLogin}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
