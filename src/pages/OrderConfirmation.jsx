import { Link } from "react-router-dom";

export default function OrderConfirmation({ order }) {
  if (!order) {
    return (
      <div className="text-center mt-10 text-red-500 bg-gray-100  p-8">
        No order found.
      </div>
    );
  }

  return (
    <div className="bg-gray-100  p-4">
      <h2 className="text-2xl font-bold mb-4">Thank You for your order</h2>
      <p className="mb-6">
        Your order has been placed successfully. You will receive a confirmation
        email shortly.
      </p>

      <div className="bg-gray-300 p-6 shadow rounded">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <p className="mb-2">
          Order Number: <strong>{order.orderNumber}</strong>
        </p>

        <div className="mb-4">
          <h4 className="font-semibold">Shipping Information</h4>
          <p>{order.shippingInfo.address}</p>
          <p>{order.shippingInfo.city}</p>
          <p>{order.shippingInfo.zipCode}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Payment Method</h4>
          <p>{order.paymentMethod}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Products</h4>
          {order.product?.map((p, i) => (
            <div key={i} className="text-sm">
              {p.name} (x{p.quantity}) - ${(p.price * p.quantity).toFixed(2)}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Total Price (Shipment Included)</h4>
          <p>${order.totalPrice?.toFixed(2)}</p>
        </div>
      </div>
      <Link to={"/"}>
        <button className="bg-green-700 text-white mt-3 px-6 py-2 rounded-lg hover:bg-green-800 transition-colors duration-200">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
