// // src/admin/AdminLayout.jsx
// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";

// export default function AdminLayout() {
//   return (
//     <div className="flex min-h-screen">
//       <aside className="w-60 bg-gray-800 text-white p-4">
//         <h2 className="text-2xl font-bold mb-4">Admin</h2>
//         <nav className="flex flex-col gap-2">
//           <NavLink to="/admin/dashboard" className={({isActive})=> isActive ? "font-bold" : ""}>Dashboard</NavLink>
//           <NavLink to="/admin/users" className={({isActive})=> isActive ? "font-bold" : ""}>Users</NavLink>
//           <NavLink to="/admin/items" className={({isActive})=> isActive ? "font-bold" : ""}>Items</NavLink>
//           <NavLink to="/admin/orders" className={({isActive})=> isActive ? "font-bold" : ""}>Orders</NavLink>
//           <NavLink to="/admin/payments" className={({isActive})=> isActive ? "font-bold" : ""}>Payments</NavLink>
//         </nav>
//       </aside>
//       <main className="flex-1 p-6 bg-gray-50">
//         <Outlet />
//       </main>
//     </div>
//   );
// }
