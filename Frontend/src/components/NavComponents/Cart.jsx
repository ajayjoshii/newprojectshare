

import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
const ESEWA_GATEWAY = import.meta.env.VITE_ESEWA_GATEWAY || "https://esewa.com.np";
const PRODUCT_CODE = import.meta.env.VITE_ESEWA_PRODUCT_CODE || "your_product_code";

export default function Cart({ updateQty, deleteItem, clearCart, user, province, cartItems }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const savePaymentToBackend = async (transaction_uuid) => {
    try {
      const body = {
        user: { _id: user?._id },
        items: cartItems.map(item => ({
          itemId: item._id || item.id,
          name: item.name,
          qty: item.qty,
          price: item.price,
        })),
        totalAmount: total,
        province,
        transaction_uuid,
      };

      const res = await axios.post(`${BASE_URL}/api/payments/save`, body, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token") || "",
        },
      });

      if (res.data.success) {
        navigate(`/payment-success?transaction_uuid=${transaction_uuid}`);
      } else {
        alert("Failed to save payment info. Please contact support.");
      }
    } catch {
      alert("Error saving payment info.");
    }
  };

  const handleEsewaPayment = async () => {
    if (!cartItems.length) return alert("Cart is empty.");
    if (!user?._id) return alert("Please login before checkout.");

    try {
      const res = await axios.post(`${BASE_URL}/initialize-esewa`, {
        items: cartItems.map(item => ({
          itemId: item._id || item.id,
          name: item.name,
          price: item.price,
          qty: item.qty,
        })),
        totalPrice: total,
        userId: user._id,
      });

      if (res.data.success) {
        const { signature, signed_field_names } = res.data.payment;
        const transaction_uuid = res.data.purchasedItemData._id;

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("province", province);

        const form = document.createElement("form");
        form.method = "POST";
        form.action = `${ESEWA_GATEWAY}/api/epay/main/v2/form`;

        const fields = {
          amount: total,
          tax_amount: 0,
          failure_url: `${window.location.origin}/payment-failure`,
          product_delivery_charge: 0,
          product_service_charge: 0,
          product_code: PRODUCT_CODE,
          signature,
          signed_field_names,
          success_url: `${window.location.origin}/payment-success?transaction_uuid=${transaction_uuid}`,
          total_amount: total,
          transaction_uuid,
        };

        Object.entries(fields).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
      } else {
        alert("Payment initialization failed.");
      }
    } catch {
      alert("Failed to initialize eSewa payment.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-[90px]">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear Cart
          </button>
          <table className="w-full mt-4 border-collapse border border-gray-300 text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Item</th>
                <th className="border border-gray-300 p-2">Price (Rs.)</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Total</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id || item.id}>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">{item.price}</td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        onClick={() => updateQty(item.id || item._id, -1)}
                        disabled={item.qty === 1}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        onClick={() => updateQty(item.id || item._id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2">{item.price * item.qty}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => deleteItem(item.id || item._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-4 text-lg font-bold">Total: Rs. {total}</div>
          <button
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
            onClick={handleEsewaPayment}
          >
            Checkout with eSewa
          </button>
        </>
      )}
    </div>
  );
}