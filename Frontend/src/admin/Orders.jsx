// src/admin/Orders.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const res = await api.get("/admin/orders");
    setOrders(res.data.orders || []);
  };
  useEffect(()=>{ fetchOrders(); }, []);

  const updateStatus = async (orderId, status) => {
    await api.put(`/admin/orders/${orderId}`, { status });
    fetchOrders();
  };

  const deleteOrder = async (id) => {
    if (!confirm("Delete order?")) return;
    await api.delete(`/admin/orders/${id}`);
    fetchOrders();
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Orders</h1>
      <div className="space-y-2">
        {orders.map(o => (
          <div key={o._id} className="p-3 bg-white rounded shadow">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{o.name} • {o.email}</div>
                <div className="text-sm text-gray-600">Province: {o.province} • Total: Rs {o.totalPrice}</div>
                <div className="mt-2">
                  {o.items.map(it => <div key={it.id} className="text-sm">{it.name} x {it.qty} — Rs {it.price}</div>)}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Status: <b>{o.status}</b></div>
                <select onChange={(e)=> updateStatus(o._id, e.target.value)} value={o.status}>
                  <option value="pending">pending</option>
                  <option value="processing">processing</option>
                  <option value="shipped">shipped</option>
                  <option value="completed">completed</option>
                  <option value="cancelled">cancelled</option>
                </select>
                <button onClick={()=>deleteOrder(o._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
