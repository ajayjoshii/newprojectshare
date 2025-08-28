// // // src/admin/Dashboard.jsx
// // import React, { useEffect, useState } from "react";
// // import api from "../utils/api";

// // export default function Dashboard() {
// //   const [counts, setCounts] = useState({ users:0, items:0, orders:0, payments:0 });
// //   useEffect(() => {
// //     const fetchCounts = async () => {
// //       try {
// //         const [u, i, o, p] = await Promise.all([
// //           api.get("/admin/users"),
// //           api.get("/admin/items"),
// //           api.get("/admin/orders"),
// //           api.get("/admin/payments"),
// //         ]);
// //         setCounts({ users: u.data.users.length, items: i.data.items.length, orders: o.data.orders.length, payments: p.data.payments.length });
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchCounts();
// //   }, []);
// //   return (
// //     <div>
// //       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
// //       <div className="grid grid-cols-4 gap-4">
// //         <div className="p-4 bg-white rounded shadow">Users: {counts.users}</div>
// //         <div className="p-4 bg-white rounded shadow">Items: {counts.items}</div>
// //         <div className="p-4 bg-white rounded shadow">Orders: {counts.orders}</div>
// //         <div className="p-4 bg-white rounded shadow">Payments: {counts.payments}</div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import api from "../utils/api";

// export default function Dashboard() {
//   const [counts, setCounts] = useState({ users: 0, items: 0, orders: 0, payments: 0 });
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const [usersRes, itemsRes, ordersRes, paymentsRes] = await Promise.all([
//           api.get("/admin/users"),
//           api.get("/admin/items"),
//           api.get("/admin/orders"),
//           api.get("/admin/payments"),
//         ]);

//         setCounts({
//           users: usersRes.data.length || 0,
//           items: itemsRes.data.length || 0,
//           orders: ordersRes.data.length || 0,
//           payments: paymentsRes.data.length || 0,
//         });
//       } catch (err) {
//         console.error(err);
//         if (err.response && err.response.status === 401) {
//           setError("Unauthorized. Please login as admin.");
//         } else {
//           setError("Failed to fetch data. Try again later.");
//         }
//       }
//     };

//     fetchCounts();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
//           <h2 className="text-xl font-semibold">Users</h2>
//           <p className="text-2xl font-bold mt-2">{counts.users}</p>
//         </div>

//         <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
//           <h2 className="text-xl font-semibold">Items</h2>
//           <p className="text-2xl font-bold mt-2">{counts.items}</p>
//         </div>

//         <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
//           <h2 className="text-xl font-semibold">Orders</h2>
//           <p className="text-2xl font-bold mt-2">{counts.orders}</p>
//         </div>

//         <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
//           <h2 className="text-xl font-semibold">Payments</h2>
//           <p className="text-2xl font-bold mt-2">{counts.payments}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
