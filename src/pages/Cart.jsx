import React from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/images/emptycart.jpg";
import { FaTrashCan } from "react-icons/fa6";
import Model from "../components/model.jsx";
import ChangeAddress from "../components/changeAddress.jsx";
import {
  minusone,
  plusone,
  removeItem,
  clearCart,
} from "../redux/cartSlice.jsx";
import { Navigate, useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = React.useState("Main Street");
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Shopping Cart</h3>
            <button
              onClick={() => dispatch(clearCart())}
              className="text-sm bg-gray-200 text-red-600 px-3 py-1 rounded hover:bg-gray-300 transition font-medium"
            >
              Clear Cart
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p className="w-1/3">Products</p>
                <div className="flex space-x-12 w-2/3 justify-between">
                  <p className="w-1/4 text-center">Price</p>
                  <p className="w-1/4 text-center">Quantity</p>
                  <p className="w-1/4 text-center">Subtotal</p>
                  <p className="w-1/4 text-center">Remove</p>
                </div>
              </div>

              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4 w-1/3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex space-x-12 w-2/3 justify-between items-center">
                      <p className="w-1/4 text-center">{product.price}$</p>

                      <div className="w-1/4 flex items-center justify-center gap-2">
                        <button
                          className="bg-red-500 text-white rounded px-2 text-lg hover:bg-red-600 transition"
                          onClick={() => dispatch(minusone(product.id))}
                        >
                          −
                        </button>
                        <p className="text-lg font-medium px-2 py-0.5 border rounded bg-white text-center shadow-sm min-w-[36px]">
                          {product.quantity}
                        </p>
                        <button
                          className="bg-red-500 text-white rounded px-2 text-lg hover:bg-red-600 transition"
                          onClick={() => dispatch(plusone(product.id))}
                        >
                          +
                        </button>
                      </div>

                      <p className="w-1/4 text-center">
                        {(product.quantity * product.price).toFixed(2)}$
                      </p>

                      <div className="w-1/4 text-center">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => dispatch(removeItem(product.id))}
                        >
                          <FaTrashCan />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-100 p-4 rounded mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>

              <div className="mb-2 flex justify-between border-b-2 border-gray-500">
                <span>Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b-2 border-gray-500">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="font-medium">Shipping to:</p>
                  <p className="text-sm text-gray-600">{address}</p>
                </div>

                <button
                  className="text-blue-600 hover:underline text-sm cursor-pointer"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change Address
                </button>
              </div>

              <div className="mb-4 flex justify-between">
                <span>Total Price:</span>
                <span>{cart.totalprice.toFixed(2)}$</span>
              </div>

              <button
                className="cursor-pointer w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition mb-2"
                onClick={() => navigate("/checkout")}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>

          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              isModelOpen={isModelOpen}
              setIsModelOpen={setIsModelOpen}
              address={address}
              setAddress={setAddress}
            />
          </Model>
        </div>
      ) : (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center mt-20 mb-20">
          <img
            src={emptyCart}
            alt="Empty Cart"
            className="h-full object-contain"
          />
          <h2 className="font-semibold text-2xl text-gray-400">
            Cart is Empty
          </h2>
        </div>
      )}
    </div>
  );
}
