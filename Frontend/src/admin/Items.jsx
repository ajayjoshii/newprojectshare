// src/admin/Items.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function Items() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", price: 0, inStock: true, category: "", description: "" });
  const fetchItems = async () => {
    const res = await api.get("/admin/items");
    setItems(res.data.items);
  };
  useEffect(()=>{ fetchItems(); }, []);

  const create = async () => {
    try {
      await api.post("/admin/items", form);
      setForm({ name: "", price: 0, inStock: true, category: "", description: "" });
      fetchItems();
    } catch (err) { alert("Failed"); }
  };

  const updateItem = async (id, payload) => {
    try { await api.put(`/admin/items/${id}`, payload); fetchItems(); } catch (err) { alert("Failed"); }
  };

  const deleteItem = async (id) => {
    if (!confirm("Delete item?")) return;
    try { await api.delete(`/admin/items/${id}`); fetchItems(); } catch (err) { alert("Failed"); }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Items</h1>

      <div className="p-4 bg-white rounded shadow mb-4">
        <h3 className="font-semibold">Create Item</h3>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full p-2 mb-2 border" />
        <input placeholder="Price" value={form.price} onChange={e=>setForm({...form, price: e.target.value})} className="w-full p-2 mb-2 border" />
        <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category: e.target.value})} className="w-full p-2 mb-2 border" />
        <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} className="w-full p-2 mb-2 border" />
        <button onClick={create} className="px-4 py-2 bg-green-600 text-white rounded">Create</button>
      </div>

      <div className="space-y-2">
        {items.map(item => (
          <div key={item._id} className="p-3 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-600">Rs {item.price} • {item.category} • {item.inStock ? "In Stock" : "Out"}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=> updateItem(item._id, { inStock: !item.inStock })} className="px-3 py-1 bg-blue-600 text-white rounded">Toggle Stock</button>
              <button onClick={()=> deleteItem(item._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
