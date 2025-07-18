import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

export default function CheckOut({ setOrder }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = React.useState({
    address: "",
    city: "",
    zipCode: "",
  });

  const [billingInfo, setBillingInfo] = React.useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  const [billingToggle, setBillingToggle] = React.useState(false);
  const [shippingToggle, setShippingToggle] = React.useState(true);
  const [paymentToggle, setPaymentToggle] = React.useState(true);

  const handleOrder = () => {
    const hasProducts = cart.products && cart.products.length > 0;
    const hasShipping =
      shippingInfo.address.trim() !== "" &&
      shippingInfo.city.trim() !== "" &&
      shippingInfo.zipCode.trim() !== "";

    const hasBilling =
      billingInfo.fullName.trim() !== "" &&
      billingInfo.email.trim() !== "" &&
      billingInfo.phone.trim() !== "";

    const hasPayment = paymentMethod !== "";

    if (hasProducts && hasShipping && hasBilling && hasPayment) {
      setShowError(false);
      const newOrder = {
        product: cart.products,
        orderNumber: Math.floor(Math.random() * 1000000),
        shippingInfo,
        billingInfo,
        paymentMethod,
        totalPrice: Number(
          (
            cart.products.reduce((acc, p) => acc + p.price * p.quantity, 0) + 5
          ).toFixed(2)
        ),
      };
      setOrder(newOrder);
      dispatch(clearCart()); // ✅ Clear the cart
      navigate("./order-confirmation");
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-6">Checkout</h3>

      {showError && (
        <div className="text-red-600 text-center font-medium mb-4">
          Information not complete
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-10">
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
                  value={billingInfo.fullName}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, fullName: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={billingInfo.email}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, email: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={billingInfo.phone}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, phone: e.target.value })
                  }
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
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={shippingInfo.city}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  value={shippingInfo.zipCode}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zipCode: e.target.value,
                    })
                  }
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
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-red-500"
                  />
                  Card Payment
                </label>
                <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-red-500"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded shadow-sm">
          <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
          <div className="space-y-4">
            {cart.products.map((product, index) => (
              <div key={index} className="flex items-start gap-4 pb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {product.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${product.price} × {product.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 text-sm">
            <p className="flex justify-between">
              <span>Subtotal:</span>
              <span>
                $
                {cart.products
                  .reduce((acc, p) => acc + p.price * p.quantity, 0)
                  .toFixed(2)}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Shipping:</span>
              <span>$5.00</span>
            </p>
            <p className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>
                $
                {(
                  cart.products.reduce(
                    (acc, p) => acc + p.price * p.quantity,
                    0
                  ) + 5
                ).toFixed(2)}
              </span>
            </p>
            <button
              className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
