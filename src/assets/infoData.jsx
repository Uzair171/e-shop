import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

export const infoItems = [
  {
    icon: <FaShippingFast className="text-3xl text-red-600" />,
    title: "Free Shipping",
    description: "Get your orders delivered with no extra cost",
  },
  {
    icon: <FaHeadset className="text-3xl text-red-600" />,
    title: "Support 24/7",
    description: "Get in touch with our customer support anytime",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
    title: "Money Back Guarantee",
    description: "Get a full refund if you're not satisfied with your purchase",
  },
  {
    icon: <FaLock className="text-3xl text-red-600" />,
    title: "Secure Payment",
    description: "Your payment information is secure with us",
  },
  {
    icon: <FaTag className="text-3xl text-red-600" />,
    title: "Discount",
    description: "Enjoy the best discounts on your purchases",
  },
];
