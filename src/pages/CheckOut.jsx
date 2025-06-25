import React from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function CheckOut() {
  const [billingToggle, setBillingToggle] = React.useState(false);
  const [shippingToggle, setShippingToggle] = React.useState(true);
  const [paymentToggle, setPaymentToggle] = React.useState(true);
  const [paymentMethod, setPaymentMethod] = React.useState("");

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-6">Checkout</h3>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Form Sections */}
        <div className="flex flex-col gap-10 w-full md:w-2/3">
          {/* Billing Info */}
          <div className="bg-white border rounded shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold">Billing Information</h4>
              <div
                className={`cursor-pointer transform transition-transform duration-500 ${
                  !billingToggle ? "rotate-180" : ""
                }`}
                onClick={() => setBillingToggle((prev) => !prev)}
              >
                <FaAngleDown className="text-gray-500" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Please provide your personal details for billing and contact
              purposes.
            </p>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                billingToggle
                  ? "max-h-0 opacity-0 pointer-events-none"
                  : "max-h-[1000px] opacity-100"
              }`}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-white border rounded shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold">Shipping Information</h4>
              <div
                className={`cursor-pointer transform transition-transform duration-500 ${
                  !shippingToggle ? "rotate-180" : ""
                }`}
                onClick={() => setShippingToggle((prev) => !prev)}
              >
                <FaAngleDown className="text-gray-500" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Provide your delivery address and location details for product
              shipment.
            </p>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                shippingToggle
                  ? "max-h-0 opacity-0 pointer-events-none"
                  : "max-h-[1000px] opacity-100"
              }`}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white border rounded shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold">Payment Method</h4>
              <div
                className={`cursor-pointer transform transition-transform duration-500 ${
                  !paymentToggle ? "rotate-180" : ""
                }`}
                onClick={() => setPaymentToggle((prev) => !prev)}
              >
                <FaAngleDown className="text-gray-500" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Choose your preferred payment method to complete the transaction
              securely.
            </p>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                paymentToggle
                  ? "max-h-0 opacity-0 pointer-events-none"
                  : "max-h-[800px] opacity-100"
              }`}
            >
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    className="accent-red-500"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Card Payment
                </label>
                <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    className="accent-red-500"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name on card"
                      className="w-full border rounded px-3 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full border rounded px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full border rounded px-3 py-2 outline-none"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="password"
                        placeholder="123"
                        maxLength={4}
                        className="w-full border rounded px-3 py-2 outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Order Summary</h4>
          <p className="text-sm text-gray-600 mb-2">
            This section summarizes your selected products and estimated total
            cost.
          </p>
          <p className="text-sm text-gray-500">
            (Cart total, shipping charges, discounts, and final amount will
            appear here.)
          </p>
        </div>
      </div>
    </div>
  );
}
