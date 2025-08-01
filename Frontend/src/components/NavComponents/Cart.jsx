// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
// // const ESEWA_GATEWAY = import.meta.env.VITE_ESEWA_GATEWAY;
// // const PRODUCT_CODE = import.meta.env.VITE_ESEWA_PRODUCT_CODE;

// // export default function Cart({ updateQty, deleteItem, clearCart, user, province, cartItems }) {
// //   const navigate = useNavigate();
// //   const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

// //   const handlePaymentSuccess = async (transaction_uuid) => {
// //     try {
// //       await axios.post(`${BASE_URL}/api/payments/save`, {
// //         user: { name: user.name, email: user.email },
// //         items: cartItems,
// //         totalAmount: total,
// //         province,
// //         transaction_uuid,
// //       });
// //       navigate(`/payment-success?transaction_uuid=${transaction_uuid}`);
// //     } catch {
// //       alert("Payment succeeded, but failed to save receipt.");
// //     }
// //   };

// //   const handleEsewaPayment = async () => {
// //     if (!cartItems.length) return alert("Cart is empty.");
// //     try {
// //       const res = await axios.post(`${BASE_URL}/initialize-esewa`, {
// //         items: cartItems.map(item => ({
// //           id: item._id || item.id,
// //           name: item.name,
// //           price: item.price,
// //           qty: item.qty,
// //         })),
// //         totalPrice: total,
// //         userId: user?._id || null,
// //       });

// //       if (res.data.success) {
// //         const { signature, signed_field_names } = res.data.payment;
// //         const transaction_uuid = res.data.purchasedItemData._id;

// //         const form = document.createElement("form");
// //         form.method = "POST";
// //         form.action = `${ESEWA_GATEWAY}/api/epay/main/v2/form`;

// //         const fields = {
// //           amount: total,
// //           tax_amount: 0,
// //           failure_url: `${window.location.origin}/payment-failure`,
// //           product_delivery_charge: 0,
// //           product_service_charge: 0,
// //           product_code: PRODUCT_CODE,
// //           signature,
// //           signed_field_names,
// //           success_url: `${window.location.origin}/payment-success`,
// //           total_amount: total,
// //           transaction_uuid,
// //         };

// //         Object.entries(fields).forEach(([key, value]) => {
// //           const input = document.createElement("input");
// //           input.type = "hidden";
// //           input.name = key;
// //           input.value = value;
// //           form.appendChild(input);
// //         });

// //         document.body.appendChild(form);
// //         form.submit();

// //         await handlePaymentSuccess(transaction_uuid);
// //       } else {
// //         alert("Payment initialization failed.");
// //       }
// //     } catch {
// //       alert("Failed to initialize eSewa payment.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto mt-[90px]">
// //       <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
// //       {cartItems.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <>
// //           <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
// //             <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Clear Cart</button>
// //           </div>

// //           <table className="w-full mt-4 border-collapse border border-gray-300 text-center">
// //             <thead>
// //               <tr>
// //                 <th className="border border-gray-300 p-2">Item</th>
// //                 <th className="border border-gray-300 p-2">Price (Rs.)</th>
// //                 <th className="border border-gray-300 p-2">Quantity</th>
// //                 <th className="border border-gray-300 p-2">Total</th>
// //                 <th className="border border-gray-300 p-2">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {cartItems.map(({ id, name, price, qty }) => (
// //                 <tr key={id}>
// //                   <td className="border border-gray-300 p-2">{name}</td>
// //                   <td className="border border-gray-300 p-2">{price}</td>
// //                   <td className="border border-gray-300 p-2 flex justify-center items-center gap-2">
// //                     <button
// //                       className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
// //                       onClick={() => updateQty(id, -1)}
// //                       disabled={qty === 1}
// //                     >
// //                       -
// //                     </button>
// //                     {qty}
// //                     <button
// //                       className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
// //                       onClick={() => updateQty(id, 1)}
// //                     >
// //                       +
// //                     </button>
// //                   </td>
// //                   <td className="border border-gray-300 p-2">{price * qty}</td>
// //                   <td className="border border-gray-300 p-2">
// //                     <button
// //                       onClick={() => deleteItem(id)}
// //                       className="text-red-600 hover:text-red-800"
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>

// //           <div className="text-right mt-4 text-lg font-bold">
// //             Total: Rs. {total}
// //           </div>

// //           <button
// //             className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
// //             onClick={handleEsewaPayment}
// //           >
// //             Checkout with eSewa
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }


// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
// // const ESEWA_GATEWAY = import.meta.env.VITE_ESEWA_GATEWAY;
// // const PRODUCT_CODE = import.meta.env.VITE_ESEWA_PRODUCT_CODE;

// // export default function Cart({ updateQty, deleteItem, clearCart, user, province, cartItems }) {
// //   const navigate = useNavigate();
// //   const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

// //   const handlePaymentSuccess = async (transaction_uuid) => {
// //     try {
// //       await axios.post(`${BASE_URL}/api/payments/save`, {
// //         user: { name: user.name, email: user.email },
// //         items: cartItems,
// //         totalAmount: total,
// //         province,
// //         transaction_uuid,
// //       });
// //       navigate(`/payment-success?transaction_uuid=${transaction_uuid}`);
// //     } catch {
// //       alert("Payment succeeded, but failed to save receipt.");
// //     }
// //   };

// //   const handleEsewaPayment = async () => {
// //     if (!cartItems.length) return alert("Cart is empty.");
// //     try {
// //       const res = await axios.post(`${BASE_URL}/initialize-esewa`, {
// //         items: cartItems.map(item => ({
// //           id: item._id || item.id,
// //           name: item.name,
// //           price: item.price,
// //           qty: item.qty,
// //         })),
// //         totalPrice: total,
// //         userId: user?._id || null,
// //       });

// //       if (res.data.success) {
// //         const { signature, signed_field_names } = res.data.payment;
// //         const transaction_uuid = res.data.purchasedItemData._id;

// //         const form = document.createElement("form");
// //         form.method = "POST";
// //         form.action = `${ESEWA_GATEWAY}/api/epay/main/v2/form`;

// //         const fields = {
// //           amount: total,
// //           tax_amount: 0,
// //           failure_url: `${window.location.origin}/payment-failure`,
// //           product_delivery_charge: 0,
// //           product_service_charge: 0,
// //           product_code: PRODUCT_CODE,
// //           signature,
// //           signed_field_names,
// //           success_url: `${window.location.origin}/payment-success`,
// //           total_amount: total,
// //           transaction_uuid,
// //         };

// //         Object.entries(fields).forEach(([key, value]) => {
// //           const input = document.createElement("input");
// //           input.type = "hidden";
// //           input.name = key;
// //           input.value = value;
// //           form.appendChild(input);
// //         });

// //         document.body.appendChild(form);
// //         form.submit();

// //         await handlePaymentSuccess(transaction_uuid);
// //       } else {
// //         alert("Payment initialization failed.");
// //       }
// //     } catch {
// //       alert("Failed to initialize eSewa payment.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto mt-[90px]">
// //       <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
// //       {cartItems.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <>
// //           <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
// //             <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Clear Cart</button>
// //           </div>

// //           <table className="w-full mt-4 border-collapse border border-gray-300 text-center">
// //             <thead>
// //               <tr>
// //                 <th className="border border-gray-300 p-2">Item</th>
// //                 <th className="border border-gray-300 p-2">Price (Rs.)</th>
// //                 <th className="border border-gray-300 p-2">Quantity</th>
// //                 <th className="border border-gray-300 p-2">Total</th>
// //                 <th className="border border-gray-300 p-2">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {cartItems.map(({ id, name, price, qty }) => (
// //                 <tr key={id}>
// //                   <td className="border border-gray-300 p-2">{name}</td>
// //                   <td className="border border-gray-300 p-2">{price}</td>
// //                   <td className="border border-gray-300 p-2 flex justify-center items-center gap-2">
// //                     <button
// //                       className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
// //                       onClick={() => updateQty(id, -1)}
// //                       disabled={qty === 1}
// //                     >
// //                       -
// //                     </button>
// //                     {qty}
// //                     <button
// //                       className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
// //                       onClick={() => updateQty(id, 1)}
// //                     >
// //                       +
// //                     </button>
// //                   </td>
// //                   <td className="border border-gray-300 p-2">{price * qty}</td>
// //                   <td className="border border-gray-300 p-2">
// //                     <button
// //                       onClick={() => deleteItem(id)}
// //                       className="text-red-600 hover:text-red-800"
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>

// //           <div className="text-right mt-4 text-lg font-bold">
// //             Total: Rs. {total}
// //           </div>

// //           <button
// //             className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
// //             onClick={handleEsewaPayment}
// //           >
// //             Checkout with eSewa
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }


// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
// const ESEWA_GATEWAY = import.meta.env.VITE_ESEWA_GATEWAY || "https://esewa.com.np";
// const PRODUCT_CODE = import.meta.env.VITE_ESEWA_PRODUCT_CODE || "your_product_code";

// export default function Cart({ updateQty, deleteItem, clearCart, user, province, cartItems }) {
//   const navigate = useNavigate();
//   const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

//   const handlePaymentSuccess = async (transaction_uuid) => {
//     try {
//       await axios.post(`${BASE_URL}/api/payments/save`, {
//         user: { _id: user._id, name: user.name, email: user.email },
//         items: cartItems,
//         totalAmount: total,
//         province,
//         transaction_uuid,
//       });
//       navigate(`/payment-success?transaction_uuid=${transaction_uuid}`);
//     } catch {
//       alert("Payment succeeded, but failed to save receipt.");
//     }
//   };

//   const handleEsewaPayment = async () => {
//     if (!cartItems.length) return alert("Cart is empty.");
//     try {
//       const res = await axios.post(`${BASE_URL}/initialize-esewa`, {
//         items: cartItems.map(item => ({
//           itemId: item._id || item.id,
//           name: item.name,
//           price: item.price,
//           qty: item.qty,
//         })),
//         totalPrice: total,
//         userId: user?._id || null,
//       });

//       if (res.data.success) {
//         const { signature, signed_field_names } = res.data.payment;
//         const transaction_uuid = res.data.purchasedItemData._id;

//         const form = document.createElement("form");
//         form.method = "POST";
//         form.action = `${ESEWA_GATEWAY}/api/epay/main/v2/form`;

//         const fields = {
//           amount: total,
//           tax_amount: 0,
//           failure_url: `${window.location.origin}/payment-failure`,
//           product_delivery_charge: 0,
//           product_service_charge: 0,
//           product_code: PRODUCT_CODE,
//           signature,
//           signed_field_names,
//           success_url: `${window.location.origin}/payment-success?transaction_uuid=${transaction_uuid}`,
//           total_amount: total,
//           transaction_uuid,
//         };

//         Object.entries(fields).forEach(([key, value]) => {
//           const input = document.createElement("input");
//           input.type = "hidden";
//           input.name = key;
//           input.value = value;
//           form.appendChild(input);
//         });

//         document.body.appendChild(form);
//         form.submit();
//       } else {
//         alert("Payment initialization failed.");
//       }
//     } catch {
//       alert("Failed to initialize eSewa payment.");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-[90px]">
//       <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Clear Cart</button>
//           <table className="w-full mt-4 border-collapse border border-gray-300 text-center">
//             <thead>
//               <tr>
//                 <th className="border border-gray-300 p-2">Item</th>
//                 <th className="border border-gray-300 p-2">Price (Rs.)</th>
//                 <th className="border border-gray-300 p-2">Quantity</th>
//                 <th className="border border-gray-300 p-2">Total</th>
//                 <th className="border border-gray-300 p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map(({ _id, name, price, qty }) => (
//                 <tr key={_id}>
//                   <td className="border border-gray-300 p-2">{name}</td>
//                   <td className="border border-gray-300 p-2">{price}</td>
//                   <td className="border border-gray-300 p-2 flex justify-center items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                       onClick={() => updateQty(_id, -1)}
//                       disabled={qty === 1}
//                     >-</button>
//                     {qty}
//                     <button
//                       className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                       onClick={() => updateQty(_id, 1)}
//                     >+</button>
//                   </td>
//                   <td className="border border-gray-300 p-2">{price * qty}</td>
//                   <td className="border border-gray-300 p-2">
//                     <button onClick={() => deleteItem(_id)} className="text-red-600 hover:text-red-800">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="text-right mt-4 text-lg font-bold">Total: Rs. {total}</div>
//           <button
//             className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
//             onClick={handleEsewaPayment}
//           >
//             Checkout with eSewa
//           </button>
//         </>
//       )}
//     </div>
//   );
// }


import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
const ESEWA_GATEWAY = import.meta.env.VITE_ESEWA_GATEWAY || "https://esewa.com.np";
const PRODUCT_CODE = import.meta.env.VITE_ESEWA_PRODUCT_CODE || "your_product_code";

export default function Cart({ updateQty, deleteItem, clearCart, user, province, cartItems }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleEsewaPayment = async () => {
    if (!cartItems.length) return alert("Cart is empty.");
    try {
      const res = await axios.post(`${BASE_URL}/initialize-esewa`, {
        items: cartItems.map(item => ({
          itemId: item._id || item.id,
          name: item.name,
          price: item.price,
          qty: item.qty,
        })),
        totalPrice: total,
        userId: user?._id || null,
      });

      if (res.data.success) {
        const { signature, signed_field_names } = res.data.payment;
        const transaction_uuid = res.data.purchasedItemData._id;

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
          <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Clear Cart</button>
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
              {cartItems.map(({ _id, name, price, qty }) => (
                <tr key={_id}>
                  <td className="border border-gray-300 p-2">{name}</td>
                  <td className="border border-gray-300 p-2">{price}</td>
                  <td className="border border-gray-300 p-2 flex justify-center items-center gap-2">
                    <button className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400" onClick={() => updateQty(_id, -1)} disabled={qty === 1}>-</button>
                    {qty}
                    <button className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400" onClick={() => updateQty(_id, 1)}>+</button>
                  </td>
                  <td className="border border-gray-300 p-2">{price * qty}</td>
                  <td className="border border-gray-300 p-2">
                    <button onClick={() => deleteItem(_id)} className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-4 text-lg font-bold">Total: Rs. {total}</div>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded" onClick={handleEsewaPayment}>Checkout with eSewa</button>
        </>
      )}
    </div>
  );
}
