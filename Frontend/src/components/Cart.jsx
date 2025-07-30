// import { FaPlusCircle, FaMinusCircle, FaTrash, FaBroom, FaMoneyBillWave } from 'react-icons/fa';

// export default function Cart({ cart, total, updateQty, deleteItem, clearCart, submitOrder, handlePayment }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-[90px]">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-600">Cart is empty</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cart.map(item => (
//               <li key={item.id} className="flex items-center justify-between">
//                 <img src={item.img} alt={item.name} className="w-16 h-16 rounded-md" />
//                 <div className="flex-1 ml-4">
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <div className="flex items-center space-x-2 mt-1">
//                     <FaMinusCircle onClick={()=>updateQty(item.id, -1)} className="cursor-pointer text-red-500" />
//                     <span>{item.qty}</span>
//                     <FaPlusCircle onClick={()=>updateQty(item.id, +1)} className="cursor-pointer text-green-500" />
//                   </div>
//                 </div>
//                 <span className="font-semibold">NPR {item.qty * item.price}</span>
//                 <FaTrash onClick={()=> deleteItem(item.id)} className="cursor-pointer text-gray-500 hover:text-red-600 ml-4" />
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-between items-center mt-6">
//             <button onClick={clearCart} className="flex items-center text-gray-600 hover:text-red-600">
//               <FaBroom className="mr-1" /> Clear Cart
//             </button>
//             <span className="text-xl font-bold">Total: NPR {total}</span>
//           </div>
//           <div className="flex space-x-4 mt-6">
//             <button onClick={submitOrder} className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
//               Place Order
//             </button>
//             <button onClick={handlePayment} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center">
//               <FaMoneyBillWave className="mr-2" /> Pay with eSewa
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


// import React from "react";

// export default function Cart({ cart, updateQty, deleteItem, clearCart, total, submitOrder }) {
//   return (
//     <div className="mt-[65px] container mx-auto p-4 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <table className="w-full text-left border-collapse mb-6">
//             <thead>
//               <tr>
//                 <th className="border-b p-2">Item</th>
//                 <th className="border-b p-2">Price</th>
//                 <th className="border-b p-2">Quantity</th>
//                 <th className="border-b p-2">Total</th>
//                 <th className="border-b p-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id} className="border-b">
//                   <td className="p-2 flex items-center space-x-4">
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <span>{item.name}</span>
//                   </td>
//                   <td className="p-2">Rs. {item.price}</td>
//                   <td className="p-2 flex items-center space-x-2">
//                     <button
//                       onClick={() => updateQty(item.id, -1)}
//                       className="bg-gray-300 px-2 rounded hover:bg-gray-400"
//                     >
//                       -
//                     </button>
//                     <span>{item.qty}</span>
//                     <button
//                       onClick={() => updateQty(item.id, 1)}
//                       className="bg-gray-300 px-2 rounded hover:bg-gray-400"
//                     >
//                       +
//                     </button>
//                   </td>
//                   <td className="p-2 font-semibold">Rs. {item.qty * item.price}</td>
//                   <td className="p-2">
//                     <button
//                       onClick={() => deleteItem(item.id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="flex justify-between items-center mb-4">
//             <button
//               onClick={clearCart}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Clear Cart
//             </button>
//             <div className="text-xl font-bold">Total: Rs. {total}</div>
//           </div>

//           <button
//             onClick={submitOrder}
//             className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 w-full"
//           >
//             Submit Order
//           </button>
//         </>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";
// export default function Cart({
//   updateQty,
//   deleteItem,
//   clearCart,
//   user,
//   province,
// }) {
//   const [cartItems, setCartItems] = useState([]);

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

//   const handleCheckout = async () => {
//   try {
//     const res = await axios.post(`${BASE_URL}/api/payment/checkout`, {
//       items: cartItems,
//       total: calculateTotal(cartItems),
//     });

//     if (res.data.success) {
//       // e.g., redirect to payment gateway or success page
//       window.location.href = res.data.redirectUrl || "/success";
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

 





//   const submitOrder = async () => {
//     if (!province) return alert("Please select a province.");
//     if (cartItems.length === 0) return alert("Cart is empty.");

//     const orderPayload = {
//       userId: user?._id,
//       name: user?.name,
//       email: user?.email,
//       province,
//       items: cartItems,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/orders/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderPayload),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         alert("Order submitted successfully!");
//         clearCart();
//       } else {
//         alert(data.message || "Order submission failed.");
//       }
//     } catch (err) {
//       alert("Network error");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-[90px]">
//       <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="border-b border-gray-300">
//                 <th className="py-2 text-left">Item</th>
//                 <th className="py-2">Price</th>
//                 <th className="py-2">Qty</th>
//                 <th className="py-2">Subtotal</th>
//                 <th className="py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item.id} className="border-b border-gray-200">
//                   <td className="py-2 flex items-center gap-4">
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     {item.name}
//                   </td>
//                   <td className="text-center py-2">Rs. {item.price}</td>
//                   <td className="text-center py-2">
//                     <button
//                       onClick={() => updateQty(item.id, -1)}
//                       className="px-2 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{item.qty}</span>
//                     <button
//                       onClick={() => updateQty(item.id, 1)}
//                       className="px-2 bg-gray-200 rounded"
//                     >
//                       +
//                     </button>
//                   </td>
//                   <td className="text-center py-2">Rs. {item.price * item.qty}</td>
//                   <td className="text-center py-2">
//                     <button
//                       onClick={() => deleteItem(item.id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between items-center mt-6">
//             <button
//               onClick={clearCart}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Clear Cart
//             </button>
//             <div className="text-xl font-semibold">Total: Rs. {total}</div>
//             <button
//               onClick={handleCheckout}
//               className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
//             >
//               Checkout
//             </button>

//             {cartId && (
//               <button
//                 onClick={handlePayment}
//                 className="bg-green-600 text-white px-4 py-2 rounded mt-4 ml-4"
//               >
//                 Pay with Khalti
//               </button>
//             )
//             }
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export default function Cart({ updateQty, deleteItem, clearCart, user, province, cartItems }) {
  const [cartId, setCartId] = useState(null);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/payment/checkout`, {
        items: cartItems,
        total,
      });

      if (res.data.success) {
        window.location.href = res.data.redirectUrl || "/success";
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePayment = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/payment/khalti`, {
        cartId,
        amount: total,
      });
      if (res.data.success) {
        window.location.href = res.data.paymentUrl;
      }
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  const submitOrder = async () => {
    if (!province || cartItems.length === 0) return alert("Select province and add items.");

    const payload = {
      userId: user?._id,
      name: user?.name,
      email: user?.email,
      province,
      items: cartItems,
    };

    try {
      const res = await axios.post(`${BASE_URL}/api/orders/submit`, payload);
      if (res.data.cartId) setCartId(res.data.cartId);
      alert("Order submitted!");
      clearCart();
    } catch (err) {
      alert("Failed to submit order");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-[90px]">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 text-left">Item</th>
                <th className="py-2">Price</th>
                <th className="py-2">Qty</th>
                <th className="py-2">Subtotal</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-2 flex items-center gap-4">
                    <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    {item.name}
                  </td>
                  <td className="text-center py-2">Rs. {item.price}</td>
                  <td className="text-center py-2">
                    <button onClick={() => updateQty(item.id, -1)} className="px-2 bg-gray-200 rounded">-</button>
                    <span className="mx-2">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="px-2 bg-gray-200 rounded">+</button>
                  </td>
                  <td className="text-center py-2">Rs. {item.price * item.qty}</td>
                  <td className="text-center py-2">
                    <button onClick={() => deleteItem(item.id)} className="text-red-600 hover:underline">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
            <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Clear Cart</button>
            <div className="text-xl font-semibold">Total: Rs. {total}</div>
            <button onClick={submitOrder} className="bg-yellow-600 text-white px-4 py-2 rounded">Submit Order</button>
            <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded">Checkout</button>
            {cartId && (
              <button onClick={handlePayment} className="bg-green-600 text-white px-4 py-2 rounded">Pay with Khalti</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
