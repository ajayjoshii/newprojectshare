// src/admin/Payments.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const fetch = async ()=> {
    const res = await api.get("/admin/payments");
    setPayments(res.data.payments || []);
  };
  useEffect(()=>{ fetch(); }, []);

  const update = async (id, payload) => {
    await api.put(`/admin/payments/${id}`, payload);
    fetch();
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Payments</h1>
      <div className="space-y-2">
        {payments.map(p => (
          <div key={p._id} className="p-3 bg-white rounded shadow flex justify-between">
            <div>
              <div className="font-medium">{p.userId?.name} • {p.userId?.email}</div>
              <div className="text-sm">Amount: Rs {p.amount} • Gateway: {p.paymentGateway}</div>
              <div className="text-sm">Txn: {p.transactionId}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Status: <b>{p.status}</b></div>
              <select value={p.status} onChange={(e)=> update(p._id, { status: e.target.value })}>
                <option value="pending">pending</option>
                <option value="success">success</option>
                <option value="failed">failed</option>
                <option value="refunded">refunded</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
